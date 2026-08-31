import type { Locale } from "@/shared/routing/locales";

export interface ArticleDTO {
  id: string;
  slug: string;
  locale: Locale;

  title: string;
  excerpt: string | null;
  content: string;

  cover_image_url: string | null;

  published_at: string | null;
  updated_at: string;

  reading_time_minutes: number;

  is_published: boolean;

  category: ArticleCategoryDTO | null;
  tags: ArticleTagDTO[];

  available_locales: Locale[];
}

export interface ArticleCategoryDTO {
  id: string;
  slug: string;
  name: string;
}

export interface ArticleTagDTO {
  id: string;
  slug: string;
  name: string;
}

export interface ArticleListItemDTO {
  id: string;
  slug: string;
  locale: Locale;

  title: string;
  excerpt: string | null;

  cover_image_url: string | null;

  published_at: string | null;

  reading_time_minutes: number;

  category: ArticleCategoryDTO | null;

  tags: ArticleTagDTO[];
}

export interface ArticleListResponseDTO {
  items: ArticleListItemDTO[];

  total: number;
  page: number;
  page_size: number;
  pages: number;
}

export interface Article {
  id: string;
  slug: string;
  locale: Locale;

  title: string;
  excerpt?: string;
  content: string;

  coverImageUrl?: string;

  publishedAt?: Date;
  updatedAt: Date;

  readingTimeMinutes: number;

  category?: ArticleCategory;
  tags: ArticleTag[];

  availableLocales: Locale[];
}

export interface ArticleCategory {
  id: string;
  slug: string;
  name: string;
}

export interface ArticleTag {
  id: string;
  slug: string;
  name: string;
}