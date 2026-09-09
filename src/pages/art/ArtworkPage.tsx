import {
    Link,
    useParams,
} from "react-router-dom";

import { useTranslation } from "react-i18next";

import {
    useArtwork,
} from "@/entities/artwork";

import {
    ArtworkDetails,
} from "@/entities/artwork/components";

import { useLocale } from "@/shared/routing";

export function ArtworkPage() {
    const { t } =
        useTranslation();

    const locale =
        useLocale();

    const { slug } =
        useParams<{
            slug: string;
        }>();

    const {
        data: artwork,
        isLoading,
        isError,
    } = useArtwork(
        slug ?? "",
        locale,
    );

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

                <Link
                    to={`/${locale}/art`}
                >
                    {t("common.back")}
                </Link>
            </main>
        );
    }

    if (!artwork) {
        return (
            <main>
                <h1>
                    {t(
                        "art.notFound",
                    )}
                </h1>

                <Link
                    to={`/${locale}/art`}
                >
                    {t("common.back")}
                </Link>
            </main>
        );
    }

    return (
        <main>
            <article>
                <header>
                    {artwork.imageUrl && (
                        <img
                            src={
                                artwork.imageUrl
                            }
                            alt={
                                artwork.title
                            }
                        />
                    )}

                    <p>
                        {t(
                            `art.types.${artwork.type}`,
                        )}
                    </p>

                    <h1>
                        {artwork.title}
                    </h1>

                    <p>
                        {
                            artwork.description
                        }
                    </p>
                </header>

                <ArtworkDetails
                    artwork={
                        artwork
                    }
                />

                {artwork.tags.length >
                    0 && (
                        <section>
                            <h2>
                                {t(
                                    "art.tags",
                                )}
                            </h2>

                            <ul>
                                {artwork.tags.map(
                                    (artworkTag) => (
                                        <li
                                            key={
                                                artworkTag
                                            }
                                        >
                                            {
                                                artworkTag
                                            }
                                        </li>
                                    ),
                                )}
                            </ul>
                        </section>
                    )}

                <footer>
                    <Link
                        to={`/${locale}/art`}
                    >
                        {t(
                            "common.back",
                        )}
                    </Link>
                </footer>
            </article>
        </main>
    );
}