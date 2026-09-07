import type { Project } from "../types";

interface ProjectHeroProps {
    project: Project;
}

export function ProjectHero({
    project,
}: ProjectHeroProps) {
    return (
        <header>
            {project.coverUrl && (
                <img
                    src={project.coverUrl}
                    alt={project.title}
                />
            )}

            <div>
                <h1>
                    {project.title}
                </h1>

                <p>
                    {project.shortDescription}
                </p>
            </div>
        </header>
    );
}