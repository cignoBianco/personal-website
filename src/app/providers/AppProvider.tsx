import type { PropsWithChildren } from "react";

import { I18nProvider } from "./I18nProvider";
import { QueryProvider } from "./QueryProvider";
import { ThemeProvider } from "./ThemeProvider";

export function AppProvider({ children }: PropsWithChildren) {
    return (
        <QueryProvider>
            <I18nProvider>
                <ThemeProvider>{children}</ThemeProvider>
            </I18nProvider>
        </QueryProvider>
    );
}