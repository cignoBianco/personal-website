import type { Artwork } from "./types";

export const artworks: Artwork[] = [
    {
        id: 1,
        slug: "portrait-study",
        title: "Portrait Study",
        description:
            "A portrait study exploring light, expression and human emotion.",
        imageUrl: null,
        type: "painting",
        year: 2026,
        technique: "Mixed media",
        dimensions: "40 × 50 cm",
        tags: [
            "Portrait",
            "Study",
            "Figure",
        ],
        featured: true,
        publishedAt: "2026-08-20",
    },
    {
        id: 2,
        slug: "botanical-study",
        title: "Botanical Study",
        description:
            "A botanical artwork inspired by plant morphology and natural forms.",
        imageUrl: null,
        type: "drawing",
        year: 2026,
        technique: "Graphite",
        dimensions: "30 × 40 cm",
        tags: [
            "Botanical",
            "Plants",
            "Nature",
        ],
        featured: true,
        publishedAt: "2026-08-25",
    },
    {
        id: 3,
        slug: "digital-composition",
        title: "Digital Composition",
        description:
            "An experimental digital composition combining geometric forms and organic elements.",
        imageUrl: null,
        type: "digital",
        year: 2025,
        technique: "Digital",
        dimensions: null,
        tags: [
            "Digital",
            "Abstract",
            "Composition",
        ],
        featured: false,
        publishedAt: "2025-11-10",
    },
    {
        id: 4,
        slug: "botanical-illustration",
        title: "Botanical Illustration",
        description:
            "A detailed botanical illustration combining scientific observation with artistic interpretation.",
        imageUrl: null,
        type: "illustration",
        year: 2025,
        technique: "Watercolor",
        dimensions: "24 × 32 cm",
        tags: [
            "Botanical",
            "Illustration",
            "Plants",
        ],
        featured: false,
        publishedAt: "2025-09-12",
    },
];