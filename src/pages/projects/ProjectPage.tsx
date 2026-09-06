import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import {
    useProject,
} from "@/entities/project";

import { useLocale } from "@/shared/routing";

export function ProjectPage() {
    const { t } =
        useTranslation();

    const locale =
        useLocale();

    const { slug } =
        useParams<{
            slug: string;
        }>();

    const {
        data: project,
        isLoading,
        isError,
    } = useProject(
        slug ?? "",
        locale,
    );

    if (isLoading) {
        return (
            <main>
                <p>
                    {t("common.loading")}
                </p>
            </main>
        );
    }

    if (isError) {
        return (
            <main>
                <p>
                    {t("common.error")}
                </p>

                <Link
                    to={`/${locale}/projects`}
                >
                    {t("common.back")}
                </Link>
            </main>
        );
    }

    if (!project) {
        return (
            <main>
                <h1>
                    {t("projects.notFound")}
                </h1>

                <Link
                    to={`/${locale}/projects`}
                >
                    {t("common.back")}
                </Link>
            </main>
        );
    }

    return (
        <main>
            <article>
                {project.coverUrl && (
                    <img
                        src={project.coverUrl}
                        alt={project.title}
                    />
                )}

                <header>
                    <p>
                        {t(
                            "projects.project",
                        )}
                    </p>

                    <h1>
                        {project.title}
                    </h1>

                    <p>
                        {
                            project.shortDescription
                        }
                    </p>
                </header>

                {project.description && (
                    <section>
                        <p>
                            {
                                project.description
                            }
                        </p>
                    </section>
                )}

                {project.technologies.length >
                    0 && (
                        <section>
                            <h2>
                                {t(
                                    "projects.technologies",
                                )}
                            </h2>

                            <ul>
                                {project.technologies.map(
                                    (
                                        technology,
                                    ) => (
                                        <li
                                            key={
                                                technology
                                            }
                                        >
                                            {
                                                technology
                                            }
                                        </li>
                                    ),
                                )}
                            </ul>
                        </section>
                    )}

                {project.tags.length >
                    0 && (
                        <section>
                            <h2>
                                {t(
                                    "projects.tags",
                                )}
                            </h2>

                            <ul>
                                {project.tags.map(
                                    (tag) => (
                                        <li
                                            key={tag}
                                        >
                                            {tag}
                                        </li>
                                    ),
                                )}
                            </ul>
                        </section>
                    )}

                <div>
                    {project.githubUrl && (
                        <a
                            href={
                                project.githubUrl
                            }
                            target="_blank"
                            rel="noreferrer"
                        >
                            GitHub
                        </a>
                    )}

                    {project.demoUrl && (
                        <a
                            href={
                                project.demoUrl
                            }
                            target="_blank"
                            rel="noreferrer"
                        >
                            {t(
                                "projects.liveDemo",
                            )}
                        </a>
                    )}
                </div>

                <footer>
                    <Link
                        to={`/${locale}/projects`}
                    >
                        {t(
                            "common.back",
                        )}
                    </Link>
                </footer>
            </article>
        </main>
    );
}