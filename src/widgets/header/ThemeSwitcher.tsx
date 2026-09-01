import { useTranslation } from "react-i18next";

import { useTheme } from "@/app/providers/useTheme";

export function ThemeSwitcher() {
    const { t } = useTranslation();

    const {
        theme,
        setTheme,
        resolvedTheme,
    } = useTheme();

    function handleToggle() {
        if (theme === "system") {
            setTheme(
                resolvedTheme === "dark"
                    ? "light"
                    : "dark",
            );

            return;
        }

        if (theme === "light") {
            setTheme("dark");

            return;
        }

        setTheme("system");
    }

    return (
        <button
            type="button"
            onClick={handleToggle}
            aria-label={t(
                "accessibility.themeSwitcher",
            )}
        >
            {resolvedTheme === "dark"
                ? "☀"
                : "☾"}
        </button>
    );
}