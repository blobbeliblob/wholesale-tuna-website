import Image from "next/image";
import Link from "next/link";
import { albums } from "../data/albums";

export default function Home() {
  return (
    <div className="min-h-screen text-white flex flex-col items-center">
      {/* Hero Section */}
      <header className="w-full min-h-[60vh] flex flex-col items-center justify-center relative overflow-hidden">
        <h1 className="font-serif text-6xl md:text-8xl lg:text-[10rem] tracking-tighter mix-blend-difference z-10 animate-fade-in-up uppercase">
          Wholesale
          <br />
          <span className="italic font-light">Tuna</span>
        </h1>
        <p className="mt-8 text-zinc-400 tracking-[0.2em] uppercase text-sm md:text-base opacity-0 animate-[fade-in-up_1s_ease-out_forwards]" style={{animationDelay: '300ms'}}>
          Sonic Archives & Visuals
        </p>
      </header>

      {/* Discography Grid */}
      <main className="w-full max-w-[1400px] px-6 py-24 md:py-32 flex flex-col gap-32">
        {albums.map((a, i) => (
          <article
            key={a.slug}
            className={`group relative flex flex-col md:flex-row items-center gap-12 lg:gap-24 opacity-0 animate-[fade-in-up_1s_ease-out_forwards]`}
            style={{ animationDelay: `${500 + i * 200}ms` }}
          >
            {/* Image container */}
            <div className={`w-full md:w-1/2 relative overflow-hidden aspect-square rounded-sm bg-zinc-900 shadow-2xl transition-transform duration-700 ease-out group-hover:scale-[1.02] ${i % 2 !== 0 ? 'md:order-2' : ''}`}>
              <div className="absolute inset-0 bg-black/20 z-10 transition-opacity duration-700 group-hover:opacity-0" />
              <Link href={`/albums/${a.slug}`} className="block w-full h-full p-0">
                <Image
                  src={a.cover}
                  alt={`${a.title} cover`}
                  fill
                  className="object-contain transition-transform duration-[1.5s] ease-out group-hover:scale-105 origin-center"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={i < 2}
                />
              </Link>
            </div>

            {/* Typography / Details */}
            <div className={`w-full md:w-1/2 flex flex-col justify-center ${i % 2 !== 0 ? 'md:text-right md:items-end' : 'md:text-left md:items-start'}`}>
              <div className="flex items-center gap-4 mb-4 text-zinc-500 uppercase tracking-widest text-sm">
                <span>{a.year}</span>
                <span className="w-12 h-[1px] bg-zinc-700"></span>
                <span>{a.tracks.length} Tracks</span>
              </div>
              <Link href={`/albums/${a.slug}`} className="block group/link">
                <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-white mb-6 transition-all duration-500 group-hover/link:text-zinc-300">
                  {a.title}
                </h2>
                <div className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-zinc-100 pb-1 border-b border-transparent group-hover/link:border-zinc-300 transition-colors duration-300">
                  Explore Album
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            </div>
          </article>
        ))}
      </main>
    </div>
  );
}
