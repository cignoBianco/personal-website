import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import {
    ACTIVE_LOCALES,
    isLocale,
    type Locale,
} from "@/shared/routing";

import {
    replaceLocaleInPath,
} from "@/shared/routing/localePath";

const localeLabels: Record<Locale, string> = {
    ru: "RU",
    en: "EN",
    fr: "FR", // TODO: add service AVAILABLE_SITE_LOCALES
};

export function LanguageSwitcher() {
    const navigate = useNavigate();
    const location = useLocation();

    const { t } = useTranslation();

    const { locale } = useParams<{
        locale: string;
    }>();

    const currentLocale = isLocale(locale)
        ? locale
        : "en";

    function handleChange(
        nextLocale: Locale,
    ) {
        if (nextLocale === currentLocale) {
            return;
        }

        const nextPath =
            replaceLocaleInPath(
                location.pathname,
                nextLocale,
            );

        navigate(
            `${nextPath}${location.search}${location.hash}`,
        );
    }

    return (
        <div
            aria-label={t(
                "accessibility.languageSwitcher",
            )}
        >
            {ACTIVE_LOCALES.map(
                (localeOption) => (
                    <button
                        key={localeOption}
                        type="button"
                        onClick={() =>
                            handleChange(localeOption)
                        }
                        aria-pressed={
                            currentLocale ===
                            localeOption
                        }
                    >
                        {localeLabels[localeOption]}
                    </button>
                ),
            )}
        </div>
    );
}