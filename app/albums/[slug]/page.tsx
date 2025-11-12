import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { getAlbumBySlug, getAllSlugs } from "../../../data/albums";
import { getLyrics } from "../../../data/lyrics";
import { notFound } from "next/navigation";
import { SiSpotify, SiApplemusic, SiYoutube, SiBandcamp, SiSoundcloud } from "react-icons/si";
import { FiMusic } from "react-icons/fi";

function BrandIcon({ name, className }: { name?: string; className?: string }) {
  const n = (name || "").toLowerCase();
  // choose a brand color class for each known provider
  let colorClass = "text-zinc-100";
  if (n.includes("spotify")) colorClass = "text-[#1DB954]";
  else if (n.includes("apple")) colorClass = "text-[#FA2C59]";
  else if (n.includes("youtube")) colorClass = "text-[#FF0000]";
  else if (n.includes("bandcamp")) colorClass = "text-[#2F71FF]";
  else if (n.includes("soundcloud") || n.includes("sound cloud")) colorClass = "text-[#FF5500]";

  const combined = [className, colorClass].filter(Boolean).join(" ");
  if (n.includes("spotify")) return <SiSpotify className={combined} aria-hidden />;
  if (n.includes("apple")) return <SiApplemusic className={combined} aria-hidden />;
  if (n.includes("youtube")) return <SiYoutube className={combined} aria-hidden />;
  if (n.includes("bandcamp")) return <SiBandcamp className={combined} aria-hidden />;
  if (n.includes("soundcloud") || n.includes("sound cloud")) return <SiSoundcloud className={combined} aria-hidden />;
  return <FiMusic className={combined} aria-hidden />;
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
    <div className="min-h-screen text-zinc-200">
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
                  {/* make lyrics scrollable when opened; use smaller text for lyrics */}
                  <div className="mt-2 whitespace-pre-wrap text-zinc-200 font-mono max-h-64 overflow-auto pr-2 text-xs">{getLyrics(t.id)}</div>
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
                        {/* brand icon (react-icons) */}
                        <BrandIcon name={l.name} className="w-4 h-4" />

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
