import { Link } from "react-router-dom";

import type { ProjectDTO } from "@/entities/project";
import { useLocale } from "@/shared/routing";

interface ProjectCardProps {
    project: ProjectDTO;
}

export function ProjectCard({
    project,
}: ProjectCardProps) {
    const locale = useLocale();

    return (
        <article>
            {project.cover_url && (
                <img
                    src={project.cover_url}
                    alt={project.title}
                />
            )}

            <div>
                <h2>
                    {project.title}
                </h2>

                {project.short_description && (
                    <p>
                        {project.short_description}
                    </p>
                )}

                {project.technologies?.length > 0 && (
                    <ul>
                        {project.technologies.map(
                            (technology) => (
                                <li
                                    key={technology}
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
                    View project
                </Link>
            </div>
        </article>
    );
}