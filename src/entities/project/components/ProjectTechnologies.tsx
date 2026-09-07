import { useTranslation } from "react-i18next";

interface ProjectTechnologiesProps {
    technologies: string[];
}

export function ProjectTechnologies({
    technologies,
}: ProjectTechnologiesProps) {
    const { t } =
        useTranslation();

    if (technologies.length === 0) {
        return null;
    }

    return (
        <section>
            <h2>
                {t(
                    "projects.technologies",
                )}
            </h2>

            <ul>
                {technologies.map(
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
        </section>
    );
}