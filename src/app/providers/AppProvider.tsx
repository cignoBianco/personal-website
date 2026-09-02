import type { PropsWithChildren } from "react";

import { QueryProvider } from "./QueryProvider";
import { ThemeProvider } from "./ThemeProvider";

export function AppProvider({ children }: PropsWithChildren) {
    return (
        <QueryProvider>
            <ThemeProvider>{children}</ThemeProvider>
        </QueryProvider>
    );
}