import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { getAlbumBySlug, getAllSlugs } from "../../../data/albums";
import { getLyrics } from "../../../data/lyrics";
import { notFound } from "next/navigation";

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

        <h1 className="mt-4 text-3xl font-bold">{album.title} ({album.year})</h1>
        <Image src={album.cover} alt={`${album.title} cover`} width={600} height={600} />

        <section className="mt-6 space-y-4">
          {album.tracks.map((t) => (
            <details key={t.id} className="rounded-md border border-zinc-700 p-3 bg-zinc-800">
              <summary className="text-2xl font-semibold">{t.title}</summary>
              <div className="mt-2 whitespace-pre-wrap text-zinc-200">{getLyrics(t.id)}</div>
            </details>
          ))}
        </section>
      </main>
    </div>
  );
}
