'use client'

import {useState} from "react";

export const HeroImage = () => {
    const products = [
        {
            id: "ecg",
            name: "ECG 12-Lead",
            img: "https://images.unsplash.com/photo-1586327183712-7b3b7b42a0a8?q=80&w=1600&auto=format&fit=crop",
            alt: "Foto alat ECG 12-lead di ruang perawatan",
        },
        {
            id: "ventilator",
            name: "Ventilator ICU",
            img: "https://images.unsplash.com/photo-1584987602223-64d91e02f2cd?q=80&w=1600&auto=format&fit=crop",
            alt: "Foto ventilator ICU di rumah sakit",
        },
        {
            id: "treadmill",
            name: "Treadmill Medical",
            img: "https://images.unsplash.com/photo-1584467735871-2e4e42d64c4c?q=80&w=1600&auto=format&fit=crop",
            alt: "Foto treadmill medical untuk uji beban",
        },
    ];

    const [active, setActive] = useState(products[0]);
    return (

        <div className="relative md:min-h-[60vh] lg:min-h-[65vh]">
            <div
                className="group relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-slate-200 md:h-full">
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


    )
}