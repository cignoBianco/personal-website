import type { RouteObject } from "react-router-dom";

import { LocaleLayout } from "./LocaleLayout";
import { RouteError } from "./RouteError";

import {
    ArticlesPage,
    ArticlePage,
} from "@/pages/articles";

// import { VideosPage } from "@/pages/videos/VideosPage";

// import {
//     ArtPage,
//     ArtworkPage,
// } from "@/pages/art";

import { HomePage } from "@/pages/home";
import { ResumePage } from "@/pages/resume";
import { ContactPage } from "@/pages/contact";
import { AboutPage } from "@/pages/about";
import { BlogPage } from "@/pages/blog";
import { ProjectPage, ProjectsPage } from "@/pages/projects";
// import { ProjectPage, ProjectsPage } from "@/pages/projects";

export const publicRoutes: RouteObject = {
    path: "/:locale",
    element: <LocaleLayout />,
    errorElement: <RouteError />,
    children: [
        {
            index: true,
            element: <HomePage />,
        },

        {
            path: "about",
            element: <AboutPage />,
        },

        {
            path: "articles",
            children: [
                {
                    index: true,
                    element: <ArticlesPage />,
                },
                {
                    path: ":slug",
                    element: <ArticlePage />,
                },
            ],
        },

        {
            path: "blog",
            element: <BlogPage />,
        },

        // {
        //     path: "videos",
        //     element: <VideosPage />,
        // },

        {
            path: "projects",
            children: [
                {
                    index: true,
                    element: <ProjectsPage />,
                },
                {
                    path: ":slug",
                    element: <ProjectPage />,
                },
            ],
        },

        // {
        //     path: "art",
        //     children: [
        //         {
        //             index: true,
        //             element: <ArtPage />,
        //         },
        //         {
        //             path: ":slug",
        //             element: <ArtworkPage />,
        //         },
        //     ],
        // },

        {
            path: "resume",
            element: <ResumePage />,
        },

        {
            path: "contact",
            element: <ContactPage />,
        },
    ],
};