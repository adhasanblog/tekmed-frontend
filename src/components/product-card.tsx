'use client'
import {badgeClass, formatIDR, pct, unitLabel} from "@/helper";
import {Product, RentalUnit} from "@/types/products";
import {useState} from "react";

export type ProductCardProps = {
    product: Product;
    showSpecs?: boolean; // Optional prop to control specs display
    showCertificate?: boolean; // Optional prop to control certificate display
    showDescription?: boolean; // Optional prop to control description display
};


export function ProductCard({ product, showSpecs=false, showCertificate=false, showDescription=false}: ProductCardProps) {
    const disabled = product.inStock === false;
    const hasRates = Array.isArray(product.rates) && product.rates.length > 0;
    const [selectedUnit, setSelectedUnit] = useState<RentalUnit | "">(hasRates ? product.rates![0].unit : "");

    const selectedRate = hasRates && selectedUnit ? product.rates!.find((r) => r.unit === selectedUnit) : undefined;

    return (
        <article
            className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border bg-white shadow-[0_10px_30px_-10px_rgba(0,0,0,.15)] transition dark:bg-slate-800/60 ${
                disabled
                    ? "border-slate-200 opacity-60 grayscale cursor-not-allowed dark:border-slate-700"
                    : "border-slate-200 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800"
            }`}
        >
            <div className="relative">
                {product.badges?.map((b) => (
                    <span
                        key={b}
                        className={`absolute left-3 top-3 z-10 rounded-full px-2.5 py-1 text-xs font-semibold text-white ${badgeClass(b)}`}
                    >
            {b}
          </span>
                ))}
                <a
                    href={disabled ? undefined : product.href ?? "#"}
                    className="block pointer-events-none group-enabled:pointer-events-auto"
                >
                    <div className="aspect-[4/3] w-full overflow-hidden">
                        <img
                            src={product.imageUrl}
                            alt={product.name}
                            className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                            loading="lazy"
                        />
                    </div>
                </a>
                {disabled && <div className="absolute inset-0 bg-slate-900/10 dark:bg-black/30" aria-hidden="true" />}
            </div>

            <div className="flex flex-1 flex-col justify-between space-y-4 p-5">
                <div className="space-y-4">
                    {/* Header nama + identitas model */}
                    <div className="flex flex-wrap items-start justify-between gap-3">
                        <div className="min-w-0">
                            <h3 className="text-base font-semibold leading-tight">
                                <a href={disabled ? undefined : product.href ?? "#"} className="hover:underline">
                                    {product.name}
                                </a>
                            </h3>
                            <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-500">
                                {product.brand && (
                                    <span>
                    <span className="font-medium text-slate-600">Brand:</span> {product.brand}
                  </span>
                                )}
                                {product.model && (
                                    <span>
                    <span className="font-medium text-slate-600">Model:</span> {product.model}
                  </span>
                                )}
                                {product.sku && (
                                    <span>
                    <span className="font-medium text-slate-600">SKU:</span> {product.sku}
                  </span>
                                )}
                            </div>
                            {showDescription && product.description && (
                                <p className="mt-2 line-clamp-2 text-sm text-slate-600 dark:text-slate-300">{product.description}</p>
                            )}
                        </div>
                    </div>

                    {/* Pilihan harga sewa sebagai select */}
                    <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 dark:border-slate-700 dark:bg-slate-800/40">
                        {hasRates ? (
                            <div className="space-y-2">
                                <select
                                    value={selectedUnit}
                                    onChange={(e) => setSelectedUnit(e.target.value as RentalUnit)}
                                    disabled={disabled}
                                    className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-sm focus:border-slate-400 focus:outline-none dark:border-slate-600 dark:bg-slate-900 dark:text-slate-200"
                                >
                                    <option value="">Pilih periode sewa</option>
                                    {product.rates!.map((r, i) => (
                                        <option key={i} value={r.unit}>
                                            {r.unit.charAt(0).toUpperCase() + r.unit.slice(1)}
                                        </option>
                                    ))}
                                </select>
                                {selectedRate && (
                                    <div className="rounded-md bg-white p-2 text-sm shadow-inner dark:bg-slate-900 dark:text-slate-200">
                                        <div className="font-semibold text-slate-800 dark:text-slate-100">
                                            {formatIDR(selectedRate.price)} {unitLabel(selectedRate.unit)}
                                        </div>
                                        {selectedRate.originalPrice && selectedRate.originalPrice > selectedRate.price && (
                                            <div className="flex items-center gap-2">
                                                <span className="text-xs text-slate-500 line-through">{formatIDR(selectedRate.originalPrice)}</span>
                                                <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[11px] font-semibold text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300">
                          -{pct(selectedRate.price, selectedRate.originalPrice)}%
                        </span>
                                            </div>
                                        )}
                                        {selectedRate.minTerm && (
                                            <div className="mt-1 text-xs text-slate-500 dark:text-slate-400">Minimal sewa: {selectedRate.minTerm} {selectedRate.unit}</div>
                                        )}
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div className="text-sm text-slate-600 dark:text-slate-300">
                                Harga sewa: <span className="font-semibold text-slate-900 dark:text-white">Minta Penawaran</span>
                            </div>
                        )}
                    </div>

                    {/* Spesifikasi Utama */}
                    {showSpecs && product.specs && product.specs.length > 0 && (
                        <ul className="grid list-disc gap-1 pl-5 text-sm text-slate-700 dark:text-slate-200">
                            {product.specs.slice(0, 5).map((s, i) => (
                                <li key={i}>{s}</li>
                            ))}
                        </ul>
                    )}

                    {/* Sertifikasi + Garansi */}

                    {showCertificate && (
                        <div
                            className="flex flex-wrap items-center gap-2 pt-1 text-xs text-slate-600 dark:text-slate-300">
                            {product.certifications && product.certifications.length > 0 && (
                                <span
                                    className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2.5 py-1 dark:bg-slate-700/40">
                <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 12l2 2 4-4"/>
                </svg>
                                    {product.certifications.join(" · ")}
              </span>
                            )}
                            {product.warranty && (
                                <span
                                    className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2.5 py-1 dark:bg-slate-700/40">
                <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l7 4v6c0 5-3.5 9-7 10-3.5-1-7-5-7-10V6l7-4z"/>
                </svg>
                Garansi: {product.warranty}
              </span>
                            )}
                        </div>

                    )}
                </div>

                {/* CTA */}
                <div className="mt-auto flex flex-col gap-3 pt-1">
                    <button
                        disabled={disabled}
                        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white shadow transition hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-white dark:text-slate-900"
                    >
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M3 5h18M5 12h14M7 19h10"/>
                        </svg>
                        Minta Penawaran
                    </button>
                    <button
                        disabled={disabled}
                        className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 active:scale-[.99] disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-700/40"
                    >
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M2 8l10 6 10-6-10-6-10 6zm0 4l10 6 10-6" />
                        </svg>
                        Hubungi Sales
                    </button>
                </div>
            </div>
        </article>
    );
}