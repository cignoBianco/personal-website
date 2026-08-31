import {
    useArticles,
} from "@/entities/article";

import { useLocale } from "@/shared/routing";

export function ArticlesPage() {
    const locale = useLocale();

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
            <header>
                <h1>Articles</h1>

                <p>
                    Thoughts, tutorials and research
                    notes.
                </p>
            </header>
            {data.items.map((article) => (
                <article key={article.id}>
                    <h2>{article.title}</h2>

                    {article.excerpt && (
                        <p>{article.excerpt}</p>
                    )}

                    <div>
                        {article.category && (
                            <span>
                                {article.category.name}
                            </span>
                        )}

                        <span>
                            {article.reading_time_minutes} min
                        </span>
                    </div>
                </article>
            ))}
        </div>
    );
}