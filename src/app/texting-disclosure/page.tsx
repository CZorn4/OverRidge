export default function TextingDisclosurePage() {
  return (
    <div style={{ fontFamily: '"Montserrat", sans-serif' }}>
      <section className="pt-[140px] md:pt-[200px] pb-[70px]">
        <div className="max-w-[1200px] mx-auto px-[15px] sm:px-[30px]">
          <div
            className="text-[28px] leading-[39px] mb-[20px]"
            style={{ fontFamily: '"Homemade Apple", cursive', fontWeight: 400, color: "rgb(13, 23, 36)" }}
          >
            Texting Disclosure
          </div>
          <div className="space-y-[20px] text-[14px] leading-[24px]" style={{ color: "rgb(113, 113, 113)" }}>
            <p>
              Advisory services offered through Lee Johnson Capital Management, LLC d/b/a OverRidge Wealth Advisors, an SEC-registered investment adviser. Registration does not imply a certain level of skill or training. Insurance services provided in separate capacity as independent insurance agent.
            </p>
            <p>
              Trading instructions sent via text message may not be honored. Please contact my office for all buy/sell orders. Please be advised that communications regarding trades in your account are for informational purposes only. You should continue to rely on confirmations and statements received from the custodian(s) of your assets.
            </p>
            <p>
              The text of this communication is confidential and use by any person who is not the intended recipient is prohibited. Any person who receives this communication in error is requested to immediately destroy the text of this communication without copying or further dissemination. Your cooperation is appreciated.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
