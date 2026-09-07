import {
    Link,
    useParams,
} from "react-router-dom";

import { useTranslation } from "react-i18next";

import {
    useProject,
} from "@/entities/project";

import {
    ProjectHero,
    ProjectLinks,
    ProjectTags,
    ProjectTechnologies,
} from "@/entities/project/components";

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
                    {t(
                        "projects.notFound",
                    )}
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
                <ProjectHero
                    project={project}
                />

                <section>
                    <p>
                        {
                            project.description
                        }
                    </p>
                </section>

                <ProjectTechnologies
                    technologies={
                        project.technologies
                    }
                />

                <ProjectTags
                    tags={project.tags}
                />

                <ProjectLinks
                    githubUrl={
                        project.githubUrl
                    }
                    demoUrl={
                        project.demoUrl
                    }
                />

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