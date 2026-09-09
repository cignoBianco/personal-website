import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { useLocale } from "@/shared/routing";

import type { Artwork } from "../types";

interface ArtworkCardProps {
    artwork: Artwork;
}

export function ArtworkCard({
    artwork,
}: ArtworkCardProps) {
    const { t } =
        useTranslation();

    const locale =
        useLocale();

    return (
        <article>
            <Link
                to={`/${locale}/art/${artwork.slug}`}
            >
                <div>
                    {artwork.imageUrl ? (
                        <img
                            src={
                                artwork.imageUrl
                            }
                            alt={artwork.title}
                        />
                    ) : (
                        <div
                            aria-hidden="true"
                        >
                            {t(
                                "art.thumbnailPlaceholder",
                            )}
                        </div>
                    )}
                </div>

                <div>
                    <p>
                        {t(
                            `art.types.${artwork.type}`,
                        )}
                    </p>

                    <h2>
                        {artwork.title}
                    </h2>

                    {artwork.year !==
                        null && (
                            <p>
                                {
                                    artwork.year
                                }
                            </p>
                        )}
                </div>
            </Link>
        </article>
    );
}