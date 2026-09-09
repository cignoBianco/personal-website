import { useTranslation } from "react-i18next";

import type { Artwork } from "../types";

interface ArtworkDetailsProps {
    artwork: Artwork;
}

export function ArtworkDetails({
    artwork,
}: ArtworkDetailsProps) {
    const { t } =
        useTranslation();

    return (
        <section>
            <h2>
                {t("art.details")}
            </h2>

            <dl>
                <div>
                    <dt>
                        {t(
                            "art.type",
                        )}
                    </dt>

                    <dd>
                        {t(
                            `art.types.${artwork.type}`,
                        )}
                    </dd>
                </div>

                {artwork.year !==
                    null && (
                        <div>
                            <dt>
                                {t(
                                    "art.year",
                                )}
                            </dt>

                            <dd>
                                {
                                    artwork.year
                                }
                            </dd>
                        </div>
                    )}

                {artwork.technique && (
                    <div>
                        <dt>
                            {t(
                                "art.technique",
                            )}
                        </dt>

                        <dd>
                            {
                                artwork.technique
                            }
                        </dd>
                    </div>
                )}

                {artwork.dimensions && (
                    <div>
                        <dt>
                            {t(
                                "art.dimensions",
                            )}
                        </dt>

                        <dd>
                            {
                                artwork.dimensions
                            }
                        </dd>
                    </div>
                )}
            </dl>
        </section>
    );
}