import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { getAlbumBySlug, getAllSlugs } from "../../../data/albums";
import { getLyrics } from "../../../data/lyrics";
import { notFound } from "next/navigation";
import { SiSpotify, SiApplemusic, SiYoutube, SiBandcamp, SiSoundcloud } from "react-icons/si";
import { FiMusic, FiArrowLeft } from "react-icons/fi";

function BrandIcon({ name, className }: { name?: string; className?: string }) {
  const n = (name || "").toLowerCase();
  let colorClass = "text-zinc-400 group-hover:text-zinc-100 transition-colors";
  if (n.includes("spotify")) colorClass += " hover:text-[#1DB954]";
  else if (n.includes("apple")) colorClass += " hover:text-[#FA2C59]";
  else if (n.includes("youtube")) colorClass += " hover:text-[#FF0000]";
  else if (n.includes("bandcamp")) colorClass += " hover:text-[#2F71FF]";
  else if (n.includes("soundcloud") || n.includes("sound cloud")) colorClass += " hover:text-[#FF5500]";

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
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      {/* Background Image Blur Overlay for Atmosphere */}
      <div className="fixed inset-0 z-0">
        <Image src={album.cover} alt="Background blur" fill className="object-cover opacity-10 blur-3xl scale-110 mix-blend-screen" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
      </div>

      <div className="relative z-10 w-full min-h-screen flex flex-col lg:flex-row">
        
        {/* Left Side: Sticky Album Info & Cover */}
        <aside className="w-full lg:w-[45%] xl:w-[40%] xl:h-screen lg:h-screen lg:sticky top-0 p-8 md:p-16 flex flex-col border-b lg:border-b-0 lg:border-r border-white/10">
          <div className="mb-16 lg:mb-12 shrink-0">
            <Link href="/" className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-zinc-400 hover:text-white transition-colors duration-300 group">
              <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" /> Back to Discography
            </Link>
          </div>

          <div className="flex flex-col justify-center flex-1 animate-fade-in-up">
            <div className="relative aspect-square w-full max-w-lg shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] rounded-sm overflow-hidden mb-8 group bg-transparent">
              <Image 
                src={album.cover} 
                alt={`${album.title} cover`} 
                fill 
                className="object-contain transition-transform duration-[2s] group-hover:scale-105 origin-center"
                priority
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-sm pointer-events-none" />
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 text-xs font-mono uppercase tracking-widest text-zinc-500">
                <span>{album.year}</span>
                <span className="w-8 h-[1px] bg-white/20"></span>
                <span>{album.tracks.length} Tracks</span>
              </div>
              <h1 className="font-serif text-5xl md:text-6xl font-light tracking-tighter leading-none">{album.title}</h1>
            </div>

            {/* Listen Links */}
            {album.links && album.links.length > 0 && (
              <div className="mt-12 pt-8 border-t border-white/5">
                <h3 className="text-[10px] uppercase font-mono tracking-[0.3em] text-zinc-600 mb-6">Listen on</h3>
                <div className="flex flex-wrap gap-4">
                  {album.links.map((l) => (
                    <a
                      key={l.name}
                      href={l.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-center w-12 h-12 rounded-full border border-white/10 bg-black/40 backdrop-blur-sm hover:border-white/40 hover:bg-white/5 transition-all duration-300"
                      title={l.name}
                    >
                      <BrandIcon name={l.name} className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </aside>

        {/* Right Side: Scrollable Tracks & Lyrics */}
        <main className="w-full lg:w-[55%] xl:w-[60%] p-8 md:p-16 xl:p-24 overflow-y-auto">
          <div className="max-w-3xl">
            <h2 className="text-sm font-sans uppercase tracking-[0.3em] text-zinc-600 mb-12 flex items-center gap-4">
              Tracklist & Lyrics <span className="flex-1 h-[1px] bg-white/5"></span>
            </h2>

            <div className="space-y-12 animate-fade-in-up delay-200">
              {album.tracks.map((t, index) => {
                const lyrics = getLyrics(t.id);
                const hasLyrics = Boolean(lyrics?.trim());

                return (
                  <div key={t.id} className="group flex flex-col pb-8 border-b border-white/5 last:border-0 relative">
                    <div className="flex items-start gap-6 lg:gap-8">
                      <span className="text-xl font-serif text-zinc-600 font-light italic w-8 text-right shrink-0">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <div className="flex-1">
                        <details className="w-full [&_summary::-webkit-details-marker]:hidden">
                          <summary className="text-2xl md:text-3xl font-serif font-light tracking-tight cursor-pointer hover:text-zinc-300 transition-colors list-none outline-none flex items-center justify-between">
                            {t.title}
                            {hasLyrics && (
                              <svg className="w-5 h-5 opacity-40 group-hover:opacity-100 transition-opacity transform group-details-open:-scale-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 9l-7 7-7-7" />
                              </svg>
                            )}
                          </summary>
                          
                          {hasLyrics ? (
                            <div className="mt-8 text-zinc-400 font-sans text-sm/loose md:text-base/loose tracking-wide whitespace-pre-wrap pl-0 md:pl-4 border-l-0 md:border-l border-white/10">
                              {lyrics}
                            </div>
                          ) : (
                            <div className="mt-4 text-xs font-mono uppercase tracking-[0.2em] text-zinc-600">
                              Instrumental / No Lyrics
                            </div>
                          )}
                        </details>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
