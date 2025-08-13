'use client';
import Image from "next/image";
import {useState} from "react";

export default function ProductPage() {
    // Dummy kategori sidebar (nested)
    const categories = [
        {
            name: "AKD",
            children: ["Registrasi & Sertifikat", "Lainnya"],
        },
        {
            name: "Aksesori Medis (Alkes)",
            children: ["Sensor", "Kabel", "Probe"],
        },
        {
            name: "Alat Elektromedik",
            children: [
                "AED Defibrilator",
                "Ventilator",
                "Patient Monitor",
                "Mesin Anestesi",
                "Infusion Pump",
                "ECG",
            ],
        },
    ];

    const product = {
        id: 1,
        name: "Anesthesia Machine HOSTECH AM852",
        category: "Mesin Anestesi",
        price: "Rp 594.312.000",
        sku: "AM852",
        reg: "KEMENKES RI AKL 20403420775",
        tags: ["anestesi", "hostech", "mesin anestesi"],
        images: [
            "https://images.unsplash.com/photo-1550792436-181701c71f63?q=80&w=1600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1635585558405-3d339d7b4105?q=80&w=1600&auto=format&fit=crop",
        ],
        excerpt:
            "Mesin anestesi kualitas terbaik dengan fitur canggih dan harga yang terjangkau—solusi aman & nyaman untuk pasien.",
        content:
            `<h2>Anesthesia Machine AM852 – Mesin Anestesi Canggih untuk Operasi Modern dan Aman</h2>
      <p>Dalam dunia medis, keakuratan dan keselamatan adalah segalanya. AM852 dari Hostech Medical menghadirkan fitur premium, teknologi tinggi, dan fleksibilitas untuk berbagai skenario bedah.</p>
      <h3>Fitur Unggulan</h3>
      <ul>
        <li>15-Inch Color LCD Touchscreen</li>
        <li>Tiga jenis gas (O₂, N₂O, Air)</li>
        <li>Flow meter elektronik & alarm komprehensif</li>
      </ul>`,
    };

    const related = [
        {
            id: 201,
            name: "Inkubator Bayi",
            price: "Rp 40.281.500",
            image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1600&auto=format&fit=crop",
            slug: "inkubator-bayi",
        },
        {
            id: 202,
            name: "Steam Sterilizer Autoclave",
            price: "Rp 133.189.500",
            image: "https://images.unsplash.com/photo-1582719478185-2fe98f7f2a5b?q=80&w=1600&auto=format&fit=crop",
            slug: "steam-sterilizer",
        },
        {
            id: 203,
            name: "Audiometer Labat Audiolab Plus",
            price: "Rp 75.000.000",
            image: "https://images.unsplash.com/photo-1516542076529-1ea3854896e1?q=80&w=1600&auto=format&fit=crop",
            slug: "audiometer-labat",
        },
        {
            id: 204,
            name: "Mesin Anestesi Portable",
            price: "Rp 72.413.790",
            image: "https://images.unsplash.com/photo-1517705008128-361805f42e86?q=80&w=1600&auto=format&fit=crop",
            slug: "mesin-anestesi-portable",
        },
    ];

    const [activeIndex, setActiveIndex] = useState(0);


    return (

        <div className="grid gap-8 lg:grid-cols-12 mb-10">

            {/* Sidebar Kategori */}
            <aside className="lg:col-span-3">
                <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                    <h2 className="text-base font-semibold text-slate-900">Kategori Produk</h2>
                    <nav className="mt-3 space-y-2 text-sm">
                        {categories.map((c) => (
                            <details key={c.name} className="group rounded-lg border border-slate-200 p-2 open:bg-slate-50">
                                <summary className="flex cursor-pointer list-none items-center justify-between font-medium text-slate-800">
                                    {c.name}
                                    <span className="ml-2 inline-flex h-5 w-5 items-center justify-center rounded border border-slate-300 text-slate-600">
                    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 transition-transform group-open:rotate-180"><path fill="currentColor" d="M12 15.5 5.5 9a1 1 0 0 1 1.4-1.4L12 12.68 17.1 7.6A1 1 0 1 1 18.5 9L12 15.5Z"/></svg>
                  </span>
                                </summary>
                                <ul className="mt-2 space-y-1 pl-2 text-slate-600">
                                    {c.children.map((ch) => (
                                        <li key={ch}><a href={`#/kategori/${encodeURIComponent(ch)}`} className="block rounded-md px-2 py-1 hover:bg-slate-100">{ch}</a></li>
                                    ))}
                                </ul>
                            </details>
                        ))}
                    </nav>
                </div>
            </aside>



            {/* Konten Produk */}
            <div className="lg:col-span-9 space-y-10">
                {/* Atas: Gambar + ringkasan di kanan */}
                <div className="grid gap-6 md:grid-cols-2">
                    <div>
                        <div className="relative overflow-hidden rounded-3xl ring-1 ring-slate-200">
                            <div className="relative aspect-[4/3] w-full">
                                <Image
                                    src={product.images[activeIndex]}
                                    alt={product.name}
                                    fill
                                    className="object-cover"
                                    sizes="(min-width:1024px) 38rem, 100vw"
                                    priority
                                />
                            </div>
                        </div>
                        <div className="mt-4 grid grid-cols-5 gap-2">
                            {product.images.map((src, i) => (
                                <button
                                    key={src + i}
                                    type="button"
                                    onClick={() => setActiveIndex(i)}
                                    aria-label={`Lihat gambar ${i + 1}`}
                                    aria-current={activeIndex === i}
                                    className={`relative aspect-[4/3] overflow-hidden rounded-xl ring-1 transition
        ${activeIndex === i ? "ring-sky-500" : "ring-slate-200 hover:ring-slate-300"}`}
                                >
                                    <Image
                                        src={src}
                                        alt={`${product.name} - gambar ${i + 1}`}
                                        fill
                                        className="object-cover"
                                        sizes="160px"
                                    />
                                </button>
                            ))}
                        </div>
                    </div>
                    <div>
                        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                            <p className="text-xs uppercase tracking-wide text-slate-500">{product.category}</p>
                            <h1 className="mt-1 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">{product.name}</h1>
                            <p className="mt-2 text-2xl font-extrabold text-slate-900">{product.price}</p>
                            <p className="mt-3 text-slate-700">{product.excerpt}</p>

                            <div className="mt-4 grid gap-1 text-sm text-slate-700">
                                <div>Registration No : <span className="font-medium">{product.reg}</span></div>
                                <div>SKU : <span className="font-medium">{product.sku}</span></div>
                                <div>Tag : <span className="font-medium">{product.tags.join(', ')}</span></div>
                            </div>

                            <div className="mt-6 flex flex-wrap gap-3">
                                <a
                                    href="#download-spesifikasi"
                                    className="inline-flex items-center gap-2 rounded-2xl bg-sky-600 px-5 py-3 text-white shadow-lg shadow-sky-600/20 transition hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
                                >
                                    Download Spesifikasi
                                </a>

                                {/* Direct WA untuk sewa */}
                                <a
                                    href={`https://wa.me/628123456789?text=${encodeURIComponent(
                                        `Halo, saya ingin sewa ${product.name} (SKU: ${product.sku}). Mohon informasi ketersediaan & penawaran.`
                                    )}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 rounded-2xl bg-emerald-600 px-5 py-3 text-white shadow-lg shadow-emerald-600/20 transition hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                                >
                                    Sewa via WhatsApp
                                </a>
                            </div>

                        </div>
                    </div>
                </div>

                {/* WYSIWYG content */}
                {product.content && (
                    <article
                        className="prose prose-slate max-w-none rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                        <div dangerouslySetInnerHTML={{__html: product.content}}/>
                    </article>
                )}

                {/* Related products */}
                <section>
                    <h2 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">Produk Terkait</h2>
                    <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {related.map((r) => (
                            <article key={r.id}
                                     className="group overflow-hidden rounded-2xl bg-white ring-1 ring-slate-200 shadow-sm transition hover:shadow-md">
                            <div className="relative aspect-square w-full overflow-hidden">
                                    <Image src={r.image} alt={r.name} fill className="object-cover transition duration-500 group-hover:scale-[1.03]" sizes="(min-width:1024px) 18rem, 100vw" />
                                </div>
                                <div className="p-4">
                                    <p className="text-xs uppercase tracking-wide text-slate-500">Terkait</p>
                                    <h3 className="mt-1 line-clamp-2 text-base font-semibold text-slate-900">{r.name}</h3>
                                    <p className="mt-1 text-sm font-semibold text-slate-900">{r.price}</p>
                                    <div className="mt-3">
                                        <a href={`#/produk/${r.slug}`} className="inline-flex items-center gap-1 rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500">Detail</a>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}
