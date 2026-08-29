import type { RouteObject } from "react-router-dom";

import { LocaleLayout } from "./LocaleLayout";
import { RouteError } from "./RouteError";

import { HomePage } from "../../pages/home/HomePage";
import { AboutPage } from "../../pages/about/AboutPage";

import {
    ArticlesPage,
    ArticlePage,
} from "../../pages/articles";

import { BlogPage } from "../../pages/blog/BlogPage";

import {
    ProjectsPage,
    ProjectPage,
} from "../../pages/projects";

import { VideosPage } from "../../pages/videos/VideosPage";

import {
    ArtPage,
    ArtworkPage,
} from "../../pages/art";

import { ResumePage } from "../../pages/resume/ResumePage";

import { ContactPage } from "../../pages/contact/ContactPage";

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

        {
            path: "videos",
            element: <VideosPage />,
        },

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

        {
            path: "art",
            children: [
                {
                    index: true,
                    element: <ArtPage />,
                },
                {
                    path: ":slug",
                    element: <ArtworkPage />,
                },
            ],
        },

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