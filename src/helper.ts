import {RentalUnit} from "@/types/products";

export const formatIDR = (n: number) =>
    new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(n);

export const pct = (price?: number, original?: number) =>
    price && original && original > price ? Math.round(((original - price) / original) * 100) : 0;

export const unitLabel = (u: RentalUnit) =>
    u === "jam" ? "/jam" : u === "hari" ? "/hari" : u === "minggu" ? "/minggu" : u === "bulan" ? "/bulan" : "/tahun";

export const badgeClass = (b: string) => (b === "Baru" ? "bg-emerald-600" : b === "Promo" ? "bg-amber-500" : "bg-sky-600");
