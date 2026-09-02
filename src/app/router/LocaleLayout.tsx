import { Navigate, Outlet, useParams } from "react-router-dom";

import {
    type Locale, isLocale
} from "../../shared/routing/locales";
import { Header } from "@/widgets/header/Header";
import { Footer } from "@/widgets/footer/Footer";
import { I18nProvider } from "../providers";


export function LocaleLayout() {
    const { locale } = useParams<{ locale: Locale }>();

    if (!isLocale(locale)) {
        return <Navigate to="/en" replace />;
    }

    return (
        <I18nProvider>
            <div className="min-h-screen">
                <Header />

                <main>
                    <Outlet />
                </main>

                <Footer />
            </div>
        </I18nProvider>

    );
}