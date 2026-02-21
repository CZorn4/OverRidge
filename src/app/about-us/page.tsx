import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Who We Are - OverRidge Wealth Advisors",
  description: "Learn about our values, team, and history at OverRidge Wealth Advisors.",
};

const values = [
  {
    title: "Fiduciary",
    description:
      "Serving the unique, long-term interests of our clients is a privilege and obligation. Personalized client service is a way of life for us. We believe there is no better way to serve our clients than to put their needs ahead of our own.",
  },
  {
    title: "Transparency",
    description:
      "We believe transparency is the basis to any meaningful and trusting relationship. We aim to be open and honest in all of our relationships.",
  },
  {
    title: "Generosity",
    description:
      "We believe generosity is an outward expression of a grateful heart. We strive to be generous with our time and our resources, whether it's with our clients, our employees, or the world around us. We believe generosity begets generosity.",
  },
];

const team = [
  { name: "Andy Heinz", title: "CEO/President", photo: "/images/team/andy-heinz.jpg" },
  { name: "Dane Petty", title: "COO/CCO", photo: "/images/team/headshot-1.jpg" },
  { name: "Chris Coffin", title: "Portfolio Manager/Advisor", photo: "/images/team/headshot-13.jpg" },
  { name: "Maureen Maidlow", title: "Investment Advisor", photo: "/images/team/maureen-maidlow.jpg" },
  { name: "Ron Huskey", title: "Investment Advisor", photo: "/images/team/ron-huskey.jpg" },
  { name: "Hayden Heinz", title: "Investment Advisor", photo: "/images/team/headshot-3.jpg" },
  { name: "Pat Fletcher", title: "Director of Client Services", photo: "/images/team/headshot-17.jpg" },
  { name: "Judy Marquardt", title: "Client Services Associate", photo: "/images/team/headshot-19.jpg" },
  { name: "Sylvester Stemley", title: "Corporate Chaplain", photo: "/images/team/sly.jpg" },
];

