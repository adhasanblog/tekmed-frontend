import { useState } from "react";
import Image from "next/image";

export function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-300">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid gap-8 md:grid-cols-4">
                    {/* Logo & Deskripsi */}
                    <div>
                        <div className="flex items-center gap-2">
                            <span className="inline-block h-10 w-10 rounded-lg bg-sky-500"></span>
                            <span className="text-lg font-semibold text-white">PT. Alkes Medika</span>
                        </div>
                        <p className="mt-4 text-sm leading-relaxed text-slate-400">
                            Solusi lengkap penyewaan, servis, dan instalasi alat kesehatan untuk rumah sakit dan klinik di seluruh Indonesia.
                        </p>
                    </div>

                    {/* Menu */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Menu</h3>
                        <ul className="mt-4 space-y-2 text-sm">
                            <li><a href="#" className="hover:text-white">Beranda</a></li>
                            <li><a href="#services" className="hover:text-white">Layanan</a></li>
                            <li><a href="#produk-populer" className="hover:text-white">Produk</a></li>
                            <li><a href="#galeri" className="hover:text-white">Galeri</a></li>
                            <li><a href="#faq" className="hover:text-white">FAQ</a></li>
                        </ul>
                    </div>

                    {/* Kontak */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Kontak</h3>
                        <ul className="mt-4 space-y-2 text-sm">
                            <li>Email: <a href="mailto:info@alkesmedika.co.id" className="hover:text-white">info@alkesmedika.co.id</a></li>
                            <li>Telepon: <a href="tel:+628123456789" className="hover:text-white">+62 812-3456-789</a></li>
                            <li>Alamat: Jl. Kesehatan No. 123, Jakarta</li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Berlangganan</h3>
                        <p className="mt-4 text-sm text-slate-400">Dapatkan update terbaru seputar produk & layanan kami.</p>
                        <form className="mt-4 flex">
                            <input
                                type="email"
                                placeholder="Email Anda"
                                className="w-full rounded-l-lg border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
                            />
                            <button
                                type="submit"
                                className="rounded-r-lg bg-sky-600 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
                            >
                                Kirim
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 border-t border-slate-700 pt-6 text-center text-xs text-slate-500">
                    &copy; {new Date().getFullYear()} PT. Alkes Medika. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
