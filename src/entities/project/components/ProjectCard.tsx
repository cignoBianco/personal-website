import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import type { Project } from "../types";
import { useLocale } from "@/shared/routing";

interface ProjectCardProps {
    project: Project;
}

export function ProjectCard({
    project,
}: ProjectCardProps) {
    const locale =
        useLocale();

    const { t } =
        useTranslation();

    return (
        <article>
            {project.coverUrl && (
                <img
                    src={project.coverUrl}
                    alt={project.title}
                />
            )}

            <h2>
                {project.title}
            </h2>

            <p>
                {project.shortDescription}
            </p>

            {project.technologies.length >
                0 && (
                    <ul>
                        {project.technologies.map(
                            (technology) => (
                                <li
                                    key={
                                        technology
                                    }
                                >
                                    {technology}
                                </li>
                            ),
                        )}
                    </ul>
                )}

            <Link
                to={`/${locale}/projects/${project.slug}`}
            >
                {t("common.readMore")}
            </Link>
        </article>
    );
}