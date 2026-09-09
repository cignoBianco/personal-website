import type { Video } from "./types";
import { videos } from "./mock";

export interface GetVideosParams {
    locale: string;
    featured?: boolean;
    tag?: string;
}

export async function getVideos(
    params: GetVideosParams,
): Promise<Video[]> {
    let result = [...videos];

    if (params.featured !== undefined) {
        result = result.filter(
            (video) =>
                video.featured ===
                params.featured,
        );
    }

    if (params.tag) {
        result = result.filter(
            (video) =>
                video.tags.includes(
                    params.tag!,
                ),
        );
    }

    return Promise.resolve(result);
}

export async function getVideo(
    slug: string,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _locale: string,
): Promise<Video | null> {
    return Promise.resolve(
        videos.find(
            (video) =>
                video.slug === slug,
        ) ?? null,
    );
}