
import React from "react";
import { useTheme } from "@/app/providers";

export function ThemeSwitcher() {
    const { theme, setTheme } = useTheme();

    return (
        <button
            onClick={() =>
                setTheme(theme === "dark" ? "light" : "dark")
            }
        >
            {theme === "dark" ? "Light" : "Dark"}
        </button>
    );
}