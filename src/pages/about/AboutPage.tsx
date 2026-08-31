import { useTranslation } from "react-i18next";

export function AboutPage() {
    const { t } = useTranslation();

    return (
        <main>
            <section>
                <p>{t("about.eyebrow")}</p>

                <h1>
                    {t("about.title")}
                </h1>

                <p>
                    {t("about.description")}
                </p>
            </section>

            <section>
                <h2>
                    {t("about.interestsTitle")}
                </h2>

                <ul>
                    <li>
                        {t("about.interests.software")}
                    </li>

                    <li>
                        {t("about.interests.machineLearning")}
                    </li>

                    <li>
                        {t("about.interests.deepLearning")}
                    </li>

                    <li>
                        {t("about.interests.biotechnology")}
                    </li>

                    <li>
                        {t("about.interests.psychology")}
                    </li>

                    <li>
                        {t("about.interests.cynology")}
                    </li>

                    <li>
                        {t("about.interests.linguistics")}
                    </li>

                    <li>
                        {t("about.interests.art")}
                    </li>

                    <li>
                        {t("about.interests.languages")}
                    </li>

                    <li>
                        {t("about.interests.sports")}
                    </li>
                </ul>
            </section>
        </main>
    );
}