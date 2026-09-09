import { useQuery } from "@tanstack/react-query";

import {
    getArtwork,
    getArtworks,
    type GetArtworksParams,
} from "./api";

export function useArtworks(
    params: GetArtworksParams,
) {
    return useQuery({
        queryKey: [
            "artworks",
            params,
        ],
        queryFn: () =>
            getArtworks(params),
    });
}

export function useArtwork(
    slug: string,
    locale: string,
) {
    return useQuery({
        queryKey: [
            "artwork",
            locale,
            slug,
        ],
        queryFn: () =>
            getArtwork(
                slug,
                locale,
            ),
        enabled:
            Boolean(slug) &&
            Boolean(locale),
    });
}