export type VideoPlatform =
    | "youtube"
    | "vimeo"
    | "other";

export interface Video {
    id: number;
    slug: string;

    title: string;
    description: string;

    thumbnailUrl: string | null;
    videoUrl: string;

    platform: VideoPlatform;

    duration: number | null;

    tags: string[];

    publishedAt: string | null;

    featured: boolean;
}