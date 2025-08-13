// app/produk/page.tsx
import Image from "next/image";

type Product = {
    id: number | string;
    name: string;
    category: string;
    price?: string;
    image: string;
    slug: string;
    popular?: boolean;
    badge?: string; // "Baru", "Promo", dll.
};

const CATEGORIES = [
    { name: "AKD", children: ["Registrasi & Sertifikat", "Lainnya"] },
    { name: "Aksesori Medis (Alkes)", children: ["Sensor", "Kabel", "Probe"] },
    {
        name: "Alat Elektromedik",
        children: ["AED Defibrilator", "Ventilator", "Patient Monitor", "Mesin Anestesi", "Infusion Pump", "ECG"],
    },
];

const DUMMY_PRODUCTS: Product[] = [
    {
        id: 1,
        name: "Anesthesia Machine AM852",
        category: "Mesin Anestesi",
        price: "Rp 594.312.000",
        image: "https://images.unsplash.com/photo-1583324113626-70df0f4deaab?q=80&w=1600&auto=format&fit=crop   ",
        slug: "am852",
        badge: "Baru",
    },
    {
        id: 2,
        name: "Ventilator ICU Series X",
        category: "Ventilator",
        price: "Hubungi kami",
        image: "https://images.unsplash.com/photo-1583324113626-70df0f4deaab?q=80&w=1600&auto=format&fit=crop",
        slug: "ventilator-x",
        popular: true,
    },
    {
        id: 3,
        name: "Patient Monitor 7-Parameter",
        category: "Monitoring",
        price: "Rp 12.000.000",
        image: "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?q=80&w=1600&auto=format&fit=crop",
        slug: "monitor-7p",
    },
    {
        id: 4,
        name: "Treadmill Uji Beban",
        category: "Rehabilitasi",
        price: "Rp 25.000.000",
        image: "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?q=80&w=1600&auto=format&fit=crop",
        slug: "treadmill-uji-beban",
    },
    {
        id: 5,
        name: "Infusion Pump Smart",
        category: "Terapi Infus",
        price: "Rp 6.000.000",
        image: "https://images.unsplash.com/photo-1584987602223-64d91e02f2cd?q=80&w=1600&auto=format&fit=crop",
        slug: "infusion-pump-smart",
        badge: "Promo",
    },
    {
        id: 6,
        name: "Suction Pump Mobile",
        category: "Bedah",
        price: "Hubungi kami",
        image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1600&auto=format&fit=crop",
        slug: "suction-pump-mobile",
    },
];

export const metadata = {
    title: "Katalog Produk | PT. Alkes Medika",
    description: "Jelajahi katalog produk alat kesehatan—siap sewa, pengadaan, instalasi & servis.",
};

