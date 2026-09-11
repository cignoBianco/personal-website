import type {
    Article,
    ArticleCategory,
    ArticleCategoryDTO,
    ArticleDTO,
    ArticleListItem,
    ArticleListItemDTO,
    ArticleTag,
    ArticleTagDTO,
} from "./types";

function mapCategory(
    category: ArticleCategoryDTO | null,
): ArticleCategory | null {
    if (!category) {
        return null;
    }

    return {
        id: category.id,
        slug: category.slug,
        name: category.name,
    };
}

function mapTag(
    tag: ArticleTagDTO,
): ArticleTag {
    return {
        id: tag.id,
        slug: tag.slug,
        name: tag.name,
    };
}

export function mapArticle(
    dto: ArticleDTO,
): Article {
    return {
        id: dto.id,
        slug: dto.slug,
        locale: dto.locale,

        title: dto.title,
        excerpt: dto.excerpt,
        content: dto.content,

        coverImageUrl:
            dto.cover_image_url,

        publishedAt:
            dto.published_at
                ? new Date(
                      dto.published_at,
                  )
                : null,

        updatedAt: new Date(
            dto.updated_at,
        ),

        readingTimeMinutes:
            dto.reading_time_minutes,

        category: mapCategory(
            dto.category,
        ),

        tags: dto.tags.map(mapTag),

        availableLocales:
            dto.available_locales,
    };
}

export function mapArticleListItem(
    dto: ArticleListItemDTO,
): ArticleListItem {
    return {
        id: dto.id,
        slug: dto.slug,
        locale: dto.locale,

        title: dto.title,
        excerpt: dto.excerpt,

        coverImageUrl:
            dto.cover_image_url,

        publishedAt:
            dto.published_at
                ? new Date(
                      dto.published_at,
                  )
                : null,

        readingTimeMinutes:
            dto.reading_time_minutes,

        category: mapCategory(
            dto.category,
        ),

        tags: dto.tags.map(mapTag),
    };
}