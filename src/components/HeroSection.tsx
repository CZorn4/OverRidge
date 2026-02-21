import Image from "next/image";

interface HeroSectionProps {
  superheading?: string;
  heading?: string;
  subheading?: string;
  backgroundImage?: string;
  backgroundVideo?: string;
  overlayOpacity?: number;
  children?: React.ReactNode;
  minHeight?: string;
}

export default function HeroSection({
  superheading,
  heading,
  subheading,
  backgroundImage,
  backgroundVideo,
  overlayOpacity = 0.4,
  children,
  minHeight = "min-h-[60vh]",
}: HeroSectionProps) {
  return (
    <section className={`relative ${minHeight} flex items-center justify-center text-white overflow-hidden`}>
      {backgroundVideo && (
        <video
          src={backgroundVideo}
          autoPlay
          loop
          muted
          playsInline
          className="video-cover"
        />
      )}
      {backgroundImage && !backgroundVideo && (
        <Image
          src={backgroundImage}
          alt=""
          fill
          className="object-cover"
          priority
        />
      )}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: `rgba(0, 0, 0, ${overlayOpacity})` }}
      />
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {superheading && (
          <p className="font-tertiary text-xl md:text-2xl mb-2">{superheading}</p>
        )}
        {heading && (
          <h1 className="text-3xl md:text-5xl font-bold mb-4">{heading}</h1>
        )}
        {subheading && (
          <p className="text-lg md:text-xl">{subheading}</p>
        )}
        {children}
      </div>
    </section>
  );
}
