import { useLocale } from "@/shared/routing";

export function ResumePage() {
    const locale = useLocale();

    const cvFile =
        `/cv/${locale}/cv.pdf`;

    return (
        <main>
            <header>
                <p>Curriculum Vitae</p>

                <h1>
                    Fullstack Developer &
                    ML/DL Engineer
                </h1>

                <p>
                    Software engineer working across
                    fullstack development, machine
                    learning and research.
                </p>

                <a
                    href={cvFile}
                    download
                >
                    Download CV
                </a>
            </header>

            <section>
                <h2>Education</h2>

                <article>
                    <h3>
                        Master’s Degree —
                        Plant Biotechnology
                    </h3>

                    <p>
                        Biotechnology in Plant Cultivation
                    </p>
                </article>

                <article>
                    <h3>
                        Bachelor’s Degree —
                        Software Engineering
                    </h3>
                </article>

                <article>
                    <h3>
                        Secondary Professional Education —
                        Multimedia & Web Application Development
                    </h3>
                </article>
            </section>

            <section>
                <h2>Professional retraining</h2>

                <ul>
                    <li>
                        Machine Learning Algorithms
                        in Python
                    </li>

                    <li>
                        Psychologist / Psychotherapist
                    </li>

                    <li>
                        Cynology
                    </li>

                    <li>
                        Linguistics
                    </li>
                </ul>
            </section>

            <section>
                <h2>Technical skills</h2>

                <div>
                    <h3>Frontend</h3>

                    <p>
                        React · TypeScript · JavaScript ·
                        Vite · Tailwind CSS · Radix UI ·
                        React Native
                    </p>
                </div>

                <div>
                    <h3>Backend</h3>

                    <p>
                        Python · FastAPI · PostgreSQL ·
                        SQLModel · Alembic
                    </p>
                </div>

                <div>
                    <h3>Machine Learning</h3>

                    <p>
                        Python · TensorFlow · Keras ·
                        PyTorch · Machine Learning ·
                        Deep Learning
                    </p>
                </div>
            </section>

            <section>
                <h2>Languages</h2>

                <ul>
                    <li>English — certified</li>
                    <li>French — certified</li>
                    <li>Italian — certified</li>
                    <li>Japanese — certified</li>
                </ul>
            </section>

            <section>
                <h2>Sports & achievements</h2>

                <ul>
                    <li>Candidate Master of Sports — Rugby</li>
                    <li>Running</li>
                    <li>Swimming</li>
                    <li>Chess</li>
                    <li>Blood donor</li>
                </ul>
            </section>

            <section>
                <h2>Interests</h2>

                <p>
                    Technology · AI · Biotechnology ·
                    Psychology · Languages · Art ·
                    Design · Sports · Dogs
                </p>
            </section>
        </main>
    );
}