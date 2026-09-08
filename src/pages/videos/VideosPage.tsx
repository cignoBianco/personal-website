import {
    useMemo,
    useState,
} from "react";

import { useTranslation } from "react-i18next";

import {
    useVideos,
    type Video,
} from "@/entities/video";

import { VideoCard } from "@/entities/video/components";

import { useLocale } from "@/shared/routing";

const EMPTY_VIDEOS: Video[] = [];

export function VideosPage() {
    const { t } =
        useTranslation();

    const locale =
        useLocale();

    const [featured, setFeatured] =
        useState(false);

    const params = useMemo(
        () => ({
            locale,

            ...(featured
                ? {
                    featured: true,
                }
                : {}),
        }),
        [
            locale,
            featured,
        ],
    );

    const {
        data,
        isLoading,
        isError,
    } = useVideos(params);

    const videoList =
        data ?? EMPTY_VIDEOS;

    if (isLoading) {
        return (
            <main>
                <p>
                    {t(
                        "common.loading",
                    )}
                </p>
            </main>
        );
    }

    if (isError) {
        return (
            <main>
                <p>
                    {t(
                        "common.error",
                    )}
                </p>
            </main>
        );
    }

    return (
        <main>
            <section>
                <div>
                    <p>
                        {t(
                            "videos.eyebrow",
                        )}
                    </p>

                    <h1>
                        {t(
                            "videos.title",
                        )}
                    </h1>

                    <p>
                        {t(
                            "videos.description",
                        )}
                    </p>
                </div>

                <div>
                    <label>
                        <input
                            type="checkbox"
                            checked={
                                featured
                            }
                            onChange={(event) =>
                                setFeatured(
                                    event
                                        .target
                                        .checked,
                                )
                            }
                        />

                        {t(
                            "videos.featured",
                        )}
                    </label>
                </div>

                {videoList.length ===
                    0 ? (
                    <p>
                        {t(
                            "videos.empty",
                        )}
                    </p>
                ) : (
                    <div>
                        {videoList.map(
                            (video) => (
                                <VideoCard
                                    key={
                                        video.id
                                    }
                                    video={
                                        video
                                    }
                                />
                            ),
                        )}
                    </div>
                )}
            </section>
        </main>
    );
}