export default function AboutPage() {
  return (
    <div style={{ fontFamily: '"Montserrat", sans-serif' }}>
      {/* Values Section — uk-section-default uk-section uk-section-small */}
      <section className="pt-32 lg:pt-44 pb-[40px]">
        {/* uk-grid uk-grid-large = 40px gap */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px] items-center">
          {/* Left: image — uk-width-1-2@m, uk-text-right */}
          <div className="flex justify-end px-6 lg:pl-12">
            <div className="relative inline-block">
              {/* tm-box-decoration-default tm-box-decoration-inverse */}
              <div className="absolute top-[10px] bottom-[10px] left-[10px] right-[10px] border border-white/70 z-10 pointer-events-none" />
              <Image
                src="/images/who-we-are.jpg"
                alt="Financial Advisor"
                width={720}
                height={654}
                className="relative w-full"
              />
            </div>
          </div>

          {/* Right: content — uk-tile-default uk-tile uk-flex uk-flex-middle */}
          <div className="px-[30px] py-[40px] lg:pr-12">
            <h1 className="font-heading font-bold text-[42px] leading-[50px] text-[rgb(195,34,48)] mb-0 max-w-[600px]">
              Our Values
            </h1>

            {/* uk-text-large uk-margin uk-width-2xlarge = 19px, lh 1.5, mt 20px, max-w 840px */}
            <div className="mt-[20px] max-w-[840px]">
              <p className="text-[19px] leading-[1.5] text-[rgb(113,113,113)] mb-4">
                We are in the business of serving people. Money just happens to be the avenue
                with which we serve. Through all of our interactions, we strive to uphold the
                highest standards and values.
              </p>
              <p className="text-[19px] leading-[1.5] text-[rgb(113,113,113)]">
                Our overarching philosophy is simple:{" "}
                <strong className="text-[#C12130]">Client First.</strong>
              </p>
            </div>

            {/* uk-margin-large uk-width-xlarge = mt 40px, max-w 600px */}
            {/* uk-grid uk-child-width-1-2@s = 2 cols with default gap */}
            <div className="mt-[40px] max-w-[600px] grid grid-cols-1 sm:grid-cols-2 gap-x-[30px] gap-y-[30px]">
              {values.map((value) => (
                <div key={value.title}>
                  {/* uk-h5 = 14px, lh 1.4, fw 700, uppercase. uk-margin-top = mt 20px */}
                  <h3 className="font-bold text-[14px] leading-[1.4] uppercase text-[#0d1724] mb-0">
                    {value.title}
                  </h3>
                  {/* uk-margin-small-top = mt 10px */}
                  <p className="mt-[10px] text-[14px] leading-[24px] text-[rgb(113,113,113)]">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Disclaimer — uk-text-small uk-margin uk-text-center */}
        <div className="mt-[20px] px-6 lg:px-12">
          <p className="text-[12px] leading-[1.5] text-[rgb(113,113,113)] text-center">
            Our commitment to our core values is not a guarantee of client satisfaction or any
            particular outcome. Neither personalized services nor unique perspectives and
            experiences should be construed as a guarantee of a particular outcome. Not all
            OverRidge advisory services will be appropriate or necessary for all clients, and
            the potential value and benefit of OverRidge&apos;s services will vary based upon a
            variety of factors, including the client&apos;s individual investment, financial, and tax
            circumstances. Advisory clients identified with prior authorization. Past performance
            does not guarantee future results. All investing comes with risk, including risk of
            loss.
          </p>
        </div>
      </section>

      {/* Team Section — uk-section-muted, uk-section (70px padding @960+), uk-container-large (1360px) */}
      <section className="bg-[#f4f4f4] pt-[40px] pb-[40px] md:pt-[70px] md:pb-[70px]" id="team">
        <div className="max-w-[1360px] mx-auto px-[15px] sm:px-[30px]">
          {/* uk-margin-xlarge = mb 70px */}
          <div className="mb-[70px]">
            {/* uk-h1 uk-text-primary uk-margin-medium = Playfair 42px, #c32230, mb 40px */}
            <h2 className="font-heading font-bold text-[42px] leading-[50px] text-[rgb(195,34,48)] text-center mb-[40px]">
              Our Team
            </h2>

            {/* uk-grid uk-child-width-1-4@m uk-grid-large = 4 cols, 40px gap */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[40px] text-center">
              {team.map((member) => (
                <div key={member.name} className="team-card">
                  {/* uk-border-rounded = border-radius 5px, 250x250 */}
                  <Image
                    src={member.photo}
                    alt={member.name}
                    width={250}
                    height={250}
                    className="rounded-[5px] mx-auto w-[250px] h-[250px] object-cover"
                  />
                  {/* el-title uk-margin-top = mt 20px. Playfair 700 28px/39px #0d1724 */}
                  <h3 className="font-heading font-bold text-[28px] leading-[39px] text-[#0d1724] mt-[20px] mb-0">
                    {member.name}
                  </h3>
                  {/* el-meta uk-h5 uk-text-muted uk-margin-small-top = Montserrat 700 14px/20px uppercase #a3a3a3, mt 10px */}
                  <p className="font-bold text-[14px] leading-[20px] uppercase text-[#a3a3a3] mt-[10px] mb-0" style={{ fontFamily: '"Montserrat", sans-serif' }}>
                    {member.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Roots — uk-section-default uk-section uk-padding-remove-bottom */}
      <section className="pt-[40px] md:pt-[70px] pb-0">
        {/* uk-container = max-width 1200px, 30px side padding */}
        <div className="max-w-[1200px] mx-auto px-[15px] sm:px-[30px] text-center">
          {/* uk-h1 uk-text-primary uk-text-center */}
          <h2 className="font-heading font-bold text-[42px] leading-[50px] text-[rgb(195,34,48)] mb-0">
            Our Roots
          </h2>

          {/* uk-text-large uk-margin uk-text-center = 19px, lh 1.5, mt 20px */}
          <p className="text-[19px] leading-[1.5] text-[rgb(113,113,113)] mt-[20px]">
            We began serving clients in 1970 as Lee Johnson &amp; Associates, with Lee Johnson
            as its founding partner. When he retired in 2017, his partner of the previous eight
            years, Andy Heinz, bought the business and became its new CEO and president after
            having been with the firm nearly 23 years, starting as an intern.
          </p>

          {/* uk-margin uk-text-center, uk-border-rounded = mt 20px, border-radius 5px */}
          <div className="mt-[20px]">
            <Image
              src="/images/our-history.jpg"
              alt="Our History"
              width={3661}
              height={1355}
              className="rounded-[5px] w-full"
            />
          </div>

          <p className="text-[19px] leading-[1.5] text-[rgb(113,113,113)] mt-[20px]">
            Andy renamed the business OverRidge Wealth Advisors in March 2018 as part of a
            corporate rebranding ushering in his long-term vision to allow other established
            advisors who fit the firm&apos;s unique DNA to merge into the practice. The new brand
            mark resembles the lowercase Greek letter sigma, which is a symbol of risk.
          </p>

          <div className="mt-[20px]">
            <Image
              src="/images/postcard.png"
              alt="OverRidge Postcard"
              width={3097}
              height={2252}
              className="rounded-[5px] w-full"
            />
          </div>

          <p className="text-[19px] leading-[1.5] text-[rgb(113,113,113)] mt-[20px]">
            OverRidge is the name of the street where Andy grew up, Overridge Drive. It&apos;s the
            place where he learned the foundation of his money principles watching his parents
            who were great stewards of their resources. He learned from them to work hard and
            not cut corners. After you get paid, give first, save second, and learn to live on
            the rest. They learned to live comfortably on the &ldquo;rest&rdquo; by clipping coupons,
            shopping sale racks, and staying within their means. These principles allowed his
            parents to acquire wealth. Now, as their advisor, it&apos;s our job to help them keep
            it. Therein lies the importance of managing risk in our clients&apos; portfolios.
          </p>

          {/* uk-text-small uk-margin uk-text-center = 12px, lh 1.5, mt 20px */}
          <p className="text-[12px] leading-[1.5] text-[rgb(113,113,113)] mt-[20px]">
            Neither personalized services nor unique perspectives and experiences should be
            construed as a guarantee of a particular outcome. Not all OverRidge advisory
            services will be appropriate or necessary for all clients, and the potential value
            and benefit of OverRidge&apos;s services will vary based upon a variety of factors,
            including the client&apos;s individual investment, financial, and tax circumstances.
            Advisory clients identified with prior authorization. Past performance does not
            guarantee future results. All investing comes with risk, including risk of loss.
          </p>
        </div>
      </section>

      {/* Timeline — uk-section-default uk-section uk-padding-remove-bottom, full width no container */}
      <section className="pt-[40px] md:pt-[70px] pb-0">
        <div className="mt-[20px] text-center">
          <Image
            src="/images/timeline.png"
            alt="OverRidge Timeline"
            width={2560}
            height={733}
            className="w-full"
          />
        </div>
      </section>
    </div>
  );
}
