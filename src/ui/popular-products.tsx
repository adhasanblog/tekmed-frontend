// Types
import {DATA_PRODUCTS} from "@/dummy/data-products";
import {ProductCard} from "@/components/product-card";
import Link from "next/link";

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
                        <p className="mt-2 text-slate-600 sm:text-lg">Pilihan paling dicari oleh rumah sakit &
                            klinik.</p>
                    </div>
                    <Link
                        href="/products"
                        className="hidden sm:inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-sky-500"
                    >
                        Lihat Semua
                        <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
                            <path fill="currentColor"
                                  d="M13.5 4.5a.75.75 0 0 1 .75-.75h5.25a.75.75 0 0 1 .75.75v5.25a.75.75 0 0 1-1.5 0V6.31l-8.47 8.47a.75.75 0 0 1-1.06-1.06l8.47-8.47h-3.44a.75.75 0 0 1-.75-.75Z"/>
                        </svg>
                    </Link>
                </div>

                {/* Grid */}
                <section className="mx-auto mt-6 grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {DATA_PRODUCTS.map((product) => (
                        <ProductCard key={product.id} product={product} showCertificate={true} showDescription={true} showSpecs={true}/>
                    ))}
                </section>

                {/* Mobile "Lihat Semua" */}
                <div className="mt-8 text-center sm:hidden">
                    <Link
                        href="/products"
                        className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-sky-500"
                    >
                        Lihat Semua
                    </Link>
                </div>
            </div>
        </section>
    );
}