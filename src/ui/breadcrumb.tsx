import Image from "next/image";

export const Breadcrumb = () => {

    const product = {
        id: 1,
        name: "Anesthesia Machine HOSTECH AM852",
        category: "Mesin Anestesi",
        price: "Rp 594.312.000",
        sku: "AM852",
        reg: "KEMENKES RI AKL 20403420775",
        tags: ["anestesi", "hostech", "mesin anestesi"],
        images: [
            "https://images.unsplash.com/photo-1550792436-181701c71f63?q=80&w=1600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1635585558405-3d339d7b4105?q=80&w=1600&auto=format&fit=crop",
        ],
        excerpt:
            "Mesin anestesi kualitas terbaik dengan fitur canggih dan harga yang terjangkau—solusi aman & nyaman untuk pasien.",
        content:
            `<h2>Anesthesia Machine AM852 – Mesin Anestesi Canggih untuk Operasi Modern dan Aman</h2>
      <p>Dalam dunia medis, keakuratan dan keselamatan adalah segalanya. AM852 dari Hostech Medical menghadirkan fitur premium, teknologi tinggi, dan fleksibilitas untuk berbagai skenario bedah.</p>
      <h3>Fitur Unggulan</h3>
      <ul>
        <li>15-Inch Color LCD Touchscreen</li>
        <li>Tiga jenis gas (O₂, N₂O, Air)</li>
        <li>Flow meter elektronik & alarm komprehensif</li>
      </ul>`,
    };

    return (
        <>
            {/* Breadcrumb – di bawah header */}
            <div className="relative mb-6 overflow-hidden rounded-2xl ring-1 ring-slate-200">
                {/* background blur pakai gambar produk */}
                <div className="absolute inset-0">
                    <Image
                        src={product.images[0]}
                        alt={product.name}
                        fill
                        className="object-cover blur-sm scale-105 opacity-50"
                        sizes="100vw"
                        priority
                    />
                </div>

                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between text-white">
                    <nav aria-label="Breadcrumb" className="text-sm font-medium">
                        <ol className="flex flex-wrap items-center gap-2">
                            <li><a href="/" className="hover:underline">Beranda</a></li>
                            <li className="opacity-80">/</li>
                            <li><a href="/produk" className="hover:underline">Produk</a></li>
                            <li className="opacity-80">/</li>
                            <li><a href={`/produk/kategori/${encodeURIComponent(product.category)}`} className="hover:underline">{product.category}</a></li>
                            <li className="opacity-80">/</li>
                            <li className="text-slate-100/90">{product.name}</li>
                        </ol>
                    </nav>

                    {/* ikon panah kanan seperti contoh (opsional) */}
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/70">
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
        <path d="M9 18l6-6-6-6" />
      </svg>
    </span>
                </div>
            </div>

        </>
    )
}