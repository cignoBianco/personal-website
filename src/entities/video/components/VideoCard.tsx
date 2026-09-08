import { ExternalLink } from "lucide-react";
import { useTranslation } from "react-i18next";

import { formatDuration } from "@/shared/lib/formatDuration";

import type { Video } from "../types";

interface VideoCardProps {
    video: Video;
}

export function VideoCard({
    video,
}: VideoCardProps) {
    const { t } =
        useTranslation();

    return (
        <article>
            <a
                href={video.videoUrl}
                target="_blank"
                rel="noreferrer"
            >
                <div>
                    {video.thumbnailUrl ? (
                        <img
                            src={
                                video.thumbnailUrl
                            }
                            alt={video.title}
                        />
                    ) : (
                        <div
                            aria-hidden="true"
                        >
                            {t(
                                "videos.thumbnailPlaceholder",
                            )}
                        </div>
                    )}

                    {video.duration !==
                        null && (
                            <span>
                                {formatDuration(
                                    video.duration,
                                )}
                            </span>
                        )}
                </div>

                <div>
                    <h2>
                        {video.title}
                    </h2>

                    <p>
                        {
                            video.description
                        }
                    </p>
                </div>

                <span>
                    {t(
                        "videos.watch",
                    )}

                    <ExternalLink
                        size={16}
                        aria-hidden="true"
                    />
                </span>
            </a>
        </article>
    );
}