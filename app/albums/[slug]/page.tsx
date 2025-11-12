import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { getAlbumBySlug, getAllSlugs } from "../../../data/albums";
import { getLyrics } from "../../../data/lyrics";
import { notFound } from "next/navigation";

function getBrandIcon(name?: string) {
  const n = (name || "").toLowerCase();
  if (n.includes("spotify")) {
    return (
      <svg width="16" height="16" viewBox="0 0 168 168" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <circle cx="84" cy="84" r="84" fill="#1DB954" />
        <path d="M38 120c26-16 62-18 92-6" stroke="#fff" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M44 96c24-14 56-15 80-5" stroke="#fff" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M52 74c20-11 44-12 64-3" stroke="#fff" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (n.includes("apple") || n.includes("apple music")) {
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <circle cx="12" cy="12" r="12" fill="#FA2C59" />
        <path d="M13.2 7.5c-.2.1-.6.3-1 .3-.4 0-.8-.2-1-.3-.4-.3-1-.7-1-1.7 0-1 .6-1.6 1-1.9.6-.4 1.4-.4 1.8-.4.5 0 1.2.1 1.8.5-.1.3-.3 1-.6 1.5-.4.6-.9 1-1.9 1.6zM12 9.8c-.9 0-1.9.5-2.6 1.3-.5.6-.9 1.4-.9 2.3 0 .8.3 1.7.9 2.3.7.8 1.7 1.3 2.6 1.3.8 0 1.7-.4 2.3-1 .4-.4.7-1 1-1.6-1.2-.4-2.1-1.4-2.1-2.6 0-1.2.9-2.2 2.1-2.6-.6-.7-1.5-1.2-2.3-1.3z" fill="#fff" />
      </svg>
    );
  }
  if (n.includes("youtube") || n.includes("youtube music")) {
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <circle cx="12" cy="12" r="12" fill="#FF0000" />
        <path d="M10 8l6 4-6 4z" fill="#fff" />
      </svg>
    );
  }
  if (n.includes("bandcamp")) {
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <rect x="2" y="4" width="20" height="16" rx="2" fill="#2F71FF" />
        <path d="M6 14h3l3-6v12l3-6h3" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
    );
  }
  if (n.includes("soundcloud") || n.includes("sound cloud")) {
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d="M3 14a4 4 0 0 1 8 0h2a5 5 0 0 1 0-10C12 4 11 4 10 4 8 4 6 5 5 7 4 9 3 11 3 14z" fill="#FF5500" />
        <path d="M13 14h6v2h-6z" fill="#FF5500" />
      </svg>
    );
  }

  // fallback generic music icon
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M9 17a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" fill="#cbd5e1" />
      <path d="M9 11V5l10-2v6" stroke="#cbd5e1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const album = getAlbumBySlug(slug);
  if (!album) return { title: "Album" };
  return { title: `${album.title} — ${album.year}` };
}

export default async function AlbumPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const album = getAlbumBySlug(slug);
  if (!album) return notFound();

  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-200">
      <main className="mx-auto max-w-3xl p-8">
        <Link href="/" className="text-zinc-300 hover:underline">
          ← Back
        </Link>

        <section className="mt-6">
          <div className="grid gap-4 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-4">
              {album.tracks.map((t) => (
                <details key={t.id} className="rounded-md border border-zinc-700 p-3 bg-zinc-800">
                  <summary className="text-2xl font-semibold">{t.title}</summary>
                  {/* make lyrics scrollable when opened */}
                  <div className="mt-2 whitespace-pre-wrap text-zinc-200 font-mono max-h-64 overflow-auto pr-2">{getLyrics(t.id)}</div>
                </details>
              ))}
            </div>

            <aside className="lg:col-span-1 rounded-md border border-zinc-700 p-4 bg-zinc-800">
              <Image src={album.cover} alt={`${album.title} cover`} width={600} height={600} />
              {/* album title moved under the cover */}
              <h2 className="mt-4 text-2xl font-bold text-zinc-100">{album.title}</h2>
              <div className="text-zinc-400">{album.year}</div>

              {/* streaming links (from album.links) */}
              {album.links && album.links.length > 0 && (
                <div className="mt-4">
                  <h3 className="text-sm font-semibold text-zinc-300">Listen</h3>
                  <div className="mt-2 flex flex-wrap items-center gap-3">
                    {album.links.map((l) => (
                      <a
                        key={l.name}
                        href={l.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-3 py-2 bg-zinc-900 border border-zinc-700 rounded text-zinc-100 hover:bg-zinc-800"
                      >
                        {/* small brand SVGs */}
                        {getBrandIcon(l.name)}

                        <span className="text-sm">{l.name}</span>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </aside>
          </div>
        </section>
      </main>
    </div>
  );
}
