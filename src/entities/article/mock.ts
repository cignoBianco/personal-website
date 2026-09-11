import type { ArticleDTO } from "./types";

export const articles: ArticleDTO[] = [
    {
        id: "article-1-en",
        slug: "machine-learning-for-beginners",
        locale: "en",

        title:
            "Machine Learning for Beginners",

        excerpt:
            "A practical introduction to machine learning.",

        content:
            "# Machine Learning for Beginners\n\n...",

        cover_image_url: null,

        published_at:
            "2026-09-01T10:00:00Z",

        updated_at:
            "2026-09-01T10:00:00Z",

        reading_time_minutes: 6,

        is_published: true,

        category: {
            id: "machine-learning",
            slug: "machine-learning",
            name: "Machine Learning",
        },

        tags: [
            {
                id: "python",
                slug: "python",
                name: "Python",
            },
            {
                id: "ai",
                slug: "ai",
                name: "AI",
            },
        ],

        available_locales: [
            "en",
            "ru",
        ],
    },

    {
        id: "article-1-ru",
        slug: "machine-learning-for-beginners",
        locale: "ru",

        title:
            "Машинное обучение для начинающих",

        excerpt:
            "Практическое введение в машинное обучение.",

        content:
            "# Машинное обучение для начинающих\n\n...",

        cover_image_url: null,

        published_at:
            "2026-09-01T10:00:00Z",

        updated_at:
            "2026-09-01T10:00:00Z",

        reading_time_minutes: 6,

        is_published: true,

        category: {
            id: "machine-learning",
            slug: "machine-learning",
            name: "Машинное обучение",
        },

        tags: [
            {
                id: "python",
                slug: "python",
                name: "Python",
            },
            {
                id: "ai",
                slug: "ai",
                name: "ИИ",
            },
        ],

        available_locales: [
            "en",
            "ru",
        ],
    },
];