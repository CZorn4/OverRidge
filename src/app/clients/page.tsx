import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Client Access - OverRidge Wealth Advisors",
  description: "Access your OverRidge Wealth Advisors client portals.",
};

export default function ClientsPage() {
  return (
    <div style={{ fontFamily: '"Montserrat", sans-serif' }}>
      {/* Hero — uk-height-viewport offset-bottom:20, bg cover, overlay rgba(0,0,0,0.55) */}
      <section className="relative min-h-[80vh] flex items-center justify-center text-white overflow-hidden">
        <Image
          src="/images/tree.jpg"
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(0, 0, 0, 0.55)" }} />
        <div className="relative z-10 text-center px-6 max-w-[1360px] mx-auto">
          {/* uk-h3 uk-font-tertiary uk-margin-small = Homemade Apple, mb 10px */}
          <div className="font-tertiary text-[28px] leading-[1.4]">Client Access</div>
        </div>
        {/* Side label */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden xl:block">
          <div className="[writing-mode:vertical-rl] rotate-180 text-[12px] tracking-wider text-white/70">Independent RIA</div>
        </div>
      </section>

      {/* Portal Cards — uk-section-default uk-section (70px padding), uk-container (1200px) */}
      <section className="pt-[40px] pb-[40px] md:pt-[70px] md:pb-[70px]">
        <div className="max-w-[1200px] mx-auto px-[15px] sm:px-[30px]">
          {/* uk-grid uk-width-1-2@m = 2 cols */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
            {/* Client Portal (eMoney/Schwab) */}
            <div className="text-center">
              {/* h4 uk-text-primary = Montserrat 700 19px/1.4 uppercase #c32230 */}
              <h4 className="font-bold text-[19px] leading-[1.4] uppercase text-[#c32230] mb-[20px]">
                Client Portal
              </h4>
              <hr className="border-gray-200 mb-[20px]" />
              {/* uk-margin uk-text-center = mt 20px, partner logo */}
              <div className="mt-[20px]">
                <Image
                  src="/images/Emoney.webp"
                  alt="eMoney"
                  width={188}
                  height={40}
                  className="mx-auto h-10 w-auto"
                />
              </div>
              {/* uk-button uk-button-secondary = bg #0d1724, Montserrat 700 12px uppercase, 42px lh, px 20px */}
              <div className="mt-[20px]">
                <a
                  href="https://wealth.emaplan.com/ema/SignIn?ema%2ftriadadvisors%2fleejohnsoncm"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-[10px] px-[20px] text-[12px] leading-[42px] font-bold uppercase tracking-wider bg-[#0d1724] text-white hover:bg-[#1a2a3a] transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  Login
                </a>
              </div>
            </div>

            {/* Account Access (eMoney) */}
            <div className="text-center">
              <h4 className="font-bold text-[19px] leading-[1.4] uppercase text-[#c32230] mb-[20px]">
                Account Access
              </h4>
              <hr className="border-gray-200 mb-[20px]" />
              <div className="mt-[20px]">
                <Image
                  src="/images/CharlesSchwab.webp"
                  alt="Charles Schwab"
                  width={188}
                  height={40}
                  className="mx-auto"
                />
              </div>
              <div className="mt-[20px]">
                <a
                  href="https://www.schwab.com/client-home"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-[10px] text-[14px] leading-[24px] text-[#0d1724] hover:text-[#c32230] transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  LOGIN
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
