import Image from "next/image";

interface HeroProps {
  imageUrl: string;
  imageAlt?: string;
  title: string;
  subtitle: string;
  description: string;
}

export const DefaultHero = ({imageUrl, imageAlt, title, subtitle, description}:HeroProps) => {
  return (
    <section className="relative isolate overflow-hidden rounded rounded-lg">
      <div className="absolute inset-0 -z-10">
        <Image
          src={imageUrl}
          alt={imageAlt || ""}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-slate-900/60" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20 text-white">
        <p className="text-sm uppercase tracking-widest text-sky-300">
          {subtitle}
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-3xl text-slate-200 sm:text-lg">
          {description}
        </p>
      </div>
    </section>
  );
};
