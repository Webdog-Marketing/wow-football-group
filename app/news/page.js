import Link from "next/link";
import { getNewsArticles } from "../../lib/airtable";
import { formatDate } from "../../lib/format";

export const metadata = {
  title: "News | WOW Football Group",
  description: "Updates and articles from WOW Football Group.",
};

export const revalidate = 60;

export default async function NewsPage() {
  const articles = await getNewsArticles();

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">News</span>
          <h1 style={{ marginTop: "1rem" }}>Latest from WOW Football Group</h1>
          <p className="lede">
            Updates on our partner clubs, our network and the wider game.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {articles.length === 0 ? (
            <div className="empty-state">
              No articles published yet. Add rows to the &ldquo;News Articles&rdquo; table in
              Airtable — mark them &ldquo;Published&rdquo; and they&rsquo;ll appear here
              automatically.
            </div>
          ) : (
            <div className="news-grid">
              {articles.map((article) => (
                <Link
                  href={`/news/${article.slug}`}
                  className="news-card"
                  key={article.id}
                >
                  {article.date && <span className="news-date">{formatDate(article.date)}</span>}
                  <h3>{article.title}</h3>
                  {article.summary && <p>{article.summary}</p>}
                  <span className="news-read-more">Read more →</span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
