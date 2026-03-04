import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { team } from "@/lib/teamData";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return team.map((member) => ({ slug: member.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const member = team.find((m) => m.slug === slug);
  if (!member) return {};
  return {
    title: `${member.name} - OverRidge Wealth Advisors`,
    description: member.bio[0],
  };
}

export default async function TeamMemberPage({ params }: Props) {
  const { slug } = await params;
  const member = team.find((m) => m.slug === slug);
  if (!member) notFound();

  const photo = member.photoColor ?? member.photoBW;

  return (
    <div style={{ fontFamily: '"Montserrat", sans-serif' }}>
      <section className="pt-32 lg:pt-44 pb-[70px]">
        <div className="max-w-[1200px] mx-auto px-[15px] sm:px-[30px]">
          {/* Back link */}
          <div className="mb-[40px]">
            <Link
              href="/about-us#team"
              className="text-[14px] font-bold uppercase text-[#a3a3a3] hover:text-[#C12130] transition-colors duration-200 tracking-wide"
            >
              ← Our Team
            </Link>
          </div>

          {/* Two-column layout: photo left, bio right */}
          <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-[50px] lg:gap-[70px] items-start">
            {/* Photo */}
            <div className="flex justify-center md:justify-start">
              <div className="relative">
                <div className="absolute top-[10px] bottom-[10px] left-[10px] right-[10px] border border-[#C12130]/30 z-10 pointer-events-none" />
                <Image
                  src={photo}
                  alt={member.name}
                  width={360}
                  height={400}
                  className="relative w-[280px] md:w-[320px] lg:w-[360px] object-cover rounded-[5px]"
                />
              </div>
            </div>

            {/* Bio content */}
            <div>
              <h1 className="font-heading font-bold text-[42px] leading-[50px] text-[#0d1724] mb-0">
                {member.name}
              </h1>
              <p
                className="font-bold text-[14px] leading-[20px] uppercase text-[#C12130] mt-[10px] mb-[30px]"
                style={{ fontFamily: '"Montserrat", sans-serif' }}
              >
                {member.title}
              </p>

              <div className="space-y-[20px]">
                {member.bio.map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-[17px] leading-[1.7] text-[rgb(113,113,113)]"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
