'use client';

import {useState} from "react";

export const Header = () => {
    const [open, setOpen] = useState(false);

    return (
        <header className="w-full border-b border-slate-200 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70">
            {/* Top bar */}
            <div className="bg-[#03E4A7] text-slate-900">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap items-center gap-4 py-2 text-sm md:text-[15px]">
                        <p className="inline-flex items-center gap-2 font-medium">
                            <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true"><path fill="currentColor" d="M2 6.75A2.75 2.75 0 0 1 4.75 4h14.5A2.75 2.75 0 0 1 22 6.75v10.5A2.75 2.75 0 0 1 19.25 20H4.75A2.75 2.75 0 0 1 2 17.25V6.75Zm2.75-.25a.25.25 0 0 0-.25.25v.17l7.21 5.01a1 1 0 0 0 1.18 0l7.21-5.01V6.75a.25.25 0 0 0-.25-.25H4.75Zm14.5 3.55-5.9 4.09a3 3 0 0 1-3.4 0L4 10.05v7.2c0 .14.11.25.25.25h14.5c.14 0 .25-.11.25-.25v-7.2Z"/></svg>
                            <span>adhasanblog@gmail.com</span>
                        </p>
                        <p className="inline-flex items-center gap-2 font-medium">
                            <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true"><path fill="currentColor" d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l1.47-1.47a1 1 0 0 1 1.01-.24 11.36 11.36 0 0 0 3.56.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C9.72 21 3 14.28 3 6a1 1 0 0 1 1-1h2.76a1 1 0 0 1 1 1 11.36 11.36 0 0 0 .57 3.56 1 1 0 0 1-.24 1.01l-1.47 1.22Z"/></svg>
                            <span>081200022555</span>
                        </p>
                    </div>
                </div>
            </div>

            {/* Main nav */}
            <div className='w-full bg-[#0F172B]'>
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
                    <div className="flex items-center justify-between py-4 md:py-5">
                        {/* Logo */}
                        <a href="#" className="flex items-center gap-3">
                            <span className="inline-block h-10 w-10 rounded-xl bg-sky-400" aria-hidden="true"/>
                            <span className="text-xl font-semibold tracking-tight text-white">TESTED</span>
                        </a>

                        {/* Desktop nav */}
                        <nav className="hidden md:block">
                            <ul className="flex items-center gap-8 text-[15px] font-medium">
                                {[["Home", "#"], ["About", "#about"], ["Contact", "#contact"], ["Blog", "#blog"]].map(([label, href]) => (
                                    <li key={label}>
                                        <a href={href}
                                           className="text-slate-400 transition hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500">{label}</a>
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        {/* Mobile menu button */}
                        <button
                            type="button"
                            onClick={() => setOpen((v) => !v)}
                            aria-controls="mobile-menu"
                            aria-expanded={open}
                            className="md:hidden inline-flex items-center justify-center rounded-xl border border-slate-200 p-2 text-slate-700 shadow-sm transition hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
                        >
                            <span className="sr-only">Toggle navigation</span>
                            <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                                {open ? (<path fill="currentColor" d="M6 18L18 6M6 6l12 12"/>) : (
                                    <path fill="currentColor" d="M4 7h16M4 12h16M4 17h16"/>)}
                            </svg>
                        </button>
                    </div>

                    {/* Mobile menu panel */}
                    <div
                        id="mobile-menu"
                        className={`${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"} grid transition-all duration-300 md:hidden`}
                    >
                        <div className="overflow-hidden">
                            <nav className="mb-4 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
                                <ul className="grid gap-2 text-[15px] font-medium">
                                    {[["Home", "#"], ["About", "#about"], ["Contact", "#contact"], ["Blog", "#blog"]].map(([label, href]) => (
                                        <li key={label}>
                                            <a
                                                href={href}
                                                className="block rounded-xl px-3 py-2 text-slate-700 hover:bg-slate-50 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
                                                onClick={() => setOpen(false)}
                                            >
                                                {label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>

            </div>
        </header>
    );
}