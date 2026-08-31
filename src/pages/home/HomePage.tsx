import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { useLocale } from "@/shared/routing";

export function HomePage() {
    const { t } = useTranslation();
    const locale = useLocale();

    return (
        <main>
            <section>
                <p>
                    {t("home.eyebrow")}
                </p>

                <h1>
                    {t("home.title")}
                </h1>

                <p>
                    {t("home.description")}
                </p>

                <div>
                    <Link
                        to={`/${locale}/projects`}
                    >
                        {t("home.viewProjects")}
                    </Link>

                    <Link
                        to={`/${locale}/resume`}
                    >
                        {t("home.downloadCv")}
                    </Link>
                </div>
            </section>
        </main>
    );
}