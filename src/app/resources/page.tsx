"use client";

import { useState } from "react";
import Image from "next/image";

const weblinks = [
  {
    title: "News",
    icon: "/images/news-icon.png",
    links: [
      { name: "Calculated Risk", url: "http://www.calculatedriskblog.com/" },
      { name: "Seeking Alpha", url: "http://seekingalpha.com/" },
      { name: "The Wall Street Journal", url: "http://www.wsj.com/" },
      { name: "Investor\u2019s Business Daily", url: "http://www.investors.com/" },
      { name: "Barron\u2019s Online", url: "http://www.barrons.com/" },
    ],
  },
  {
    title: "News",
    icon: "/images/news-icon.png",
    links: [
      { name: "Bloomberg", url: "http://www.bloomberg.com/" },
      { name: "Forbes.com", url: "http://www.forbes.com/" },
      { name: "Fortune.com", url: "http://www.fortune.com/" },
      { name: "Google Finance", url: "http://www.google.com/finance" },
      { name: "Yahoo! Finance", url: "http://finance.yahoo.com/" },
    ],
  },
  {
    title: "Resources",
    icon: "/images/notebook-icon.png",
    links: [
      { name: "IRS.gov", url: "http://www.irs.gov/" },
      { name: "SocialSecurity.gov", url: "http://www.socialsecurity.gov/" },
      { name: "EFTPS (Federal Tax)", url: "https://www.eftps.com/eftps/" },
      { name: "Crestmont Research", url: "http://www.crestmontresearch.com/" },
      { name: "Moneychimp", url: "http://www.moneychimp.com/" },
      { name: "AnnualCreditReport.com", url: "https://www.annualcreditreport.com/cra/index.jsp" },
      { name: "BankRate.com", url: "http://www.bankrate.com/" },
      { name: "SavingForCollege.com", url: "http://www.savingforcollege.com/" },
    ],
  },
  {
    title: "Calculators",
    icon: "/images/calculator-icon.png",
    links: [
      { name: "FinancialCalculators.com", url: "http://www.financialcalculators.com/" },
      { name: "DinkyTown.net", url: "https://www.dinkytown.net/" },
    ],
  },
];

const faqs = [
  {
    question: "What is an independent financial advisor?",
    answer:
      "Independent Registered Investment Advisers are professional independent advisory firms that provide personalized financial advice to their clients, many of whom have complex financial needs. Because these advisors are independent, they are not tied to any particular family of funds or investment products. As fiduciaries, they are held to the highest standard of care\u2014and are required to act in the best interests of their clients at all times. They are registered with either the Securities and Exchange Commission or state securities regulators.",
  },
  {
    question: "What does being a Fiduciary mean?",
    answer:
      "A fiduciary is a professional entrusted to manage assets or wealth while putting the client\u2019s best interests first at all times. Financial advisors who follow a fiduciary standard must disclose every material conflict, or potential conflict, to their clients prior to and throughout the advisory engagement. Fiduciaries will also adopt a code of ethics and will fully disclose how they are compensated.",
  },
  {
    question: "What separates us from other financial advisors?",
    answer:
      "A combination of independence, comprehensive service, and client focus sets us apart. As an independent Registered Investment Advisor, we provide advice tailored to for each client\u2019s specific situation and needs without concerning ourselves with the agenda of a parent company. Our services range from active financial planning to investment management, education, and retirement planning \u2014 we can meet a wide range of needs internally under one roof. Finally, we are oriented toward providing each client the attention, service, and care that they deserve. We treat our clients as individuals, not numbers.",
  },
  {
    question: "Where is my money kept?",
    answer:
      "In our advisory role, we never serve as the custodian of client assets. We utilize Charles Schwab & Co., Inc as the custodian of client accounts and as our primary broker. When your account is established with Charles Schwab & Co., Inc, you provide us with limited trading authorization on your account. This authority allows us to process trades directly in client accounts.",
  },
  {
    question: "How do I begin?",
    answer:
      "Typically, we only need a copy of your most recent account statement and your signatures on a few forms. We will take care of setting up your new account and transferring your assets.",
  },
];

