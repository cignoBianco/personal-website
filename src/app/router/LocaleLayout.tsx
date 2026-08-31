import { Navigate, Outlet, useParams } from "react-router-dom";

import {
    type Locale, isLocale
} from "../../shared/routing/locales";
import { Header } from "@/widgets/header/Header";
import { Footer } from "@/widgets/footer/Footer";


export function LocaleLayout() {
    const { locale } = useParams<{ locale: Locale }>();

    if (!isLocale(locale)) {
        return <Navigate to="/en" replace />;
    }

    return (
        <div className="min-h-screen">
            <Header />

            <main>
                <Outlet />
            </main>

            <Footer />
        </div>
    );
}