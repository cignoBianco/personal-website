import { useTranslation } from "react-i18next";

interface ProjectLinksProps {
    githubUrl: string | null;
    demoUrl: string | null;
}

export function ProjectLinks({
    githubUrl,
    demoUrl,
}: ProjectLinksProps) {
    const { t } =
        useTranslation();

    if (!githubUrl && !demoUrl) {
        return null;
    }

    return (
        <div>
            {githubUrl && (
                <a
                    href={githubUrl}
                    target="_blank"
                    rel="noreferrer"
                >
                    GitHub
                </a>
            )}

            {demoUrl && (
                <a
                    href={demoUrl}
                    target="_blank"
                    rel="noreferrer"
                >
                    {t(
                        "projects.liveDemo",
                    )}
                </a>
            )}
        </div>
    );
}