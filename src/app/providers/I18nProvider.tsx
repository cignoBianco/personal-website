import { useEffect, type PropsWithChildren } from "react";
import { I18nextProvider } from "react-i18next";

import i18n from "../../i18n";
import { useLocale } from "@/shared/routing";

export function I18nProvider({ children }: PropsWithChildren) {
    const locale = useLocale();

    useEffect(() => {
        if (i18n.language !== locale) {
            void i18n.changeLanguage(locale);
        }
    }, [locale]);

    return (
        <I18nextProvider i18n={i18n}>
            {children}
        </I18nextProvider>
    );
}