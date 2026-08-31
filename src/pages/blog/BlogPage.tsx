import { Link } from "react-router-dom";

import { useLocale } from "@/shared/routing";

export function BlogPage() {
    const locale = useLocale();

    return (
        <main>
            <section>
                <p>Blog</p>

                <h1>
                    Notes, ideas and observations.
                </h1>

                <p>
                    A personal space for thoughts about
                    technology, research, learning,
                    creativity and life.
                </p>
            </section>

            <section>
                <h2>Latest posts</h2>

                <div>
                    <article>
                        <p>Coming soon</p>

                        <h3>
                            The first blog post
                        </h3>

                        <p>
                            Personal essays, observations
                            and ideas will appear here.
                        </p>
                    </article>
                </div>
            </section>

            <section>
                <Link to={`/${locale}/articles`}>
                    Read programming articles
                </Link>
            </section>
        </main>
    );
}