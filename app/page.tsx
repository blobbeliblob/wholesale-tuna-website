import Image from "next/image";
import Link from "next/link";
import { albums } from "../data/albums";

export default function Home() {
  return (
  <div className="min-h-screen bg-zinc-900 text-zinc-200">
      <main className="mx-auto max-w-3xl p-8">
        <header className="mb-8">
          <h1 className="text-4xl font-bold">Wholesale Tuna</h1>
          <p className="text-zinc-400">Lyrics and cover art.</p>
        </header>

        <section className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {albums.map((a) => (
            <article key={a.slug} className="rounded-lg border border-zinc-700 bg-zinc-800 p-4">
              <Link href={`/albums/${a.slug}`} className="flex flex-col items-start gap-4">
                <Image src={a.cover} alt={`${a.title} cover`} width={400} height={400} />
                <div>
                  <h2 className="text-xl font-semibold">{a.title}</h2>
                  <div className="text-sm text-zinc-400">{a.year}</div>
                </div>
              </Link>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}
