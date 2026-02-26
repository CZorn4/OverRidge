import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Community - OverRidge Wealth Advisors",
  description: "Learn about the organizations OverRidge Wealth Advisors supports in the community.",
};

const charities = [
  {
    name: "The Taste Project Fort Worth",
    logo: "/images/TasteProject.png",
    logoWidth: 200,
    logoHeight: 200,
    url: "https://www.tasteproject.org/",
    description:
      "Taste Project is a 501(c)3 non-profit established simply to feed people one community at a time. One of every six Americans faces the reality that they may not be able to provide for their next meal. There are programs in place that help; however, in Tarrant County, 36 percent of this food insecure population live above the poverty level and receive no government help.",
  },
  {
    name: "Union Gospel Mission of Tarrant County",
    logo: "/images/UnionGospel.png",
    logoWidth: 200,
    logoHeight: 200,
    url: "https://www.ugm-tc.org/",
    description:
      "Union Gospel Mission of Tarrant County has over 135 years of experience providing food, shelter and supportive services to thousands of men, women and children. These services have given many residents hope and a chance for a new start. In the secure environment of UGM-TC's ten-acre campus, residents participate in programs designed to maximize their potential by developing the skills they need to return to the community as independent, productive members.",
  },
  {
    name: "Grant Halliburton Foundation",
    logo: "/images/GrantHalliburton.png",
    logoWidth: 150,
    logoHeight: 150,
    url: "https://www.granthalliburton.org/",
    description:
      "Grant Halliburton Foundation was established in 2006 in memory of Grant Halliburton, a Dallas teen who battled depression and bipolar disorder for several years before his suicide death at the age of 19. The Foundation that bears his name works to help families and young people recognize the signs of mental illness through a variety of avenues including mental health education, resources, and support.",
  },
  {
    name: "Beautiful Feet Ministries",
    logo: "/images/TheFeet.png",
    logoWidth: 200,
    logoHeight: 200,
    url: "https://thefeet.org/",
    description:
      "Beautiful Feet Ministries yearly serves over 80,000 meals, distributes clothing to over 5,000 people, and provides medical and dental services to over 1,200 patients. Daily Bible studies and worship services are held, along with an inner-city youth and children's ministry that meets twice a week. Beautiful Feet is still growing, and volunteers continue to pour into this Texas sized mission hub. God is moving on the streets of Fort Worth!",
  },
];

export default function CommunityPage() {
  return (
    <div style={{ fontFamily: '"Montserrat", sans-serif' }}>
      {/* Hero — uk-height-viewport offset-bottom:20, bg cover, overlay rgba(0,0,0,0.57), uk-container-large */}
      <section className="relative min-h-[80vh] flex items-center justify-center text-white overflow-hidden">
        <Image
          src="/images/our-community.jpg"
          alt=""
          fill
          className="object-cover object-top"
          priority
        />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(0, 0, 0, 0.57)" }} />
        <div className="relative z-10 text-center px-6 max-w-[1360px] mx-auto">
          {/* uk-h3 uk-font-tertiary uk-margin-small = Homemade Apple, mb 10px */}
          <div className="font-tertiary text-[28px] leading-[1.4] mb-[10px]">Our Community</div>
          {/* uk-h2 uk-margin-remove-top = Playfair 700 30.6px/1.3, mt 0 */}
          <h1 className="font-heading font-bold text-[30.6px] leading-[1.3] mt-0">
            Generosity is an outward expression of a grateful heart.
          </h1>
        </div>
        {/* Side label */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden xl:block">
          <div className="[writing-mode:vertical-rl] rotate-180 text-[12px] tracking-wider text-white/70">Independent RIA</div>
        </div>
      </section>

      {/* Content — uk-section-default uk-section, uk-container (1200px) */}
      <section className="pt-[40px] pb-[40px] md:pt-[70px] md:pb-[70px]">
        <div className="max-w-[1200px] mx-auto px-[15px] sm:px-[30px]">
          {/* Intro — uk-text-large uk-margin uk-text-center = 19px/1.5, mt 20px */}
          <p className="text-[19px] leading-[1.5] text-[rgb(113,113,113)] text-center mt-[20px]">
            Serving our clients and our community gives us a greater purpose. Beyond supporting
            our local churches, we believe in giving back and impacting the lives of people
            outside our world. Here are some of the organizations we support:
          </p>

          {/* Charity grid — uk-grid, uk-width-1-2@s uk-width-1-4@m = 2 cols sm, 4 cols md */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[30px] mt-[40px]">
            {charities.map((charity) => (
              <div key={charity.name} className="text-center">
                {/* h4 uk-text-primary = Montserrat 700 19px/1.4 uppercase #c32230, mb 20px */}
                <h4 className="font-bold text-[19px] leading-[1.4] uppercase text-[#c32230] mb-[20px]">
                  {charity.name}
                </h4>
                <hr className="border-gray-200 mb-[20px]" />

                {/* Logo — uk-margin uk-text-center = mt 20px */}
                <div className="mt-[20px]">
                  <a
                    href={charity.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block"
                  >
                    <Image
                      src={charity.logo}
                      alt={charity.name}
                      width={charity.logoWidth}
                      height={charity.logoHeight}
                      className="mx-auto object-contain"
                    />
                  </a>
                </div>

                {/* Description — uk-panel uk-margin uk-text-center = base font 14px/24px, mt 20px */}
                <p className="text-[14px] leading-[24px] text-[rgb(113,113,113)] mt-[20px]">
                  {charity.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
