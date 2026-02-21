"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const services = [
  {
    id: "investment-management",
    title: "Investment Management",
    image: "/images/investment-management.jpg",
    description:
      "Successful investment management starts with discipline. It is the cornerstone of your financial future. We manage your assets as if they were our own. We work to achieve our clients goals through appropriate growth and income, but also have a finite focus on risk and all of the competing forces that can impact a portfolio over time. Through extensive research, tactical allocation, and focused risk modeling and management, our portfolios are designed to help clients achieve their long-term goals.",
    bullets: [
      "Custom Portfolios",
      "Science, Not Guesswork",
      "Expertise Matters",
      "Discipline and Flexibility",
      "Long-Term Focus",
      "Tax-Conscious",
    ],
    extraTitle: "Expertise Matters",
    extraText:
      "Financial advisors have widely different levels of expertise. We believe that clients who entrust their wealth to an advisor deserve to work with highly credentialed experts.",
    textFirst: true,
  },
  {
    id: "retirement-planning",
    title: "Retirement Planning",
    image: "/images/retirement-planning.jpg",
    description:
      "Financing retirement has become increasingly complex and can cause unnecessary anxiety, especially for those who plan to access their retirement assets in the next several years. An array of investment options, combined with fluctuating interest and inflation rates and other variables, make it difficult to determine how much you will need, where you should invest, and to whom to turn for assistance.",
    extraText:
      'The complex tax and legislative environment surrounding retirement planning only compounds the confusion. With qualified plans, such as IRA, pension, profit sharing, and 401(k) plans, the timing and amount of withdrawals are critical in order to avoid additional tax penalties. And if you have accumulated significant qualified plan assets, you may face additional problems, such as the "Double Tax Dilemma," where the government can tax these assets twice.',
    textFirst: false,
  },
  {
    id: "financial-planning",
    title: "Financial Planning",
    image: "/images/financial-planning.jpg",
    description:
      "We combine thorough financial planning with customized investing to help you identify and achieve your most important life goals.",
    subsections: [
      {
        title: "Customized Planning",
        text: "Our detailed planning process allows us to gain a thorough understanding of each client's personal and financial situation, objectives, comfort level with risk and time horizon for achieving goals. This understanding allows us to:",
        bullets: [
          "Create customized investment portfolios",
          "Help identify tax mitigation opportunities inside and outside of client portfolios",
          "Advise clients on estate planning with the assistance of our expert partners",
          "Advise on tax-efficient, impactful philanthropic strategies.",
          "Analyze existing risk mitigation and insurance strategies.",
          "Review existing debt and liability structures to determine if better options can be utilized.",
        ],
      },
      {
        title: "Advice that Serves You",
        text: "The guidance that results from our planning process is based on the sole criteria of helping you meet your goals. Are you focused on retiring comfortably, selling or exiting a business or leaving a lasting legacy? We seek the most appropriate, most cost-efficient products and solutions\u2014and never those that don't help you reach your objectives.",
      },
      {
        title: "Seeing the Big Picture",
        text: "We recognize that no client's financial life is one-dimensional. Using our deep expertise in investing, tax management, risk mitigation and other areas, we can coordinate all elements of your financial life towards a unified end of reaching your bottom-line goals and achieving peace of mind.",
      },
    ],
    textFirst: true,
  },
  {
    id: "education-funding",
    title: "Education Funding",
    image: "/images/education-funding.jpg",
    description:
      "Every parent understands the need to save money to cover the costs of a college education for a child, but not every parent understands the options available to them to fund such an important event in the child's life. Poor planning can force parents to cut back on everyday living expenses, liquidate retirement plans, borrow from insurance policies, mortgage their homes, and even seek additional employment to fund college costs. There are better options available. Let us help you explore your options and develop a plan to meet this very important goal.",
    extraTitle: "Programs Available:",
    bullets: [
      "529 College Savings Plans/Qualified Tuition Program (QTP)",
      "Coverdell Education Savings Account",
    ],
    textFirst: false,
  },
];

