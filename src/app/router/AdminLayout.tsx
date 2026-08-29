import { Navigate, Outlet } from "react-router-dom";

function useIsAuthenticated() {
    // TODO:  access token / session.
    return true;
}

export function AdminLayout() {
    const isAuthenticated = useIsAuthenticated();

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    return (
        <div className="min-h-screen">
            <aside>
                {/* AdminSidebar */}
            </aside>

            <main>
                <Outlet />
            </main>
        </div>
    );
}