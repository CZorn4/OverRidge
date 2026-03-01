import Link from "next/link";
import Image from "next/image";

const cards = [
  {
    title: "Who We Are",
    href: "/about-us",
    image: "/images/cowboy-home.jpg",
    alt: "Invest",
  },
  {
    title: "What We Do",
    href: "/services",
    image: "/images/what-we-do-home.jpg",
    alt: "Plan",
  },
  {
    title: "Our Community",
    href: "/community",
    image: "/images/tree-home.jpg",
    alt: "Retire",
  },
  {
    title: "Resources",
    href: "/resources",
    image: "/images/bridge-home.jpg",
    alt: "Fund",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section with Video */}
      <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
        <video
          src="/images/video/city.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="video-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 text-center px-6">
          <Image
            src="/images/apple-touch-icon.png"
            alt=""
            width={180}
            height={180}
            className="mx-auto mb-6"
          />
          <div className="w-px h-16 bg-white/50 mx-auto mb-6" />
          <Link
            href="/contact"
            className="font-tertiary text-3xl md:text-4xl hover:text-gray-300 transition-colors"
          >
            Let&apos;s Begin.
          </Link>
        </div>
        <div className="absolute bottom-8 right-8 hidden xl:block">
          <a
            href="https://adviserinfo.sec.gov/firm/summary/115009"
            target="_blank"
            rel="noreferrer"
            className="text-xs text-white/70 [writing-mode:vertical-rl] rotate-180 hover:text-white"
          >
            Firm Disclosure
          </a>
        </div>
      </section>

      {/* Wealth Management Section */}
      <section className="py-16 lg:py-28 relative">
        <div className="px-6 lg:px-12">
          <p className="font-tertiary text-xl lg:text-2xl text-gray-500 mb-2">
            Wealth Management
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-14">Built for you.</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {cards.map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="image-card group relative block overflow-hidden aspect-[2/3]"
              >
                <Image
                  src={card.image}
                  alt={card.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Red overlay on hover */}
                <div className="absolute inset-0 bg-accent/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-white font-heading font-bold drop-shadow-lg text-3xl md:text-4xl lg:text-[55px] lg:leading-[66px] text-center">
                    {card.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 lg:pt-28 lg:pb-14 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="font-tertiary text-[28px] leading-[39px] mb-2">Partners</p>
          <h2 className="font-heading font-bold text-[42px] leading-[50px] mb-16">Our strategic alliances.</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-44">
            <Image
              src="/images/CharlesSchwab.webp"
              alt="Charles Schwab"
              width={376}
              height={80}
              className="h-10 w-auto"
            />
            <Image
              src="/images/partner-schwab.jpg"
              alt="Charles Schwab"
              width={260}
              height={80}
              className="h-10 w-auto"
            />
          </div>
        </div>
      </section>
    </>
  );
}
