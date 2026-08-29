import {
    useEffect,
    useMemo,
    useState,
    type PropsWithChildren,
} from "react";

import {
    THEME_STORAGE_KEY,
    ThemeContext,
    type Theme,
} from "./ThemeContext";

function getSystemTheme(): "light" | "dark" {
    if (typeof window === "undefined") {
        return "dark";
    }

    return window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
}

function getInitialTheme(): Theme {
    if (typeof window === "undefined") {
        return "system";
    }

    const savedTheme = localStorage.getItem(
        THEME_STORAGE_KEY,
    );

    if (
        savedTheme === "light" ||
        savedTheme === "dark" ||
        savedTheme === "system"
    ) {
        return savedTheme;
    }

    return "system";
}

export function ThemeProvider({
    children,
}: PropsWithChildren) {
    const [theme, setTheme] = useState<Theme>(
        getInitialTheme,
    );

    const resolvedTheme =
        theme === "system" ? getSystemTheme() : theme;

    useEffect(() => {
        const root = document.documentElement;

        root.classList.remove("light", "dark");
        root.classList.add(resolvedTheme);

        localStorage.setItem(
            THEME_STORAGE_KEY,
            theme,
        );
    }, [theme, resolvedTheme]);

    useEffect(() => {
        if (theme !== "system") {
            return;
        }

        const mediaQuery = window.matchMedia(
            "(prefers-color-scheme: dark)",
        );

        const handleChange = () => {
            const nextTheme = mediaQuery.matches
                ? "dark"
                : "light";

            document.documentElement.classList.remove(
                "light",
                "dark",
            );

            document.documentElement.classList.add(
                nextTheme,
            );
        };

        mediaQuery.addEventListener(
            "change",
            handleChange,
        );

        return () => {
            mediaQuery.removeEventListener(
                "change",
                handleChange,
            );
        };
    }, [theme]);

    const value = useMemo(
        () => ({
            theme,
            setTheme,
            resolvedTheme,
        }),
        [theme, resolvedTheme],
    );

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
}