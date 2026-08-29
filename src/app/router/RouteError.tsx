import {
    isRouteErrorResponse,
    Link,
    useRouteError,
} from "react-router-dom";

export function RouteError() {
    const error = useRouteError();

    let title = "Something went wrong";
    let description =
        "An unexpected error occurred.";

    if (isRouteErrorResponse(error)) {
        if (error.status === 404) {
            title = "Page not found";
            description =
                "The page you are looking for does not exist.";
        }

        if (error.status === 403) {
            title = "Access denied";
            description =
                "You don't have permission to access this page.";
        }
    }

    return (
        <main className="flex min-h-screen items-center justify-center px-6">
            <div className="max-w-md text-center">
                <p className="mb-2 text-sm text-muted-foreground">
                    Error
                </p>

                <h1 className="mb-4 text-4xl font-semibold">
                    {title}
                </h1>

                <p className="mb-8 text-muted-foreground">
                    {description}
                </p>

                <Link
                    to="/en"
                    className="inline-flex rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground"
                >
                    Go home
                </Link>
            </div>
        </main>
    );
}