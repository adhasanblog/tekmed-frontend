'use client';

import {useState} from "react";

export function FAQSection() {
    const faqs = [
        {
            question: "Apakah semua alat yang disewakan sudah terkalibrasi?",
            answer:
                "Ya, semua alat kesehatan yang kami sewakan sudah melalui proses kalibrasi sesuai standar sebelum dikirim ke pengguna.",
        },
        {
            question: "Berapa lama waktu yang dibutuhkan untuk instalasi alat di rumah sakit?",
            answer:
                "Waktu instalasi bergantung pada jenis alat dan kondisi lokasi. Umumnya 1–3 hari kerja setelah alat tiba di lokasi.",
        },
        {
            question: "Apakah tersedia layanan darurat 24/7?",
            answer:
                "Kami menyediakan dukungan teknis 24/7 untuk pelanggan, termasuk penanganan gangguan dan konsultasi teknis.",
        },
        {
            question: "Apakah menerima pembelian alat baru selain sewa?",
            answer:
                "Ya, kami juga menjual berbagai peralatan medis baru dengan garansi resmi dan dukungan purna jual.",
        },
    ];

    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section id="faq" className="bg-slate-50 py-14 sm:py-16 lg:py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">FAQ</h2>
                    <p className="mt-2 text-slate-600 sm:text-lg">Pertanyaan yang sering diajukan seputar layanan dan produk kami.</p>
                </div>

                <div className="mt-10 space-y-4">
                    {faqs.map((faq, idx) => (
                        <div key={idx} className="rounded-2xl border border-slate-200 bg-white shadow-sm">
                            <button
                                className="flex w-full items-center justify-between px-4 py-3 text-left text-slate-900"
                                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                aria-expanded={openIndex === idx}
                            >
                                <span className="font-medium">{faq.question}</span>
                                <svg
                                    className={`h-5 w-5 transform transition-transform ${openIndex === idx ? "rotate-180" : "rotate-0"}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            {openIndex === idx && (
                                <div className="px-4 pb-4 text-slate-600">{faq.answer}</div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// --- FAQ Section ---
export type FAQItem = { q: string; a: string };

export function FAQAlkes({ faqs }: { faqs?: FAQItem[] }) {
    const fallback: FAQItem[] = faqs?.length
        ? faqs
        : [
            {
                q: "Apakah bisa sewa harian/mingguan/bulanan?",
                a: "Bisa. Kami menyediakan skema sewa fleksibel mulai harian hingga bulanan, termasuk opsi perpanjangan dan penyesuaian paket sesuai kebutuhan instalasi/ruangan.",
            },
            {
                q: "Apakah alat sudah terkalibrasi?",
                a: "Semua unit disertai sertifikat kalibrasi yang masih berlaku. Kami juga menyediakan layanan rekalkibrasi on-site sesuai standar keselamatan yang berlaku.",
            },
            {
                q: "Bagaimana dukungan teknis saat masa sewa?",
                a: "Tim teknisi kami standby sesuai SLA. Tersedia remote support, kunjungan on-site, serta unit pengganti jika diperlukan agar operasional tetap berjalan.",
            },
            {
                q: "Bisakah membantu instalasi & pelatihan operator?",
                a: "Ya. Kami melakukan survey lokasi, instalasi, commissioning, hingga pelatihan dasar untuk memastikan alat siap pakai dan aman digunakan.",
            },
            {
                q: "Metode pembayaran dan pengadaan yang didukung?",
                a: "Kami mendukung pembayaran termin, e-catalog/PO (jika relevan), serta kerja sama jangka panjang. Hubungi tim kami untuk penawaran resmi.",
            },
        ];

    return (
        <section id="faq" className="bg-slate-50 py-14 sm:py-16 lg:py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">Pertanyaan yang Sering Diajukan</h2>
                    <p className="mt-2 text-slate-600 sm:text-lg">Temukan jawaban cepat terkait penyewaan, servis, dan instalasi alat kesehatan.</p>
                </div>

                <dl className="mx-auto mt-8 max-w-3xl divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white shadow-sm">
                    {fallback.map((item, idx) => (
                        <Disclosure key={idx} question={item.q} answer={item.a} defaultOpen={idx === 0} />
                    ))}
                </dl>
            </div>

            {/* JSON-LD for FAQ rich results */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'FAQPage',
                        mainEntity: fallback.map((f) => ({
                            '@type': 'Question',
                            name: f.q,
                            acceptedAnswer: { '@type': 'Answer', text: f.a },
                        })),
                    }),
                }}
            />
        </section>
    );
}

function Disclosure({ question, answer, defaultOpen = false }: { question: string; answer: string; defaultOpen?: boolean }) {
    const [open, setOpen] = useState(defaultOpen);
    return (
        <div className="px-4 sm:px-6">
            <dt>
                <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 py-4 text-left"
                    aria-expanded={open}
                    onClick={() => setOpen((v) => !v)}
                >
                    <span className="text-base font-semibold text-slate-900">{question}</span>
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-slate-200 text-slate-700">
            <svg viewBox="0 0 24 24" className={`h-4 w-4 transition-transform ${open ? 'rotate-180' : ''}`} aria-hidden>
              <path fill="currentColor" d="M12 15.5 5.5 9a1 1 0 0 1 1.4-1.4L12 12.68 17.1 7.6A1 1 0 1 1 18.5 9L12 15.5Z" />
            </svg>
          </span>
                </button>
            </dt>
            <dd className={`pb-4 text-slate-600 ${open ? 'block' : 'hidden'}`}>
                <p className="leading-relaxed">{answer}</p>
            </dd>
        </div>
    );
}
