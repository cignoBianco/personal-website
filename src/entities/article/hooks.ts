import {
  useQuery,
  type UseQueryOptions,
} from "@tanstack/react-query";

import type { Locale } from "@/shared/routing/locales";

import {
  getArticle,
  getArticles,
  type GetArticlesParams,
} from "./api";

import type {
  ArticleDTO,
  ArticleListResponseDTO,
} from "./types";

export const articleKeys = {
  all: ["articles"] as const,

  lists: () =>
    [...articleKeys.all, "list"] as const,

  list: (
    locale: Locale,
    params?: GetArticlesParams,
  ) =>
    [
      ...articleKeys.lists(),
      locale,
      params,
    ] as const,

  details: () =>
    [...articleKeys.all, "detail"] as const,

  detail: (
    locale: Locale,
    slug: string,
  ) =>
    [
      ...articleKeys.details(),
      locale,
      slug,
    ] as const,
};

export function useArticles(
  locale: Locale,
  params: GetArticlesParams,
) {
  return useQuery({
      queryKey: [
          "articles",
          params,
      ],
      queryFn: () =>
          getArticles(locale, params),
  });
}

export function useArticle(
  slug: string,
  locale: Locale,
) {
  return useQuery({
      queryKey: [
          "article",
          locale,
          slug,
      ],
      queryFn: () =>
          getArticle(
              locale,
              slug
          ),
      enabled:
          Boolean(slug),
  });
}