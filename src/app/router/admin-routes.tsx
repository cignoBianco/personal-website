import type { RouteObject } from "react-router-dom";

import { AdminLayout } from "./AdminLayout";
import { RouteError } from "./RouteError";

import { AdminDashboardPage } from "../../pages/admin/dashboard";
import { AdminArticlesPage } from "../../pages/admin/articles";
import { AdminBlogPage } from "../../pages/admin/blog";
import { AdminProjectsPage } from "../../pages/admin/projects";
import { AdminVideosPage } from "../../pages/admin/videos";
import { AdminArtPage } from "../../pages/admin/art";
import { AdminResumePage } from "../../pages/admin/resume";
import { AdminMediaPage } from "../../pages/admin/media";

export const adminRoutes: RouteObject = {
    path: "/admin",
    element: <AdminLayout />,
    errorElement: <RouteError />,
    children: [
        {
            index: true,
            element: <AdminDashboardPage />,
        },

        {
            path: "articles",
            element: <AdminArticlesPage />,
        },

        {
            path: "blog",
            element: <AdminBlogPage />,
        },

        {
            path: "projects",
            element: <AdminProjectsPage />,
        },

        {
            path: "videos",
            element: <AdminVideosPage />,
        },

        {
            path: "art",
            element: <AdminArtPage />,
        },

        {
            path: "resume",
            element: <AdminResumePage />,
        },

        {
            path: "media",
            element: <AdminMediaPage />,
        },
    ],
};