import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      {/* Top footer bar - 3 separated tile boxes */}
      <div className="bg-white" style={{ fontFamily: '"Montserrat", sans-serif' }}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[2px]">
            {/* Client Login */}
            <div className="bg-[#f5f5f5] py-8 flex items-center justify-center">
              <Link href="/clients" className="text-[14px] leading-[24px] uppercase tracking-[0.2em] text-[rgb(13,23,36)] hover:text-primary transition-colors">
                Client Login
              </Link>
            </div>

            {/* Contact icons */}
            <div className="bg-[#f5f5f5] py-8 flex items-center justify-center gap-4">
              <a
                href="tel:8177381451"
                className="w-10 h-10 rounded-full border border-gray-400 text-gray-400 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </a>
              <a
                href="mailto:info@overridge.com"
                className="w-10 h-10 rounded-full border border-gray-400 text-gray-400 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
              <a
                href="https://www.google.com/maps/place/OverRidge+Wealth+Advisors/@32.72456,-97.416997,16z"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-gray-400 text-gray-400 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </a>
            </div>

            {/* Disclosure links - 2x2 grid */}
            <div className="bg-[#f5f5f5] py-8 flex items-center justify-center">
              <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-center">
                <a href="/images/2026 Form CRS.pdf" target="_blank" className="text-[14px] leading-[24px] uppercase tracking-[0.1em] text-[rgb(13,23,36)] hover:text-primary transition-colors">
                  Form CRS
                </a>
                <Link href="/disclaimers" className="text-[14px] leading-[24px] uppercase tracking-[0.1em] text-[rgb(13,23,36)] hover:text-primary transition-colors">
                  Disclosure
                </Link>
                <Link href="/texting-disclosure" className="text-[14px] leading-[24px] uppercase tracking-[0.1em] text-[rgb(13,23,36)] hover:text-primary transition-colors">
                  Texting Disclosure
                </Link>
                <a href="/images/2026ADV.pdf" target="_blank" className="text-[14px] leading-[24px] uppercase tracking-[0.1em] text-[rgb(13,23,36)] hover:text-primary transition-colors">
                  ADV
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom footer */}
      <div className="bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 pt-4 pb-8">
          <hr className="mb-6" />
          <div className="text-center mb-2">
            <Image
              src="/images/logo-mobile.png"
              alt="OverRidge Wealth Advisors"
              width={250}
              height={48}
              className="mx-auto h-10 w-auto"
            />
          </div>
          <div className="text-[12px] leading-[18px] text-[rgb(113,113,113)] text-center mx-auto space-y-2" style={{ fontFamily: '"Montserrat", sans-serif' }}>
            <p>
              Investment Advisory Services offered through Lee Johnson Capital Management, LLC d/b/a
              OverRidge Wealth Advisors (&ldquo;OverRidge&rdquo;). Securities brokerage services offered through
              Charles Schwab &amp; Co., Inc., member FINRA/SIPC, an unaffiliated broker-dealer. To Check
              Firm or Individual Backgrounds please go to{" "}
              <a
                href="http://adviserinfo.sec.gov/"
                target="_blank"
                rel="noreferrer"
                className="text-primary hover:underline"
              >
                http://adviserinfo.sec.gov.
              </a>
            </p>
            <p>
              These materials have been independently produced by OverRidge. OverRidge is independent
              of, and has no affiliation with, Charles Schwab &amp; Co., Inc. or any of its affiliates
              (&ldquo;Schwab&rdquo;). Schwab is a registered broker-dealer and member SIPC. Schwab has not
              created, supplied, licensed, endorsed, or otherwise sanctioned these materials nor has
              Schwab independently verified any of the information in them. OverRidge provides you with
              investment advice, while Schwab maintains custody of your assets in a brokerage account
              and will effect transactions for your account on our instruction.
            </p>
            <p>
              OverRidge has selected Charles Schwab &amp; Co., Inc., as primary custodian for our
              clients&apos; accounts.
            </p>
            <p>
              Not all OverRidge advisory services will be appropriate or necessary for all clients, and
              the potential value and benefit of OverRidge&apos;s services will vary based upon a variety of
              factors, including the client&apos;s individual investment, financial, and tax circumstances.
              Neither personalized nor specialized services, nor any professional alliances or
              partnerships, should be construed as a guarantee of client satisfaction or any particular
              outcome. Protected marks used with permission of rightsholders and should not be construed
              as an endorsement of OverRidge by the parties shown. Past performance does not guarantee
              future results. All investing comes with risk, including risk of loss.
            </p>
            <p className="mt-3">
              Copyright &copy; {new Date().getFullYear()} OverRidge Wealth Advisors | Powered by{" "}
              <a
                href="http://www.advisorflex.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                AdvisorFlex&reg;
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
