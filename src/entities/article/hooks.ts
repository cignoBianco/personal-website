export function useArticles(locale: Locale) {
    return useQuery({
      queryKey: ["articles", locale],
      queryFn: () => getArticles(locale),
    });
  }