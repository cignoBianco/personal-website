import { useQuery } from "@tanstack/react-query";

import {
    getVideo,
    getVideos,
    type GetVideosParams,
} from "./api";

export function useVideos(
    params: GetVideosParams,
) {
    return useQuery({
        queryKey: [
            "videos",
            params,
        ],
        queryFn: () =>
            getVideos(params),
    });
}

export function useVideo(
    slug: string,
    locale: string,
) {
    return useQuery({
        queryKey: [
            "video",
            locale,
            slug,
        ],
        queryFn: () =>
            getVideo(
                slug,
                locale,
            ),
        enabled:
            Boolean(slug) &&
            Boolean(locale),
    });
}