// app/tentang/page.tsx
import Image from "next/image";
import {DefaultHero} from "@/components/default-hero";

export const metadata = {
    title: "Tentang Kami | PT. Alkes Medika",
    description:
        "Profil perusahaan, visi misi, sertifikasi, dan komitmen layanan PT. Alkes Medika.",
};

export default function AboutPage() {
    return (
        <div className="bg-white mb-10">
            {/* Hero / Intro */}

            <DefaultHero
                imageUrl="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1920&auto=format&fit=crop"
                title="Partner Tepercaya Penyedia & Layanan Alat Kesehatan"
                subtitle="Tentang Kami"
                description=" Kami membantu RS & klinik menghadirkan operasional yang aman dan efisien melalui penyewaan, servis, instalasi, dan dukungan teknis 24/7."/>

            {/* Company summary */}
            <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
                <div className="grid gap-8 md:grid-cols-2">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-3xl ring-1 ring-slate-200">
                        <Image
                            src="https://images.unsplash.com/photo-1584467735871-2e4e42d64c4c?q=80&w=1600&auto=format&fit=crop"
                            alt="Tim teknis instalasi alat kesehatan"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="self-center">
                        <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                            Siapa Kami
                        </h2>
                        <p className="mt-3 text-slate-700">
                            PT. Alkes Medika adalah perusahaan yang berfokus pada solusi
                            peralatan medis—mulai dari pengadaan & penyewaan, servis &
                            kalibrasi, hingga instalasi & pelatihan operator. Kami hadir
                            dengan standar mutu yang ketat, dokumentasi lengkap, dan SLA yang
                            jelas.
                        </p>
                        <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
                            {[
                                ["300+ alat tersedia", "Portofolio lengkap siap kirim"],
                                ["25+ RS terlayani", "Jaringan dukungan nasional"],
                                ["ISO & AKL", "Sertifikasi & legalitas tertib"],
                                ["24/7 Support", "Teknisi bersertifikat"],
                            ].map(([a, b]) => (
                                <div
                                    key={a}
                                    className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
                                >
                                    <div className="text-base font-semibold text-slate-900">
                                        {a}
                                    </div>
                                    <div className="text-slate-600">{b}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Visi & Misi – gaya panah biru */}
            <section className="relative isolate">
                <div className="absolute inset-0 -z-10">
                    <Image
                        src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1920&auto=format&fit=crop"
                        alt="Background ruang operasi"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-white/70 backdrop-blur-[1px]" />
                </div>

                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
                    {/* VISI */}
                    <div className="relative grid items-stretch gap-4 md:grid-cols-[220px_1fr]">
                        <div className="relative">
                            <div className="relative h-full min-h-[110px] rounded-2xl bg-[#1E4C8F] text-white px-6 py-6 shadow-md">
                                <span className="text-3xl font-bold tracking-wide">VISI</span>
                                {/* ekor panah */}
                                <span className="absolute right-[-22px] top-1/2 hidden -translate-y-1/2 md:block"
                                >
                  <svg width="22" height="80" viewBox="0 0 22 80" fill="none">
                    <path
                        d="M0 0 L22 40 L0 80 Z"
                        fill="#1E4C8F"
                    />
                  </svg>
                </span>
                            </div>
                        </div>
                        <div className="rounded-2xl bg-white/80 px-6 py-6 shadow-md ring-1 ring-slate-200">
                            <p className="text-slate-800">
                                Menjadi Perusahaan Penyedia Alat Kesehatan yang Terpercaya dan
                                Profesional yang tersebar di seluruh Indonesia.
                            </p>
                        </div>
                    </div>

                    {/* MISI */}
                    <div className="relative mt-6 grid items-stretch gap-4 md:grid-cols-[220px_1fr]">
                        <div className="relative">
                            <div className="relative h-full min-h-[110px] rounded-2xl bg-[#1E4C8F] text-white px-6 py-6 shadow-md">
                                <span className="text-3xl font-bold tracking-wide">MISI</span>
                                <span className="absolute right-[-22px] top-1/2 hidden -translate-y-1/2 md:block">
                  <svg width="22" height="80" viewBox="0 0 22 80" fill="none">
                    <path d="M0 0 L22 40 L0 80 Z" fill="#1E4C8F" />
                  </svg>
                </span>
                            </div>
                        </div>
                        <div className="rounded-2xl bg-white/80 px-6 py-6 shadow-md ring-1 ring-slate-200">
                            <ul className="space-y-3 text-slate-800">
                                <li className="flex gap-2">
                                    <span className="mt-1 inline-block h-2.5 w-2.5 rounded-[4px] border border-slate-400" />
                                    Membantu memenuhi pelayanan dan distribusi alat kesehatan
                                    untuk Rumah Sakit secara cepat, tepat, efektif, dan efisien.
                                </li>
                                <li className="flex gap-2">
                                    <span className="mt-1 inline-block h-2.5 w-2.5 rounded-[4px] border border-slate-400" />
                                    Membantu memenuhi kebutuhan Alat Kesehatan yang mempunyai
                                    keunggulan dengan harga yang kompetitif.
                                </li>
                                <li className="flex gap-2">
                                    <span className="mt-1 inline-block h-2.5 w-2.5 rounded-[4px] border border-slate-400" />
                                    Melayani Rumah Sakit, Dokter, Suster, dan Perangkat Medis
                                    Lainnya dengan profesional, terpercaya dan terbaik.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Nilai Perusahaan / USP */}
            <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
                <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                    Nilai yang Kami Junjung
                </h2>
                <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {[
                        ["Keamanan", "Standar keselamatan & prosedur ketat."],
                        ["Kecepatan", "Respon cepat dan SLA jelas."],
                        ["Kualitas", "Kalibrasi & dokumentasi rapi."],
                        ["Kolaborasi", "Pendampingan teknis end-to-end."],
                    ].map(([title, desc]) => (
                        <div
                            key={title}
                            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                        >
                            <div className="text-base font-semibold text-slate-900">
                                {title}
                            </div>
                            <div className="text-slate-600">{desc}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Sertifikasi / Legalitas */}
            <section className="bg-slate-50">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
                    <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                        Sertifikasi & Legalitas
                    </h2>
                    <div className="mt-6 grid items-center gap-4 sm:grid-cols-3">
                        {[
                            "ISO 9001:2015",
                            "ISO 14001:2015",
                            "ISO 45001:2018",
                        ].map((txt) => (
                            <div
                                key={txt}
                                className="flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-6 py-8 text-slate-700 shadow-sm"
                            >
                                {txt}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline singkat (opsional) */}
            <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
                <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                    Perjalanan Kami
                </h2>
                <ol className="mt-6 space-y-6">
                    {[
                        ["2018", "Didirikan, fokus layanan servis & kalibrasi."],
                        ["2020", "Penambahan unit rental & jaringan teknisi nasional."],
                        ["2023", "Integrasi digital: tracking servis & SLA dashboard."],
                    ].map(([year, note]) => (
                        <li key={year} className="grid gap-2 sm:grid-cols-[96px_1fr]">
                            <div className="font-semibold text-slate-900">{year}</div>
                            <div className="text-slate-700">{note}</div>
                        </li>
                    ))}
                </ol>
            </section>

            {/* CTA */}
            <section className="bg-sky-600">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 text-white">
                    <div className="grid items-center gap-4 md:grid-cols-[1fr_auto]">
                        <div>
                            <h3 className="text-2xl font-bold">
                                Siap konsultasi atau butuh penawaran resmi?
                            </h3>
                            <p className="text-sky-100">
                                Tim kami siap membantu merancang solusi yang tepat.
                            </p>
                        </div>
                        <a
                            href="https://wa.me/628123456789?text=Halo%20tim%20Alkes%20Medika%2C%20saya%20ingin%20konsultasi."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center rounded-2xl bg-white px-5 py-3 font-semibold text-sky-700 shadow-sm transition hover:bg-slate-100"
                        >
                            Hubungi via WhatsApp
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
