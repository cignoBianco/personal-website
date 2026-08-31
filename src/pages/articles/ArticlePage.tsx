import { Link, useParams } from "react-router-dom";

import { useArticle } from "@/entities/article";
import { useLocale } from "@/shared/routing";

export function ArticlePage() {
    const locale = useLocale();

    const { slug } = useParams<{
        slug: string;
    }>();

    const {
        data: article,
        isLoading,
        isError,
    } = useArticle(
        locale,
        slug ?? "",
    );

    if (isLoading) {
        return (
            <section>
                <p>Loading article...</p>
            </section>
        );
    }

    if (isError || !article) {
        return (
            <section>
                <h1>Article not found</h1>

                <Link
                    to={`/${locale}/articles`}
                >
                    Back to articles
                </Link>
            </section>
        );
    }

    return (
        <article>
            <header>
                {article.category && (
                    <span>
                        {article.category.name}
                    </span>
                )}

                <h1>{article.title}</h1>

                {article.excerpt && (
                    <p>{article.excerpt}</p>
                )}

                <div>
                    <span>
                        {article.reading_time_minutes} min read
                    </span>

                    {article.published_at && (
                        <time>
                            {new Date(
                                article.published_at,
                            ).toLocaleDateString(locale)}
                        </time>
                    )}
                </div>
            </header>

            {article.cover_image_url && (
                <img
                    src={article.cover_image_url}
                    alt={article.title}
                />
            )}

            <div>
                {article.content}
            </div>

            {article.tags.length > 0 && (
                <footer>
                    {article.tags.map((tag) => (
                        <span key={tag.id}>
                            #{tag.name}
                        </span>
                    ))}
                </footer>
            )}
        </article>
    );
}