export default function ResourcesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div style={{ fontFamily: '"Montserrat", sans-serif' }}>
      {/* Hero — uk-height-viewport offset-bottom:20, video bg, overlay rgba(0,8,13,0.4) */}
      <section className="relative min-h-[80vh] flex items-center justify-center text-white overflow-hidden">
        <video
          src="/images/video/resources.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="video-cover"
        />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(0, 8, 13, 0.4)" }} />
        <div className="relative z-10 text-center px-6 max-w-[1600px] mx-auto">
          {/* uk-h3 uk-font-tertiary uk-margin-small = Homemade Apple, mb 10px */}
          <div className="font-tertiary text-[28px] leading-[1.4] mb-[10px]">Resources</div>
          {/* uk-h3 = Playfair 700 28px/1.4, links #c32230 */}
          <h1 className="font-heading font-bold text-[28px] leading-[1.4] mt-0">
            <a href="#weblinks" className="text-[#c32230] hover:underline">Weblinks</a>
            {" | "}
            <a href="#faq" className="text-[#c32230] hover:underline">Frequently Asked Questions</a>
          </h1>
        </div>
      </section>

      {/* Weblinks — uk-section-default, uk-section uk-section-small (40px padding), uk-container-large (1360px) */}
      <section id="weblinks" className="pt-[40px] pb-[40px]">
        <div className="max-w-[1360px] mx-auto px-[15px] sm:px-[30px]">
          {/* uk-grid, uk-width-1-2@m = 2 cols */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
            {/* Left: RIA stamp — uk-visible@m, positioned absolute */}
            <div className="hidden md:flex items-center justify-center">
              <Image
                src="/images/ria-stamp.png"
                alt="RIA Stamp"
                width={550}
                height={550}
                className="w-full max-w-[550px]"
              />
            </div>

            {/* Right: weblinks */}
            <div>
              {/* uk-heading-small = Playfair 700 44px/1.2 */}
              <h2 className="font-heading font-bold text-[44px] leading-[1.2] text-[#0d1724] text-center md:text-left">
                Weblinks
              </h2>

              {/* uk-margin-large = mt 40px. uk-grid uk-child-width-1-2@s = 2 cols */}
              <div className="mt-[40px] grid grid-cols-1 sm:grid-cols-2 gap-[30px] text-center md:text-left">
                {weblinks.map((group, i) => (
                  <div key={i}>
                    {/* uk-grid-medium = 30px gap between icon and text */}
                    <div className="flex items-start gap-[15px] justify-center md:justify-start">
                      <Image
                        src={group.icon}
                        alt=""
                        width={40}
                        height={40}
                        className="w-[40px] h-[40px] flex-shrink-0"
                      />
                      <div>
                        {/* uk-h5 uk-margin-top = 14px, lh 1.4, fw 700, uppercase, mt 20px */}
                        <h3 className="font-bold text-[14px] leading-[1.4] uppercase text-[#0d1724] mt-[10px] mb-0">
                          {group.title}
                        </h3>
                        {/* uk-margin-small-top = mt 10px */}
                        <ul className="mt-[10px] space-y-[5px]">
                          {group.links.map((link) => (
                            <li key={link.name}>
                              <a
                                href={link.url}
                                target="_blank"
                                rel="noreferrer"
                                className="text-[14px] leading-[24px] text-[#0d1724] hover:text-[#c32230] hover:underline"
                              >
                                {link.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer — uk-section-default uk-section uk-padding-remove-top, uk-container (1200px) */}
      <section className="pb-[40px] md:pb-[70px]">
        <div className="max-w-[1200px] mx-auto px-[15px] sm:px-[30px]">
          {/* uk-text-small uk-margin = 12px/1.5, mt 20px */}
          <p className="text-[12px] leading-[1.5] text-[rgb(113,113,113)] mt-[20px]">
            The hyperlinks on this page are provided as a convenience only. OverRidge does not
            make any representations or warranties as to the accuracy, timeliness, suitability,
            completeness, or relevance of any information prepared by any unaffiliated third
            party, whether directly or indirectly linked to herein and takes no responsibility
            for such content. All such information is provided solely for convenience,
            educational, and informational purposes only. Third-party may collect information,
            including personal information relating to a user&apos;s online activities over time and
            across different websites and other online services. OverRidge does not control a
            third-party&apos;s collection or use of personal information or tracking technologies.
            Access to financial planning applications, calculators, or similar interactive
            devices do not serve the receipt of, or a substitute for, personalized individual
            advice from OverRidge, or from any investment professional.
          </p>
        </div>
      </section>

      {/* FAQ — uk-section-secondary (#0d1724) uk-section uk-section-large (140px padding @960+), uk-container-large (1360px) */}
      <section id="faq" className="bg-[#0d1724] text-white pt-[70px] pb-[70px] md:pt-[140px] md:pb-[140px]">
        <div className="max-w-[1360px] mx-auto px-[15px] sm:px-[30px]">
          {/* uk-margin-xlarge = mb 70px */}
          <div className="mb-[70px]">
            {/* uk-h3 uk-font-tertiary uk-margin-small = Homemade Apple, mb 10px */}
            <div className="font-tertiary text-[28px] leading-[1.4] text-center mb-[10px]">
              Frequently Asked Questions
            </div>
            {/* uk-heading-small = Playfair 700 44px/1.2, max-w 840px centered */}
            <h2 className="font-heading font-bold text-[44px] leading-[1.2] text-center mt-0 max-w-[840px] mx-auto">
              FAQ
            </h2>

            {/* Accordion */}
            <div className="mt-[40px] space-y-0">
              {faqs.map((faq, i) => (
                <div key={i} className="border-t border-white/20">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full text-left py-[15px] flex items-center justify-between hover:text-[#717171] transition-colors"
                  >
                    {/* uk-accordion-title = Montserrat 700 19px/1.4 uppercase, color #fff in secondary section */}
                    <span className="font-bold text-[19px] leading-[1.4] uppercase pr-4">
                      {faq.question}
                    </span>
                    {/* Plus/X icon in #c32230 */}
                    <span className="flex-shrink-0 w-[1.4em] h-[1.4em] flex items-center justify-center">
                      {openFaq === i ? (
                        <svg width="16" height="16" viewBox="0 0 16 16">
                          <path fill="#C32230" d="M15.52 1.9L14.1.48 8 6.59 1.9.48.48 1.9 6.59 8 .48 14.1l1.42 1.42L8 9.41l6.1 6.11 1.42-1.42L9.41 8l6.11-6.1z" />
                        </svg>
                      ) : (
                        <svg width="16" height="16" viewBox="0 0 16 16">
                          <path fill="#C32230" d="M15.5 7H9V.5H7V7H.5v2H7v6.5h2V9h6.5V7z" />
                        </svg>
                      )}
                    </span>
                  </button>
                  {/* uk-accordion-content = mt 20px */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openFaq === i ? "max-h-[500px] pb-[20px]" : "max-h-0"
                    }`}
                  >
                    <div className="mt-[20px]">
                      <p className="text-[14px] leading-[24px] text-white/80">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
              {/* Bottom border on last item */}
              <div className="border-t border-white/20" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
