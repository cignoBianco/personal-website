import { useEffect, useState, type PropsWithChildren } from "react";
import { I18nextProvider } from "react-i18next";

import i18n from "../../i18n";
import { useLocale } from "@/shared/routing";

export function I18nProvider({ children }: PropsWithChildren) {
    const locale = useLocale();

    const [isReady, setIsReady] =
        useState(
            i18n.resolvedLanguage === locale,
        );

    useEffect(() => {
        let cancelled = false;

        async function syncLanguage() {
            if (
                i18n.resolvedLanguage === locale
            ) {
                if (!cancelled) {
                    setIsReady(true);
                }

                return;
            }

            setIsReady(false);

            await i18n.changeLanguage(locale);

            if (!cancelled) {
                setIsReady(true);
            }
        }

        void syncLanguage();

        return () => {
            cancelled = true;
        };
    }, [locale]);

    if (!isReady) {
        return null;
    }

    return (
        <I18nextProvider i18n={i18n}>
            {children}
        </I18nextProvider>
    );
}