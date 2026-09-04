import { Link } from "react-router-dom";

// import type { ProjectDTO } from "@/entities/project";
import { useLocale } from "@/shared/routing";
import type { Project } from "../types";

interface ProjectCardProps {
    project: Project;//ProjectDTO;
}

export function ProjectCard({
    project,
}: ProjectCardProps) {
    const locale = useLocale();

    return (
        <article>
            {project.coverUrl && (
                <img
                    src={project.coverUrl}
                    alt={project.title}
                />
            )}

            <div>
                <h2>
                    {project.title}
                </h2>

                {project.shortDescription && (
                    <p>
                        {project.shortDescription}
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