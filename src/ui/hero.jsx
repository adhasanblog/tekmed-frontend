'use client'
import { useState } from "react";

export function Hero() {
    const products = [
        {
            id: "ecg",
            name: "Patient Monitor ECG 12-lead",
            img: "./patient-monitor.jpg",
            alt: "Foto alat ECG 12-lead di ruang perawatan",
        },
        {
            id: "ventilator",
            name: "Ventilator ICU",
            img: "./ventilator.jpg",
            alt: "Foto ventilator ICU di rumah sakit",
        },
        {
            id: "syringe",
            name: "Syringe Pump",
            img: "./syringe-pump.jpg",
            alt: "Foto treadmill medical untuk uji beban",
        },
    ];

    const [active, setActive] = useState(products[0]);

    return (
        <section className="relative isolate overflow-hidden bg-gradient-to-br from-white via-slate-50 to-sky-50">
            {/* Container */}
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid items-center gap-8 md:grid-cols-2">
                    {/* Left: copy */}
                    <div className="py-10 md:py-16">

                        <h1 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                            Solusi Alat Kesehatan Lengkap untuk Rumah Sakit & Klinik
                        </h1>

                        <p className="mt-4 max-w-xl text-slate-600 sm:text-lg">
                            Tampilkan portofolio produk yang rapi, cepat, dan mudah diakses. Cocok untuk
                            penyedia alat kesehatan yang ingin terlihat profesional dan meyakinkan sejak
                            detik pertama.
                        </p>

                        {/* Stats */}
                        <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-slate-700">
                            <div className="flex items-center gap-2 rounded-xl bg-white px-3 py-2 shadow-sm ring-1 ring-slate-200">
                                <span className="text-xl font-semibold text-slate-900">300+</span>
                                <span className="text-slate-600">alat tersedia</span>
                            </div>
                            <div className="flex items-center gap-2 rounded-xl bg-white px-3 py-2 shadow-sm ring-1 ring-slate-200">
                                <span className="text-xl font-semibold text-slate-900">25+</span>
                                <span className="text-slate-600">RS terlayani</span>
                            </div>
                            <div className="flex items-center gap-2 rounded-xl bg-white px-3 py-2 shadow-sm ring-1 ring-slate-200">
                                <span className="text-xl font-semibold text-slate-900">24/7</span>
                                <span className="text-slate-600">dukungan teknis</span>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="mt-8">
                            <a
                                href="#hubungi-kami"
                                className="inline-flex items-center gap-2 rounded-2xl bg-sky-600 px-5 py-3 text-white shadow-lg shadow-sky-600/20 transition hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
                            >
                                Konsultasi Gratis
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="h-5 w-5"
                                >
                                    <path d="M13.5 4.5a.75.75 0 0 1 .75-.75h5.25a.75.75 0 0 1 .75.75v5.25a.75.75 0 0 1-1.5 0V6.31l-8.47 8.47a.75.75 0 0 1-1.06-1.06l8.47-8.47h-3.44a.75.75 0 0 1-.75-.75Z" />
                                    <path d="M5.25 6a.75.75 0 0 0-.75.75v11.25c0 .414.336.75.75.75h11.25a.75.75 0 0 0 .75-.75V9a.75.75 0 0 0-1.5 0v8.25H6.75V7.5H15a.75.75 0 0 0 0-1.5H5.25Z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Right: image with optional manual tabs (no auto slider) */}
                    <div className="relative md:min-h-[60vh] lg:min-h-[65vh]">
                        <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-slate-200 md:h-full">
                            <img
                                src={active.img}
                                alt={active.alt}
                                className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                                loading="eager"
                                fetchPriority="high"
                            />
                        </div>

                        {/* Manual product selector */}
                        <div className="pointer-events-auto mt-4 flex flex-wrap gap-2">
                            {products.map((p) => (
                                <button
                                    key={p.id}
                                    onClick={() => setActive(p)}
                                    className={`rounded-full border px-3 py-1.5 text-sm transition focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 ${
                                        active.id === p.id
                                            ? "border-sky-500 bg-sky-50 text-sky-700"
                                            : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                                    }`}
                                    aria-pressed={active.id === p.id}
                                >
                                    {p.name}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Height control: keep hero ~60–70% of desktop viewport */}
            <style jsx>{`
        section { min-height: 60vh; }
        @media (min-width: 1024px) {
          section { min-height: 70vh; }
        }
      `}</style>
        </section>
    );
}