export default function CatalogPage() {
    return (
        <div className="grid gap-8 lg:grid-cols-12 mb-10">
            {/* Sidebar Kategori */}
            <aside className="lg:col-span-3">
                <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                    <h2 className="text-base font-semibold text-slate-900">Kategori Produk</h2>
                    <nav className="mt-3 space-y-2 text-sm">
                        {CATEGORIES.map((c) => (
                            <details key={c.name} className="group rounded-lg border border-slate-200 p-2 open:bg-slate-50">
                                <summary className="flex cursor-pointer list-none items-center justify-between font-medium text-slate-800">
                                    {c.name}
                                    <span className="ml-2 inline-flex h-5 w-5 items-center justify-center rounded border border-slate-300 text-slate-600">
                    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 transition-transform group-open:rotate-180">
                      <path fill="currentColor" d="M12 15.5 5.5 9a1 1 0 0 1 1.4-1.4L12 12.68 17.1 7.6A1 1 0 1 1 18.5 9L12 15.5Z" />
                    </svg>
                  </span>
                                </summary>
                                <ul className="mt-2 space-y-1 pl-2 text-slate-600">
                                    {c.children.map((ch) => (
                                        <li key={ch}>
                                            <a href={`#/kategori/${encodeURIComponent(ch)}`} className="block rounded-md px-2 py-1 hover:bg-slate-100">
                                                {ch}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </details>
                        ))}
                    </nav>

                    {/* Filter ringkas (dummy) */}
                    <div className="mt-4 grid gap-2">
                        <span className="text-sm font-semibold text-slate-900">Filter Cepat</span>
                        <div className="flex flex-wrap gap-2">
                            {["Baru", "Populer", "Promo"].map((t) => (
                                <button key={t} className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700 hover:bg-slate-50">
                                    {t}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </aside>

            {/* Konten Katalog */}
            <section className="lg:col-span-9">
                {/* Toolbar: search & sort */}

                <div className="mb-4 grid gap-3 sm:grid-cols-[1fr_auto]">
                    {/* Search */}
                    <div className="min-w-0">
                        <div className="relative w-full">
                            <input
                                type="search"
                                placeholder="Cari produk…"
                                className="w-full rounded-xl border border-slate-200 bg-white pl-10 pr-3 py-2 text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500"
                            />
                            <span
                                className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
        <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
          <path fill="currentColor"
                d="M10 3a7 7 0 1 1-4.95 11.95l-2.6 2.6a1 1 0 0 1-1.4-1.4l2.6-2.6A7 7 0 0 1 10 3Zm0 2a5 5 0 1 0 0 10 5 5 0 0 0 0-10Z"/>
        </svg>
      </span>
                        </div>
                    </div>

                    {/* Sort */}
                    <div className="sm:justify-self-end">
                        <select
                            className="w-full sm:w-auto appearance-none rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                        >
                            <option>Urutkan: Terbaru</option>
                            <option>Urutkan: Populer</option>
                            <option>Urutkan: Harga Terendah</option>
                            <option>Urutkan: Harga Tertinggi</option>
                        </select>
                    </div>
                </div>


                {/* Grid kartu futuristik */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 items-stretch">
                    {DUMMY_PRODUCTS.map((p) => (<ProductCard key={p.id} product={p}/>))}
                </div>

                {/* Pagination dummy */}
                <div className="mt-8 flex items-center justify-center gap-2">
                    <button
                        className="rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-700 hover:bg-slate-50">‹
                        Prev
                    </button>
                    <span
                        className="rounded-xl border border-sky-200 bg-sky-50 px-3 py-1.5 text-sm font-semibold text-sky-700">1</span>
                    <button
                        className="rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-700 hover:bg-slate-50">2
                    </button>
                    <button
                        className="rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-700 hover:bg-slate-50">Next
                        ›
                    </button>
                </div>
            </section>
        </div>

    );
}

/** Kartu produk bergaya futuristik (glass + gradient glow) */
function ProductCard({product: p}: { product: Product }) {
    return (
        <article
            className="
        group relative overflow-hidden rounded-2xl p-[1px]
        ring-1 ring-slate-200 shadow-sm hover:shadow-xl transition
        h-full
      "
        >
            {/* inner */}
            <div className="rounded-2xl bg-white/70 backdrop-blur-md flex h-full flex-col">
                {/* Media */}
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-t-2xl">
                    <Image
                        src={p.image}
                        alt={p.name}
                        fill
                        sizes="(min-width:1280px) 22rem, (min-width:1024px) 18rem, 100vw"
                        className="object-cover transition duration-500 group-hover:scale-[1.04]"
                    />
                    {(p.badge || p.popular) && (
                        <div className="absolute left-3 top-3 flex gap-2">
                            {p.badge && <span
                                className="rounded-full bg-fuchsia-600/90 px-2.5 py-1 text-xs font-semibold text-white">{p.badge}</span>}
                            {p.popular && <span
                                className="rounded-full bg-sky-600/90 px-2.5 py-1 text-xs font-semibold text-white">Populer</span>}
                        </div>
                    )}
                </div>

                {/* Body */}
                <div className="flex grow flex-col p-4">
                    <p className="text-xs uppercase tracking-wide text-slate-500">{p.category}</p>
                    <h3 className="mt-1 line-clamp-2 text-base font-semibold text-slate-900">
                        {p.name}
                    </h3>
                    {p.price && <p className="mt-1 text-sm font-semibold text-slate-900">{p.price}</p>}

                    {/* Reserve tinggi konten supaya semua kartu sama */}
                    <div className="flex-1"/>


                    {/* Actions di dasar kartu */}
                    <div className="mt-auto flex items-center gap-2">
                        <a
                            href={`/produk/${p.slug}`}
                            className="inline-flex items-center gap-1 rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
                        >
                            Detail
                        </a>
                        <a
                            href={`https://wa.me/628123456789?text=${encodeURIComponent(`Halo, saya tertarik ${p.name}. Mohon info.`)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 rounded-xl bg-sky-600 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition hover:bg-sky-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
                        >
                            Tanya via WA
                        </a>
                    </div>
                </div>
            </div>
        </article>
    );
}