const approaches = [
  {
    label: "ANALYSIS",
    title: "ANALYSIS",
    description:
      "This meeting focuses on reviewing your current financial situation. We go over balance sheets, cash flow statements, current holdings, etc. to better provide us a preliminary direction specific to your needs.",
  },
  {
    label: "IMPLEMENTATION",
    title: "IMPLEMENTATION",
    description:
      "We take it from here to oversee and manage your assets, you then have access to the client log-in to review your assets any time you want. You can also download our app to have mobile access anywhere you go.",
  },
  {
    label: "ONGOING REVIEW",
    title: "ONGOING REVIEW",
    description:
      "We bring you in for consultation to look back at your performance and any changes that may be needed.",
  },
];

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div style={{ fontFamily: '"Montserrat", sans-serif' }}>
      {/* Hero — uk-height-viewport, bg image cover, overlay rgba(14,14,14,0.52) */}
      <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
        <Image
          src="/images/services-hero.jpg"
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(14, 14, 14, 0.52)" }} />
        <div className="relative z-10 text-center px-6 max-w-[1360px] mx-auto">
          {/* uk-h3 uk-font-tertiary uk-margin-small = Homemade Apple, mb 10px */}
          <div className="font-tertiary text-[28px] leading-[1.4] mb-[10px]">Our &nbsp; Services</div>
          {/* uk-h3 = Playfair 700 28px/1.4. Links are uk-text-primary = #c32230 */}
          <h1 className="font-heading font-bold text-[28px] leading-[1.4] mt-0">
            <a href="#investment-management" className="text-[#c32230] hover:underline">Investment Management</a>
            {" | "}
            <a href="#retirement-planning" className="text-[#c32230] hover:underline">Retirement Planning</a>
            <br />
            <a href="#financial-planning" className="text-[#c32230] hover:underline">Financial Planning</a>
            {" | "}
            <a href="#education-funding" className="text-[#c32230] hover:underline">Education Funding</a>
          </h1>
        </div>
        {/* Side label */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden xl:block">
          <div className="[writing-mode:vertical-rl] rotate-180 text-[12px] tracking-wider text-white/70">Independent RIA</div>
        </div>
      </section>

      {/* Service Sections — uk-grid-collapse (no gap), alternating text/image */}
      {services.map((service) => (
        <section key={service.id} id={service.id}>
          {/* uk-grid uk-grid-collapse = no gap between columns */}
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Image half — uk-background-cover, min-height 350px */}
            <div className={`relative min-h-[350px] md:min-h-[600px] ${service.textFirst ? "md:order-2" : ""}`}>
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Content half — uk-tile-default uk-tile uk-tile-large = padding 30px sides, 140px top/bottom */}
            <div className={`flex items-center px-[15px] sm:px-[30px] lg:px-[60px] py-[70px] md:py-[140px] ${service.textFirst ? "md:order-1" : ""}`}>
              <div className="w-full">
                {/* h2 uk-margin-medium uk-width-large uk-margin-auto uk-text-center = Playfair 36px/47px, mb 40px, max-w 450px, centered */}
                <h2 className="font-heading font-bold text-[36px] leading-[47px] text-[#0d1724] text-center mb-[40px] max-w-[450px] mx-auto">
                  {service.title}
                </h2>

                {/* uk-panel uk-margin uk-text-justify = 14px/24px, text-justify, mt 20px */}
                <p className="text-[14px] leading-[24px] text-[rgb(113,113,113)] text-justify mt-[20px]">
                  {service.description}
                </p>

                {/* uk-h4 = Montserrat 700 19px/27px */}
                {service.extraTitle && (
                  <h3 className="font-bold text-[19px] leading-[27px] text-[#0d1724] mt-[40px] mb-0">
                    {service.extraTitle}
                  </h3>
                )}
                {service.extraText && (
                  <p className="text-[14px] leading-[24px] text-[rgb(113,113,113)] mt-[20px]">{service.extraText}</p>
                )}

                {/* Bullet list — uk-list uk-margin-medium = mt 40px */}
                {service.bullets && (
                  <ul className="mt-[20px] space-y-[10px]">
                    {service.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-center gap-[10px]">
                        <span className="w-2 h-2 rounded-full bg-[#c32230] flex-shrink-0" />
                        <span className="text-[14px] leading-[24px] text-[rgb(113,113,113)]">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Subsections for financial planning */}
                {service.subsections?.map((sub) => (
                  <div key={sub.title} className="mt-[40px]">
                    <h3 className="font-bold text-[19px] leading-[27px] text-[#0d1724] mb-0">
                      {sub.title}
                    </h3>
                    <p className="text-[14px] leading-[24px] text-[rgb(113,113,113)] mt-[20px]">{sub.text}</p>
                    {sub.bullets && (
                      <ul className="list-disc list-inside text-[14px] leading-[24px] text-[rgb(113,113,113)] mt-[10px] space-y-[5px]">
                        {sub.bullets.map((b) => (
                          <li key={b}>{b}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}

                {/* CTA button — uk-button uk-button-primary = bg #c32230, Montserrat 700 12px uppercase, 42px line-height, px 20px */}
                <div className="text-center mt-[40px]">
                  <Link
                    href="/contact"
                    className="inline-block px-[20px] text-[12px] leading-[42px] font-bold uppercase tracking-wider bg-[#c32230] text-white hover:bg-[#a51d2a] transition-colors"
                  >
                    Let&apos;s begin.
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Our Approach — uk-section-muted uk-section, uk-container (1200px) */}
      <section className="bg-[#f4f4f4] pt-[40px] pb-[40px] md:pt-[70px] md:pb-[70px]">
        <div className="max-w-[1200px] mx-auto px-[15px] sm:px-[30px] text-center">
          {/* uk-h1 uk-text-primary = Playfair 700 42px, #c32230 */}
          <h2 className="font-heading font-bold text-[42px] leading-[50px] text-[#c32230] mb-0">
            Our Approach
          </h2>

          {/* uk-text-large uk-margin = 19px/1.5, mt 20px */}
          <div className="mt-[20px] text-[19px] leading-[1.5] text-[rgb(113,113,113)]">
            <p>
              We focus primarily on working with individuals and small business owners. Thanks to
              our personal touch, we have built long-term relationships with our clients through
              generations and have assisted with the transfer of wealth for children of our clients
              when desired.
            </p>
            <p className="mt-4">
              When you work with us, you receive a personal touch at all times that combines a
              traditional advisor approach with a money manager. This allows us to build our own
              trading solutions and do our own research for you rather than outsource it to a money
              manager who could be thousands of miles away from us and you. This comprehensive
              approach lets our team consistently provide you with the strategic recommendations in
              pursuit of your financial goals for many years to come.
            </p>
          </div>

          {/* Tabs — uk-subnav uk-subnav-pill */}
          <div className="mt-[20px]">
            <div className="flex justify-center gap-[5px] mb-[20px]">
              {approaches.map((tab, i) => (
                <button
                  key={tab.label}
                  onClick={() => setActiveTab(i)}
                  className={`px-[20px] text-[12px] leading-[42px] font-bold uppercase tracking-wider transition-colors ${
                    activeTab === i
                      ? "bg-[#c32230] text-white"
                      : "bg-transparent text-[#0d1724] hover:text-[#c32230]"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab content */}
            <div className="mt-[20px]">
              <Image
                src="/images/favicon.png"
                alt=""
                width={96}
                height={96}
                className="mx-auto"
              />
              {/* uk-h3 el-title = Playfair 700 28px/1.4, mt 20px */}
              <h3 className="font-heading font-bold text-[28px] leading-[1.4] text-[#0d1724] mt-[20px] mb-0">
                {approaches[activeTab].title}
              </h3>
              {/* uk-margin-top = mt 20px */}
              <p className="text-[14px] leading-[24px] text-[rgb(113,113,113)] mt-[20px]">
                {approaches[activeTab].description}
              </p>
            </div>
          </div>

          {/* Disclaimer — uk-text-small uk-margin */}
          <p className="text-[12px] leading-[1.5] text-[rgb(113,113,113)] mt-[20px]">
            Not all OverRidge advisory services will be appropriate or necessary for all clients,
            and the potential value and benefit of OverRidge&apos;s services will vary based upon a
            variety of factors, including the client&apos;s individual investment, financial, and tax
            circumstances. Neither personalized services, nor a representative&apos;s professional
            credentials, should be construed as a guarantee of client satisfaction or any
            particular outcome. Past performance does not guarantee future results. All investing
            comes with risk, including risk of loss.
          </p>
        </div>
      </section>

      {/* CTA — uk-section-default uk-section uk-section-large uk-padding-remove-bottom, bg image with overlay */}
      <section className="relative text-white pt-[70px] pb-[70px] md:pt-[140px] md:pb-[140px]">
        <Image
          src="/images/get-acquainted.jpg"
          alt=""
          fill
          className="object-cover object-left"
        />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(0, 0, 0, 0.29)" }} />
        <div className="relative z-10 text-center px-6">
          {/* uk-h3 uk-font-tertiary uk-margin-small = Homemade Apple, mb 10px */}
          <p className="font-tertiary text-[28px] leading-[1.4] mb-[10px]">Let&apos;s begin.</p>
          {/* uk-heading-small = Playfair 700 44px/1.2 */}
          <h2 className="font-heading font-bold text-[44px] leading-[1.2] mb-[40px]">
            Complimentary &ldquo;Get Acquainted&rdquo; Meeting
          </h2>
          {/* uk-button uk-button-default uk-button-large */}
          <Link
            href="/contact"
            className="inline-block px-[30px] text-[12px] leading-[52px] font-bold uppercase tracking-wider border border-white text-white hover:bg-white hover:text-[#0d1724] transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
