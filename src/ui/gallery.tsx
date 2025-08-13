'use client'
import {useState} from "react";
import Image from "next/image";

export type GalleryItem = {
    id: string | number;
    title: string;
    subtitle?: string;
    imageUrl: string;
    tag?: string; // e.g., "Kalibrasi", "Instalasi"
    meta?: string; // e.g., lokasi/RS
};

export function Gallery({
                                               service,
                                               installation,
                                           }: {
    service?: GalleryItem[];
    installation?: GalleryItem[];
}) {
    const fallbackService: GalleryItem[] = [
        {
            id: 1,
            title: "Kalibrasi Patient Monitor",
            subtitle: "Akurasi SpO₂ & NIBP",
            imageUrl:
                "https://images.unsplash.com/photo-1580696889331-1810369f0d3a?q=80&w=1600&auto=format&fit=crop",
            tag: "Kalibrasi",
            meta: "RS Mitra Sehat",
        },
        {
            id: 2,
            title: "Servis Ventilator ICU",
            subtitle: "Pergantian filter & leak test",
            imageUrl:
                "https://images.unsplash.com/photo-1583324113626-70df0f4deaab?q=80&w=1600&auto=format&fit=crop",
            tag: "Servis",
            meta: "ICU Wing A",
        },
        {
            id: 3,
            title: "Perawatan Infusion Pump",
            subtitle: "Uji flow rate & alarm",
            imageUrl:
                "https://images.unsplash.com/photo-1584987602223-64d91e02f2cd?q=80&w=1600&auto=format&fit=crop",
            tag: "Maintenance",
            meta: "Klinik Sentosa",
        },
    ];

    const fallbackInstall: GalleryItem[] = [
        {
            id: 11,
            title: "Instalasi Treadmill Uji Beban",
            subtitle: "Integrasi dengan ECG",
            imageUrl:
                "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?q=80&w=1600&auto=format&fit=crop",
            tag: "Instalasi",
            meta: "Unit Rehabilitasi",
        },
        {
            id: 12,
            title: "Pemasangan Lampu Operasi",
            subtitle: "Balancing & fokus cahaya",
            imageUrl:
                "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1600&auto=format&fit=crop",
            tag: "Instalasi",
            meta: "OK 2",
        },
        {
            id: 13,
            title: "Setup Ruang Monitoring",
            subtitle: "Layout & kabel data",
            imageUrl:
                "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1600&auto=format&fit=crop",
            tag: "Setup",
            meta: "Ruang Perawatan 3",
        },
    ];

    const tabData = [
        { key: "service", label: "Service Alat", items: service?.length ? service : fallbackService },
        { key: "install", label: "Instalasi Alat", items: installation?.length ? installation : fallbackInstall },
    ];

    const [active, setActive] = useState<string>(tabData[0].key);
    const [lightbox, setLightbox] = useState<null | GalleryItem>(null);

    const current = tabData.find((t) => t.key === active) ?? tabData[0];

    return (
        <section id="galeri" className="bg-white py-14 sm:py-16 lg:py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Heading */}
                <div className="text-center">
                    <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">Galeri Pekerjaan</h2>
                    <p className="mt-2 text-slate-600 sm:text-lg">Dokumentasi service & instalasi alat oleh tim bersertifikat.</p>
                </div>

                {/* Tabs */}
                <div className="mt-8 flex justify-center">
                    <div className="inline-flex rounded-2xl border border-slate-200 bg-white p-1 shadow-sm">
                        {tabData.map((t) => (
                            <button
                                key={t.key}
                                onClick={() => setActive(t.key)}
                                className={`rounded-xl px-4 py-2 text-sm font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 ${
                                    active === t.key ? "bg-sky-600 text-white" : "text-slate-700 hover:bg-slate-50"
                                }`}
                                aria-pressed={active === t.key}
                            >
                                {t.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Grid */}
                <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {current.items.map((item) => (
                        <figure key={item.id} className="group relative overflow-hidden rounded-2xl ring-1 ring-slate-200 bg-white shadow-sm">
                            <div className="relative aspect-[4/3] w-full overflow-hidden">
                                <Image
                                    src={item.imageUrl}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                                    sizes="(min-width: 1280px) 22rem, (min-width: 1024px) 20rem, 100vw"
                                />
                                {item.tag && (
                                    <span className="absolute left-3 top-3 rounded-full bg-slate-900/70 px-2.5 py-1 text-xs font-semibold text-white">{item.tag}</span>
                                )}
                            </div>
                            <figcaption className="p-4">
                                <h3 className="text-sm font-semibold text-slate-900">{item.title}</h3>
                                {item.subtitle && <p className="mt-0.5 text-sm text-slate-600">{item.subtitle}</p>}
                                {item.meta && <p className="mt-1 text-xs text-slate-500">{item.meta}</p>}
                                <div className="mt-3">
                                    <button
                                        onClick={() => setLightbox(item)}
                                        className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
                                    >
                                        Lihat Foto
                                    </button>
                                </div>
                            </figcaption>
                        </figure>
                    ))}
                </div>
            </div>

            {/* Lightbox */}
            {lightbox && (
                <div
                    role="dialog"
                    aria-modal="true"
                    className="fixed inset-0 z-50 grid place-items-center bg-black/60 p-4"
                    onClick={() => setLightbox(null)}
                >
                    <div
                        className="relative w-full max-w-4xl overflow-hidden rounded-2xl bg-white shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="relative aspect-[16/10] w-full">
                            <Image
                                src={lightbox.imageUrl}
                                alt={lightbox.title}
                                fill
                                className="object-contain bg-slate-900"
                                sizes="(min-width: 1024px) 64rem, 100vw"
                                priority
                            />
                        </div>
                        <div className="flex items-start justify-between gap-4 p-4">
                            <div>
                                <h3 className="text-base font-semibold text-slate-900">{lightbox.title}</h3>
                                {lightbox.subtitle && <p className="text-sm text-slate-600">{lightbox.subtitle}</p>}
                                {lightbox.meta && <p className="mt-1 text-xs text-slate-500">{lightbox.meta}</p>}
                            </div>
                            <button
                                onClick={() => setLightbox(null)}
                                className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
                            >
                                Tutup
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}