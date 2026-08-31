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
  params?: GetArticlesParams,
  options?: Omit<
    UseQueryOptions<ArticleListResponseDTO>,
    "queryKey" | "queryFn"
  >,
) {
  return useQuery({
    queryKey: articleKeys.list(locale, params),

    queryFn: () =>
      getArticles(locale, params),

    ...options,
  });
}

export function useArticle(
  locale: Locale,
  slug: string,
  options?: Omit<
    UseQueryOptions<ArticleDTO>,
    "queryKey" | "queryFn"
  >,
) {
  return useQuery({
    queryKey: articleKeys.detail(
      locale,
      slug,
    ),

    queryFn: () =>
      getArticle(locale, slug),

    enabled: Boolean(slug),

    ...options,
  });
}