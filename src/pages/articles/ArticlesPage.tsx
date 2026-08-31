import { useParams } from "react-router-dom";

import {
    useArticles,
} from "@/entities/article";

import {
    isLocale,
} from "@/shared/routing/locales";

export function ArticlesPage() {
    const { locale } = useParams();

    if (!isLocale(locale)) {
        return null;
    }

    const {
        data,
        isLoading,
        isError,
    } = useArticles(locale);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Failed to load articles.</div>;
    }

    return (
        <div>
            {data.items.map((article) => (
                <article key={article.id}>
                    <h2>{article.title}</h2>

                    {article.excerpt && (
                        <p>{article.excerpt}</p>
                    )}
                </article>
            ))}
        </div>
    );
}