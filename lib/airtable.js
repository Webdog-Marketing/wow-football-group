const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY;
const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID;

const AIRTABLE_TABLE_INVESTOR = process.env.AIRTABLE_TABLE_INVESTOR || "Investor Enquiries";
const AIRTABLE_TABLE_NETWORKING = process.env.AIRTABLE_TABLE_NETWORKING || "Networking Signups";
const AIRTABLE_TABLE_NEWS = process.env.AIRTABLE_TABLE_NEWS || "News Articles";

function airtableConfigured() {
  return Boolean(AIRTABLE_API_KEY && AIRTABLE_BASE_ID);
}

/**
 * Creates a single record in the given Airtable table.
 * Throws on failure so the calling API route can return a proper error.
 */
async function createAirtableRecord(tableName, fields) {
  if (!airtableConfigured()) {
    throw new Error(
      "Airtable is not configured. Set AIRTABLE_API_KEY and AIRTABLE_BASE_ID in your environment."
    );
  }

  const url = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${encodeURIComponent(
    tableName
  )}`;

  const res = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${AIRTABLE_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      records: [{ fields }],
    }),
  });

  if (!res.ok) {
    const errorBody = await res.text();
    throw new Error(`Airtable request failed (${res.status}): ${errorBody}`);
  }

  return res.json();
}

export function submitInvestorEnquiry(fields) {
  return createAirtableRecord(AIRTABLE_TABLE_INVESTOR, fields);
}

export function submitNetworkingSignup(fields) {
  return createAirtableRecord(AIRTABLE_TABLE_NETWORKING, fields);
}

function mapArticleRecord(record) {
  return {
    id: record.id,
    title: record.fields["Title"] || "Untitled",
    slug: record.fields["Slug"] || record.id,
    summary: record.fields["Summary"] || "",
    body: record.fields["Body"] || "",
    date: record.fields["Date"] || null,
    coverImage: record.fields["Cover Image URL"] || null,
    published: record.fields["Published"] !== false,
  };
}

/**
 * Fetches a single published news article by its Slug field, falling back
 * to matching on the Airtable record ID (mirrors the fallback used when
 * listing articles without a Slug set).
 */
export async function getNewsArticleBySlug(slug) {
  if (!airtableConfigured() || !slug) {
    return null;
  }

  try {
    const escaped = String(slug).replace(/"/g, '\\"');
    const formula = `OR({Slug} = "${escaped}", RECORD_ID() = "${escaped}")`;

    const params = new URLSearchParams({
      filterByFormula: formula,
      maxRecords: "1",
    });

    const url = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${encodeURIComponent(
      AIRTABLE_TABLE_NEWS
    )}?${params.toString()}`;

    const res = await fetch(url, {
      headers: { Authorization: `Bearer ${AIRTABLE_API_KEY}` },
      next: { revalidate: 60 },
    });

    if (!res.ok) return null;

    const data = await res.json();
    const record = (data.records || [])[0];
    if (!record) return null;

    const article = mapArticleRecord(record);
    return article.published ? article : null;
  } catch (err) {
    console.error("Failed to fetch article from Airtable:", err);
    return null;
  }
}

/**
 * Fetches published news articles from Airtable, sorted newest first.
 * Falls back to an empty array if Airtable isn't configured yet or the
 * request fails, so the News page never breaks the build.
 */
export async function getNewsArticles() {
  if (!airtableConfigured()) {
    return [];
  }

  try {
    const params = new URLSearchParams({
      "sort[0][field]": "Date",
      "sort[0][direction]": "desc",
    });

    const url = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${encodeURIComponent(
      AIRTABLE_TABLE_NEWS
    )}?${params.toString()}`;

    const res = await fetch(url, {
      headers: { Authorization: `Bearer ${AIRTABLE_API_KEY}` },
      next: { revalidate: 60 },
    });

    if (!res.ok) return [];

    const data = await res.json();

    return (data.records || [])
      .map(mapArticleRecord)
      .filter((article) => article.published);
  } catch (err) {
    console.error("Failed to fetch news from Airtable:", err);
    return [];
  }
}
