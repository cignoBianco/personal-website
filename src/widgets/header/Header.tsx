import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { useLocale } from "@/shared/routing";

import { LanguageSwitcher } from "./LanguageSwitcher";
import { ThemeSwitcher } from "./ThemeSwitcher";

export function Header() {
    const { t } = useTranslation();

    const locale = useLocale();

    const navigation = [
        {
            key: "home",
            path: "",
        },
        {
            key: "about",
            path: "about",
        },
        {
            key: "articles",
            path: "articles",
        },
        {
            key: "blog",
            path: "blog",
        },
        {
            key: "videos",
            path: "videos",
        },
        {
            key: "projects",
            path: "projects",
        },
        {
            key: "art",
            path: "art",
        },
        {
            key: "resume",
            path: "resume",
        },
        {
            key: "contact",
            path: "contact",
        },
    ];

    return (
        <header>
            <nav aria-label="Main navigation">
                <NavLink to={`/${locale}`}>
                    Portfolio
                </NavLink>

                <div>
                    {navigation.map((item) => {
                        const to = item.path
                            ? `/${locale}/${item.path}`
                            : `/${locale}`;

                        return (
                            <NavLink
                                key={item.key}
                                to={to}
                                end={!item.path}
                            >
                                {t(
                                    `navigation.${item.key}`,
                                )}
                            </NavLink>
                        );
                    })}
                </div>

                <div>
                    <ThemeSwitcher />

                    <LanguageSwitcher />
                </div>
            </nav>
        </header>
    );
}