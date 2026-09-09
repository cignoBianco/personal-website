export type ArtworkType =
    | "painting"
    | "drawing"
    | "digital"
    | "illustration"
    | "design"
    | "other";

export interface Artwork {
    id: number;
    slug: string;

    title: string;
    description: string;

    imageUrl: string | null;

    type: ArtworkType;

    year: number | null;

    technique: string | null;

    dimensions: string | null;

    tags: string[];

    featured: boolean;

    publishedAt: string | null;
}