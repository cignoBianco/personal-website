import type { Artwork } from "./types";
import { artworks } from "./mock";

export interface GetArtworksParams {
    locale: string;
    type?: string;
    tag?: string;
    featured?: boolean;
}

export async function getArtworks(
    params: GetArtworksParams,
): Promise<Artwork[]> {
    let result = [...artworks];

    if (params.type) {
        result = result.filter(
            (artwork) =>
                artwork.type ===
                params.type,
        );
    }

    if (params.tag) {
        result = result.filter(
            (artwork) =>
                artwork.tags.includes(
                    params.tag!,
                ),
        );
    }

    if (params.featured !== undefined) {
        result = result.filter(
            (artwork) =>
                artwork.featured ===
                params.featured,
        );
    }

    return Promise.resolve(result);
}

export async function getArtwork(
    slug: string,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _locale: string,
): Promise<Artwork | null> {
    return Promise.resolve(
        artworks.find(
            (artwork) =>
                artwork.slug === slug,
        ) ?? null,
    );
}