import Link from "next/link";
import { notFound } from "next/navigation";
import { getNewsArticleBySlug } from "../../../lib/airtable";
import { formatDate } from "../../../lib/format";

export const revalidate = 60;

export async function generateMetadata({ params }) {
  const article = await getNewsArticleBySlug(params.slug);

  if (!article) {
    return { title: "Article not found | WOW Football Group" };
  }

  return {
    title: `${article.title} | WOW Football Group`,
    description: article.summary || undefined,
  };
}

export default async function NewsArticlePage({ params }) {
  const article = await getNewsArticleBySlug(params.slug);

  if (!article) {
    notFound();
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Link href="/news" className="back-link" style={{ marginBottom: "1.5rem" }}>
            ← Back to news
          </Link>
          {article.date && (
            <span className="news-date" style={{ display: "block", marginTop: "1rem" }}>
              {formatDate(article.date)}
            </span>
          )}
          <h1 style={{ marginTop: "0.75rem" }}>{article.title}</h1>
          {article.summary && <p className="lede">{article.summary}</p>}
        </div>
      </section>

      <section className="section">
        <div className="container">
          {article.coverImage && (
            <img
              src={article.coverImage}
              alt={article.title}
              style={{
                width: "100%",
                maxHeight: "480px",
                objectFit: "cover",
                marginBottom: "2.5rem",
              }}
            />
          )}

          <div className="legal-content">
            {article.body ? (
              article.body
                .split(/\n{2,}/)
                .map((para, i) => <p key={i}>{para}</p>)
            ) : (
              <p>This article doesn&rsquo;t have any body content yet.</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
