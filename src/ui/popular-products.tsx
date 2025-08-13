// Types
export type Product = {
    id: string | number;
    name: string;
    category?: string;
    price?: string;
    imageUrl: string;
    slug?: string;
};

// Popular Products section – ready for WP data but with dummy fallback
export function PopularProducts({ products }: { products?: Product[] }) {
    const fallback: Product[] = [
        {
            id: 1,
            name: "ECG 12-Lead Portable",
            category: "Diagnostik",
            price: "Mulai Rp7,5 jt",
            imageUrl:
                "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1600&auto=format&fit=crop",
            slug: "ecg-12-lead-portable",
        },
        {
            id: 2,
            name: "Ventilator ICU Series X",
            category: "ICU/CCU",
            price: "Hubungi kami",
            imageUrl:
                "https://images.unsplash.com/photo-1582719478185-2fe98f7f2a5b?q=80&w=1600&auto=format&fit=crop",
            slug: "ventilator-icu-series-x",
        },
        {
            id: 3,
            name: "Patient Monitor 7-Parameter",
            category: "Monitoring",
            price: "Mulai Rp12 jt",
            imageUrl:
                "https://images.unsplash.com/photo-1580696889331-1810369f0d3a?q=80&w=1600&auto=format&fit=crop",
            slug: "patient-monitor-7p",
        },
        {
            id: 4,
            name: "Treadmill Uji Beban",
            category: "Rehabilitasi",
            price: "Mulai Rp25 jt",
            imageUrl:
                "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?q=80&w=1600&auto=format&fit=crop",
            slug: "treadmill-uji-beban",
        },
        {
            id: 5,
            name: "Infusion Pump Smart",
            category: "Terapi Infus",
            price: "Mulai Rp6 jt",
            imageUrl:
                "https://images.unsplash.com/photo-1584987602223-64d91e02f2cd?q=80&w=1600&auto=format&fit=crop",
            slug: "infusion-pump-smart",
        },
        {
            id: 6,
            name: "Suction Pump Mobile",
            category: "Bedah",
            price: "Hubungi kami",
            imageUrl:
                "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1600&auto=format&fit=crop",
            slug: "suction-pump-mobile",
        },
    ];

    const data = products?.length ? products : fallback;

    return (
        <section id="produk-populer" className="bg-slate-50 py-14 sm:py-16 lg:py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex items-end justify-between gap-4">
                    <div>
                        <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">Produk Populer</h2>
                        <p className="mt-2 text-slate-600 sm:text-lg">Pilihan paling dicari oleh rumah sakit & klinik.</p>
                    </div>
                    <a
                        href="#/produk"
                        className="hidden sm:inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-sky-500"
                    >
                        Lihat Semua
                        <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden><path fill="currentColor" d="M13.5 4.5a.75.75 0 0 1 .75-.75h5.25a.75.75 0 0 1 .75.75v5.25a.75.75 0 0 1-1.5 0V6.31l-8.47 8.47a.75.75 0 0 1-1.06-1.06l8.47-8.47h-3.44a.75.75 0 0 1-.75-.75Z"/></svg>
                    </a>
                </div>

                {/* Grid */}
                <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {data.map((p) => (
                        <article key={p.id} className="group relative overflow-hidden rounded-2xl bg-white ring-1 ring-slate-200 shadow-sm transition hover:shadow-md">
                            <div className="relative aspect-[4/3] w-full overflow-hidden">
                                {/* Note: swap to next/image in your project file context */}
                                <img
                                    src={p.imageUrl}
                                    alt={p.name}
                                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                                    loading="lazy"
                                />
                                <span className="absolute left-3 top-3 rounded-full bg-sky-600/90 px-2.5 py-1 text-xs font-semibold text-white">Populer</span>
                            </div>
                            <div className="p-4">
                                <p className="text-xs uppercase tracking-wide text-slate-500">{p.category ?? "Kategori"}</p>
                                <h3 className="mt-1 line-clamp-2 text-base font-semibold text-slate-900">{p.name}</h3>
                                {p.price && <p className="mt-1 text-sm text-slate-700">{p.price}</p>}
                                <div className="mt-4 flex items-center gap-2">
                                    <a
                                        href={p.slug ? `/produk/${p.slug}` : `#/produk/${p.id}`}
                                        className="inline-flex items-center gap-1 rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
                                    >
                                        Detail
                                    </a>
                                    <a
                                        href="#hubungi-kami"
                                        className="inline-flex items-center gap-1 rounded-xl bg-sky-600 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition hover:bg-sky-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
                                    >
                                        Tambah ke Penawaran
                                    </a>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Mobile "Lihat Semua" */}
                <div className="mt-8 text-center sm:hidden">
                    <a
                        href="#/produk"
                        className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-sky-500"
                    >
                        Lihat Semua
                    </a>
                </div>
            </div>
        </section>
    );
}