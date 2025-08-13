// app/kontak/page.tsx
import Image from "next/image";
import {DefaultHero} from "@/components/default-hero";

export const metadata = {
    title: "Kontak | PT. Alkes Medika",
    description: "Hubungi kami untuk konsultasi, penawaran, atau dukungan teknis.",
};

export default function ContactPage() {
    return (
        <div className="bg-white mb-10">

            <DefaultHero
                imageUrl="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1920&auto=format&fit=crop"
                title="Konsultasi Cepat & Penawaran Resmi"
                subtitle="Hubungi Kami"
                description="Tim kami siap membantu kebutuhan penyewaan, servis, kalibrasi, dan instalasi alat kesehatan."/>

            {/* Cards: info kontak */}
            <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-4">
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {[
                        { title: "Telepon", desc: "+62 812-3456-789", href: "tel:+628123456789" },
                        { title: "Email", desc: "info@alkesmedika.co.id", href: "mailto:info@alkesmedika.co.id" },
                        { title: "WhatsApp", desc: "Tanya cepat via WA", href: "https://wa.me/628123456789" },
                        { title: "Alamat", desc: "Jl. Kesehatan No.123, Jakarta", href: "https://maps.google.com" },
                    ].map((c) => (
                        <a
                            key={c.title}
                            href={c.href}
                            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md"
                        >
                            <div className="text-sm uppercase tracking-wide text-slate-500">{c.title}</div>
                            <div className="mt-1 text-base font-semibold text-slate-900">{c.desc}</div>
                        </a>
                    ))}
                </div>
            </section>

            {/* Form + Map */}
            <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
                <div className="grid gap-8 lg:grid-cols-12">
                    {/* Form */}
                    <div className="lg:col-span-7">
                        <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
                            <h2 className="text-2xl font-bold tracking-tight text-slate-900">Formulir Kontak</h2>
                            <p className="mt-2 text-slate-600">Isi detail di bawah ini—kami akan membalas secepatnya.</p>

                            <form
                                className="mt-6 grid gap-4 sm:grid-cols-2"

                            >
                                <div className="sm:col-span-1">
                                    <label htmlFor="name" className="block text-sm font-medium text-slate-700">
                                        Nama Lengkap
                                    </label>
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        required
                                        placeholder="Nama Anda"
                                        className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500"
                                    />
                                </div>

                                <div className="sm:col-span-1">
                                    <label htmlFor="company" className="block text-sm font-medium text-slate-700">
                                        Instansi/Perusahaan
                                    </label>
                                    <input
                                        id="company"
                                        name="company"
                                        type="text"
                                        placeholder="Rumah Sakit / Klinik"
                                        className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500"
                                    />
                                </div>

                                <div className="sm:col-span-1">
                                    <label htmlFor="email" className="block text-sm font-medium text-slate-700">
                                        Email
                                    </label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        required
                                        placeholder="nama@instansi.co.id"
                                        className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500"
                                    />
                                </div>

                                <div className="sm:col-span-1">
                                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700">
                                        Nomor Telepon/WA
                                    </label>
                                    <input
                                        id="phone"
                                        name="phone"
                                        type="tel"
                                        placeholder="+62…"
                                        className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500"
                                    />
                                </div>

                                <div className="sm:col-span-2">
                                    <label htmlFor="subject" className="block text-sm font-medium text-slate-700">
                                        Subjek
                                    </label>
                                    <input
                                        id="subject"
                                        name="subject"
                                        type="text"
                                        placeholder="Contoh: Sewa ventilator / Servis monitor"
                                        className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500"
                                    />
                                </div>

                                <div className="sm:col-span-2">
                                    <label htmlFor="message" className="block text-sm font-medium text-slate-700">
                                        Pesan
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={5}
                                        required
                                        placeholder="Tuliskan kebutuhan Anda…"
                                        className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500"
                                    />
                                </div>

                                <div className="sm:col-span-2 flex flex-wrap items-center gap-3">
                                    <button
                                        type="submit"
                                        className="inline-flex items-center gap-2 rounded-2xl bg-sky-600 px-5 py-3 text-white shadow-lg shadow-sky-600/20 transition hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
                                    >
                                        Kirim Pesan
                                    </button>
                                    <a
                                        href="https://wa.me/628123456789?text=Halo%2C%20saya%20ingin%20konsultasi."
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-3 text-slate-800 shadow-sm transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-sky-500"
                                    >
                                        Chat via WhatsApp
                                    </a>
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* Map / lokasi */}
                    <div className="lg:col-span-5">
                        <div className="rounded-3xl border border-slate-200 bg-white p-2 shadow-sm">
                            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                                <iframe
                                    title="Lokasi PT. Alkes Medika"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.778... (ganti dengan embed map asli)"
                                    className="h-full w-full"
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>
                            <div className="p-4">
                                <h3 className="text-base font-semibold text-slate-900">Kantor Pusat</h3>
                                <p className="mt-1 text-sm text-slate-600">
                                    Jl. Kesehatan No.123, Jakarta • Senin–Jumat 09.00–17.00 WIB
                                </p>
                            </div>
                        </div>

                        {/* FAQ mini (opsional) */}
                        <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                            <h4 className="text-sm font-semibold text-slate-900">Pertanyaan Cepat</h4>
                            <ul className="mt-3 space-y-2 text-sm text-slate-700">
                                <li>• Respon email biasanya <b>&lt; 24 jam kerja</b>.</li>
                                <li>• Untuk urgent, gunakan tombol <b>WhatsApp</b>.</li>
                                <li>• Sertakan detail alat/jumlah/tenor jika butuh sewa.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
