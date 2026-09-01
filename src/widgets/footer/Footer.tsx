import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { useLocale } from "@/shared/routing";

export const Footer = () => {
    const { t } = useTranslation();

    const locale = useLocale();

    return (
        <footer>
            <div>
                <Link to={`/${locale}`}>
                    Portfolio
                </Link>

                <p>
                    {t("footer.description")}
                </p>
            </div>

            <nav>
                <Link
                    to={`/${locale}/about`}
                >
                    {t("navigation.about")}
                </Link>

                <Link
                    to={`/${locale}/projects`}
                >
                    {t("navigation.projects")}
                </Link>

                <Link
                    to={`/${locale}/art`}
                >
                    {t("navigation.art")}
                </Link>

                <Link
                    to={`/${locale}/contact`}
                >
                    {t("navigation.contact")}
                </Link>
            </nav>

            <div>
                <p>
                    © {new Date().getFullYear()}
                </p>
            </div>
        </footer>
    );
}