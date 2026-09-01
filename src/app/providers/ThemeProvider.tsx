import {
    useEffect,
    useState,
    type PropsWithChildren,
} from "react";

import {
    ThemeContext,
    THEME_STORAGE_KEY,
    type Theme,
} from "./ThemeContext";

function getSystemTheme(): "light" | "dark" {
    if (typeof window === "undefined") {
        return "light";
    }

    return window.matchMedia(
        "(prefers-color-scheme: dark)",
    ).matches
        ? "dark"
        : "light";
}

function getInitialTheme(): Theme {
    if (typeof window === "undefined") {
        return "system";
    }

    const storedTheme =
        localStorage.getItem(
            THEME_STORAGE_KEY,
        );

    if (
        storedTheme === "light" ||
        storedTheme === "dark" ||
        storedTheme === "system"
    ) {
        return storedTheme;
    }

    return "system";
}

export function ThemeProvider({
    children,
}: PropsWithChildren) {
    const [theme, setTheme] =
        useState<Theme>(getInitialTheme);

    const [systemTheme, setSystemTheme] =
        useState<"light" | "dark">(
            getSystemTheme,
        );

    const resolvedTheme =
        theme === "system"
            ? systemTheme
            : theme;

    useEffect(() => {
        localStorage.setItem(
            THEME_STORAGE_KEY,
            theme,
        );
    }, [theme]);

    useEffect(() => {
        const mediaQuery =
            window.matchMedia(
                "(prefers-color-scheme: dark)",
            );

        const handleChange = () => {
            setSystemTheme(
                mediaQuery.matches
                    ? "dark"
                    : "light",
            );
        };

        handleChange();

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
    }, []);

    useEffect(() => {
        const root =
            document.documentElement;

        root.classList.toggle(
            "dark",
            resolvedTheme === "dark",
        );

        root.dataset.theme = resolvedTheme;
    }, [resolvedTheme]);

    return (
        <ThemeContext.Provider
            value={{
                theme,
                setTheme,
                resolvedTheme,
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
}