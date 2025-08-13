export const Service = () => {
    return (
        <section className="bg-white py-16 sm:py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                        Layanan Kami
                    </h2>
                    <p className="mt-3 text-lg text-slate-600">
                        — Solusi Tepat untuk Kebutuhan Peralatan Medis Anda —
                    </p>
                </div>

                <div className="mt-12 grid gap-8 md:grid-cols-2">
                    {/* Rental */}
                    <div className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
                        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-sky-100 text-sky-600">
                            {/* ICON RENTAL */}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-slate-900">Penyewaan Alat Kesehatan</h3>
                        <p className="mt-2 text-slate-600">
                            Menyediakan berbagai peralatan medis berkualitas dengan sistem sewa fleksibel.
                            Peralatan selalu terkalibrasi dan siap pakai.
                        </p>
                        <ul className="mt-3 space-y-1 text-slate-600">
                            <li>✔ Fleksibel: harian, mingguan, bulanan</li>
                            <li>✔ Peralatan lengkap & siap kirim</li>
                            <li>✔ Dukungan teknis selama masa sewa</li>
                        </ul>
                    </div>

                    {/* Service */}
                    <div className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
                        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
                            {/* ICON SERVICE */}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3v1.5m4.5-1.5v1.5M4.5 7.5h15M4.5 7.5A1.5 1.5 0 013 6V4.5A1.5 1.5 0 014.5 3h15A1.5 1.5 0 0121 4.5V6a1.5 1.5 0 01-1.5 1.5M4.5 7.5V21h15V7.5" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-slate-900">Servis & Pemeliharaan</h3>
                        <p className="mt-2 text-slate-600">
                            Layanan perbaikan, kalibrasi, dan perawatan berkala untuk memastikan alat
                            kesehatan Anda selalu optimal dan aman digunakan.
                        </p>
                        <ul className="mt-3 space-y-1 text-slate-600">
                            <li>✔ Teknisi bersertifikat</li>
                            <li>✔ Suku cadang asli & bergaransi</li>
                            <li>✔ Standar keselamatan sesuai regulasi</li>
                        </ul>
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-12 text-center">
                    <p className="text-lg font-medium text-slate-800 mb-4">
                        💬 Hubungi Kami untuk Mendapatkan Penawaran
                    </p>
                    <a
                        href="#hubungi-kami"
                        className="inline-flex items-center gap-2 rounded-2xl bg-sky-600 px-6 py-3 text-white shadow-lg shadow-sky-600/20 transition hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
                    >
                        Konsultasi Sekarang
                    </a>
                </div>
            </div>
        </section>
    );
}