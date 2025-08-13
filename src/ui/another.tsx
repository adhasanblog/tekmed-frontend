import { useState } from "react";
import Image from "next/image";



// --- Testimonials (Mitra sebagai Testimoni) ---
export type Testimonial = {
    id: string | number;
    quote: string;
    author: string;
    role?: string; // Direktur RS, Kepala Instalasi, dll.
    logoUrl?: string;
};

export function PartnerTestimonials({ items }: { items?: Testimonial[] }) {
    const fallback: Testimonial[] = items?.length
        ? items
        : [
            {
                id: 1,
                quote:
                    "Pengadaan dan instalasi berjalan rapi. Treadmill uji beban terintegrasi dengan ECG tanpa kendala.",
                author: "dr. Andini M.",
                role: "Kepala Rehabilitasi, RS Mitra Sehat",
                logoUrl:
                    "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&auto=format&fit=crop",
            },
            {
                id: 2,
                quote:
                    "Support teknis responsif. Unit pengganti cepat dikirim sehingga layanan tetap operasional.",
                author: "Budi Santoso",
                role: "Koordinator ICU, RS Daya Medika",
                logoUrl:
                    "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=800&auto=format&fit=crop",
            },
            {
                id: 3,
                quote:
                    "Kalibrasi berkala sesuai regulasi. Dokumentasi lengkap memudahkan proses audit internal.",
                author: "Sari P.",
                role: "Manajer Mutu, Klinik Sentosa",
                logoUrl:
                    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
            },
        ];

    return (
        <section id="testimoni" className="bg-white py-14 sm:py-16 lg:py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">Mitra Kami Berkata</h2>
                    <p className="mt-2 text-slate-600 sm:text-lg">Testimoni singkat dari partner rumah sakit & klinik.</p>
                </div>

                <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {fallback.map((t) => (
                        <figure key={t.id} className="relative rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                            <blockquote className="text-slate-800">
                                <p className="text-base leading-relaxed">“{t.quote}”</p>
                            </blockquote>
                            <figcaption className="mt-4 flex items-center gap-3">
                                <div className="relative h-10 w-10 overflow-hidden rounded-full ring-1 ring-slate-200">
                                    {t.logoUrl ? (
                                        <Image src={t.logoUrl} alt={t.author} fill className="object-cover" sizes="40px" />
                                    ) : (
                                        <span className="block h-full w-full rounded-full bg-slate-200" />
                                    )}
                                </div>
                                <div>
                                    <div className="text-sm font-semibold text-slate-900">{t.author}</div>
                                    {t.role && <div className="text-xs text-slate-600">{t.role}</div>}
                                </div>
                            </figcaption>
                        </figure>
                    ))}
                </div>
            </div>
        </section>
    );
}

// --- Berita Terbaru ---
export type NewsItem = {
    id: string | number;
    title: string;
    excerpt?: string;
    imageUrl?: string;
    date?: string; // ISO
    slug?: string;
};

export function LatestNews({ posts }: { posts?: NewsItem[] }) {
    const fallback: NewsItem[] = posts?.length
        ? posts
        : [
            {
                id: 101,
                title: "Tips Kalibrasi Patient Monitor: Interval & Checklist",
                excerpt:
                    "Panduan ringkas untuk menjaga akurasi parameter SpO₂, NIBP, dan ECG di lingkungan klinis.",
                imageUrl:
                    "https://images.unsplash.com/photo-1580281780460-82d277b0d76a?q=80&w=1600&auto=format&fit=crop",
                date: new Date().toISOString(),
                slug: "tips-kalibrasi-patient-monitor",
            },
            {
                id: 102,
                title: "Integrasi Treadmill Uji Beban dengan Sistem ECG",
                excerpt:
                    "Langkah-langkah integrasi dan hal yang perlu diperhatikan untuk hasil uji yang konsisten.",
                imageUrl:
                    "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?q=80&w=1600&auto=format&fit=crop",
                date: new Date(Date.now() - 86400000).toISOString(),
                slug: "integrasi-treadmill-dengan-ecg",
            },
            {
                id: 103,
                title: "Checklist Instalasi Lampu Operasi di Ruang OK",
                excerpt:
                    "Dari balancing, fokus cahaya, hingga pengecekan keamanan mekanis sebelum commissioning.",
                imageUrl:
                    "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1600&auto=format&fit=crop",
                date: new Date(Date.now() - 172800000).toISOString(),
                slug: "checklist-instalasi-lampu-operasi",
            },
        ];

    const format = (iso?: string) =>
        iso ? new Date(iso).toLocaleDateString("id-ID", { day: "2-digit", month: "short", year: "numeric" }) : "";

    return (
        <section id="berita" className="bg-slate-50 py-14 sm:py-16 lg:py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex items-end justify-between gap-4">
                    <div>
                        <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">Berita Terbaru</h2>
                        <p className="mt-2 text-slate-600 sm:text-lg">Update singkat seputar servis, instalasi, dan penggunaan alat kesehatan.</p>
                    </div>
                    <a
                        href="#/blog"
                        className="hidden sm:inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-sky-500"
                    >
                        Lihat Semua
                    </a>
                </div>

                <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {fallback.map((p) => (
                        <article key={p.id} className="group overflow-hidden rounded-2xl bg-white ring-1 ring-slate-200 shadow-sm transition hover:shadow-md">
                            <div className="relative aspect-[16/10] w-full overflow-hidden">
                                {p.imageUrl ? (
                                    <Image
                                        src={p.imageUrl}
                                        alt={p.title}
                                        fill
                                        className="object-cover transition duration-500 group-hover:scale-[1.03]"
                                        sizes="(min-width: 1024px) 32rem, 100vw"
                                    />
                                ) : (
                                    <div className="h-full w-full bg-slate-200" />
                                )}
                                {p.date && (
                                    <span className="absolute left-3 top-3 rounded-full bg-sky-600/90 px-2.5 py-1 text-xs font-semibold text-white">
                    {format(p.date)}
                  </span>
                                )}
                            </div>
                            <div className="p-4">
                                <h3 className="line-clamp-2 text-base font-semibold text-slate-900">{p.title}</h3>
                                {p.excerpt && <p className="mt-2 line-clamp-3 text-sm text-slate-600">{p.excerpt}</p>}
                                <div className="mt-4">
                                    <a
                                        href={p.slug ? `/blog/${p.slug}` : `#/blog/${p.id}`}
                                        className="inline-flex items-center gap-1 rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
                                    >
                                        Baca Selengkapnya
                                    </a>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="mt-8 text-center sm:hidden">
                    <a
                        href="#/blog"
                        className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-sky-500"
                    >
                        Lihat Semua
                    </a>
                </div>
            </div>

            {/* JSON-LD Article list (basic) */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'Blog',
                        blogPost: fallback.map((p) => ({
                            '@type': 'BlogPosting',
                            headline: p.title,
                            datePublished: p.date,
                            image: p.imageUrl ? [p.imageUrl] : undefined,
                            mainEntityOfPage: p.slug ? `/blog/${p.slug}` : `#/blog/${p.id}`,
                        })),
                    }),
                }}
            />
        </section>
    );
}
