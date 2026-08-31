import { apiRequest } from "@/shared/api/client";
import type { Locale } from "@/shared/routing/locales";

import type {
  ArticleDTO,
  ArticleListResponseDTO,
} from "./types";

export interface GetArticlesParams {
  page?: number;
  pageSize?: number;
  category?: string;
  tag?: string;
  search?: string;
}

export async function getArticles(
  locale: Locale,
  params?: GetArticlesParams,
): Promise<ArticleListResponseDTO> {
  const searchParams = new URLSearchParams();

  if (params?.page) {
    searchParams.set("page", String(params.page));
  }

  if (params?.pageSize) {
    searchParams.set(
      "page_size",
      String(params.pageSize),
    );
  }

  if (params?.category) {
    searchParams.set("category", params.category);
  }

  if (params?.tag) {
    searchParams.set("tag", params.tag);
  }

  if (params?.search) {
    searchParams.set("search", params.search);
  }

  const query = searchParams.toString();

  return apiRequest<ArticleListResponseDTO>(
    `/api/v1/${locale}/articles${query ? `?${query}` : ""}`,
  );
}

export async function getArticle(
  locale: Locale,
  slug: string,
): Promise<ArticleDTO> {
  return apiRequest<ArticleDTO>(
    `/api/v1/${locale}/articles/${encodeURIComponent(slug)}`,
  );
}