export type RentalUnit = "jam" | "hari" | "minggu" | "bulan" | "tahun";

export type RentalRate = {
    unit: RentalUnit;
    price: number;
    originalPrice?: number;
    minTerm?: number;
};

export type Product = {
    id: string;
    name: string;
    model?: string;
    sku?: string;
    brand?: string;
    description?: string;
    imageUrl: string;
    badges?: Array<"Baru" | "Promo" | "Best Seller">;
    specs?: string[];
    certifications?: string[];
    warranty?: string;
    inStock?: boolean;
    brochureUrl?: string;
    href?: string;
    rates?: RentalRate[];
};
