import {
    useMemo,
    useState,
} from "react";

import { useTranslation } from "react-i18next";

import {
    useArtworks,
    type Artwork,
} from "@/entities/artwork";

import { ArtworkCard } from "@/entities/artwork/components";

import { useLocale } from "@/shared/routing";

const EMPTY_ARTWORKS: Artwork[] = [];

export function ArtPage() {
    const { t } =
        useTranslation();

    const locale =
        useLocale();

    const [type, setType] =
        useState("");

    const [tag, setTag] =
        useState("");

    const [featured, setFeatured] =
        useState(false);

    const params = useMemo(
        () => ({
            locale,

            ...(type
                ? {
                    type,
                }
                : {}),

            ...(tag
                ? {
                    tag,
                }
                : {}),

            ...(featured
                ? {
                    featured: true,
                }
                : {}),
        }),
        [
            locale,
            type,
            tag,
            featured,
        ],
    );

    const {
        data,
        isLoading,
        isError,
    } = useArtworks(params);

    const artworkList =
        data ?? EMPTY_ARTWORKS;

    const types = useMemo(
        () =>
            Array.from(
                new Set(
                    artworkList.map(
                        (artwork) =>
                            artwork.type,
                    ),
                ),
            ),
        [artworkList],
    );

    const tags = useMemo(
        () =>
            Array.from(
                new Set(
                    artworkList.flatMap(
                        (artwork) =>
                            artwork.tags,
                    ),
                ),
            ),
        [artworkList],
    );

    function resetFilters() {
        setType("");
        setTag("");
        setFeatured(false);
    }

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
                <header>
                    <p>
                        {t(
                            "art.eyebrow",
                        )}
                    </p>

                    <h1>
                        {t(
                            "art.title",
                        )}
                    </h1>

                    <p>
                        {t(
                            "art.description",
                        )}
                    </p>
                </header>

                <section>
                    <div>
                        <label>
                            {t(
                                "art.filters.type",
                            )}

                            <select
                                value={type}
                                onChange={(event) =>
                                    setType(
                                        event
                                            .target
                                            .value,
                                    )
                                }
                            >
                                <option value="">
                                    {t(
                                        "art.filters.all",
                                    )}
                                </option>

                                {types.map(
                                    (
                                        artworkType,
                                    ) => (
                                        <option
                                            key={
                                                artworkType
                                            }
                                            value={
                                                artworkType
                                            }
                                        >
                                            {t(
                                                `art.types.${artworkType}`,
                                            )}
                                        </option>
                                    ),
                                )}
                            </select>
                        </label>

                        <label>
                            {t(
                                "art.filters.tag",
                            )}

                            <select
                                value={tag}
                                onChange={(event) =>
                                    setTag(
                                        event
                                            .target
                                            .value,
                                    )
                                }
                            >
                                <option value="">
                                    {t(
                                        "art.filters.all",
                                    )}
                                </option>

                                {tags.map(
                                    (
                                        artworkTag,
                                    ) => (
                                        <option
                                            key={
                                                artworkTag
                                            }
                                            value={
                                                artworkTag
                                            }
                                        >
                                            {
                                                artworkTag
                                            }
                                        </option>
                                    ),
                                )}
                            </select>
                        </label>

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
                                "art.filters.featured",
                            )}
                        </label>

                        <button
                            type="button"
                            onClick={
                                resetFilters
                            }
                        >
                            {t(
                                "art.filters.reset",
                            )}
                        </button>
                    </div>
                </section>

                {artworkList.length ===
                    0 ? (
                    <p>
                        {t(
                            "art.empty",
                        )}
                    </p>
                ) : (
                    <div>
                        {artworkList.map(
                            (artwork) => (
                                <ArtworkCard
                                    key={
                                        artwork.id
                                    }
                                    artwork={
                                        artwork
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