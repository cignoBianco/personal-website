import { useTranslation } from "react-i18next";

interface ProjectTagsProps {
    tags: string[];
}

export function ProjectTags({
    tags,
}: ProjectTagsProps) {
    const { t } =
        useTranslation();

    if (tags.length === 0) {
        return null;
    }

    return (
        <section>
            <h2>
                {t("projects.tags")}
            </h2>

            <ul>
                {tags.map((tag) => (
                    <li key={tag}>
                        {tag}
                    </li>
                ))}
            </ul>
        </section>
    );
}