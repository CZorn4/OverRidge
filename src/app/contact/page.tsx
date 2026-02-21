"use client";

import { useState } from "react";
import Image from "next/image";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    stage: "",
    howDidYouHear: "Referral",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! We will be in touch soon.");
  };

  return (
    <div style={{ fontFamily: '"Montserrat", sans-serif' }}>
      {/* Form Section — uk-section-default uk-section uk-section-large uk-padding-remove-bottom, uk-container-large (1360px) */}
      <section className="pt-[140px] md:pt-[200px] pb-0">
        <div className="max-w-[1360px] mx-auto px-[15px] sm:px-[30px]">
          {/* uk-h3 uk-font-tertiary uk-margin-small uk-text-center = Homemade Apple, mb 10px */}
          <div className="font-tertiary text-[28px] leading-[1.4] text-center mb-[10px]">
            Let&apos;s begin
          </div>
          {/* uk-h1 uk-margin-remove-top uk-width-2xlarge uk-margin-auto uk-text-center = Playfair 700 42px, max-w 840px */}
          <h1 className="font-heading font-bold text-[42px] leading-[50px] text-[#0d1724] text-center mt-0 max-w-[840px] mx-auto">
            Complimentary &ldquo;Get Acquainted&rdquo; Meeting
          </h1>

          {/* uk-panel uk-margin uk-text-center */}
          <div className="mt-[20px] text-center text-[14px] leading-[24px] text-[rgb(113,113,113)]">
            <p>
              We offer a <strong className="text-[#0d1724]">complimentary &ldquo;Get Acquainted&rdquo; meeting</strong> to
              describe our services and to see if our services are right for you. Please complete
              the form below.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="max-w-[600px] mx-auto mt-[40px] space-y-[20px]">
            <div>
              <label htmlFor="fullName" className="block text-[14px] leading-[24px] font-bold text-[#0d1724] mb-[5px]">
                Full name <span className="text-[#c32230]">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                required
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="w-full px-[15px] py-[10px] border border-gray-300 text-[14px] focus:ring-2 focus:ring-[#c32230] focus:border-transparent outline-none"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-[14px] leading-[24px] font-bold text-[#0d1724] mb-[5px]">
                Email <span className="text-[#c32230]">*</span>
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-[15px] py-[10px] border border-gray-300 text-[14px] focus:ring-2 focus:ring-[#c32230] focus:border-transparent outline-none"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-[14px] leading-[24px] font-bold text-[#0d1724] mb-[5px]">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-[15px] py-[10px] border border-gray-300 text-[14px] focus:ring-2 focus:ring-[#c32230] focus:border-transparent outline-none"
              />
            </div>

            <div className="h-[10px]" />

            <div>
              <label className="block text-[14px] leading-[24px] font-bold text-[#0d1724] mb-[5px]">
                Stage <span className="text-[#c32230]">*</span>
              </label>
              <div className="flex flex-wrap gap-[20px]">
                {["Pre-Retirement", "Retirement", "Business Owner", "Other"].map((stage) => (
                  <label key={stage} className="flex items-center gap-[8px] cursor-pointer text-[14px] text-[rgb(113,113,113)]">
                    <input
                      type="radio"
                      name="stage"
                      value={stage}
                      required
                      checked={formData.stage === stage}
                      onChange={(e) => setFormData({ ...formData, stage: e.target.value })}
                      className="accent-[#c32230]"
                    />
                    {stage}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label htmlFor="howDidYouHear" className="block text-[14px] leading-[24px] font-bold text-[#0d1724] mb-[5px]">
                How did you hear about us? <span className="text-[#c32230]">*</span>
              </label>
              <select
                id="howDidYouHear"
                required
                value={formData.howDidYouHear}
                onChange={(e) => setFormData({ ...formData, howDidYouHear: e.target.value })}
                className="w-full px-[15px] py-[10px] border border-gray-300 text-[14px] focus:ring-2 focus:ring-[#c32230] focus:border-transparent outline-none"
              >
                <option value="Referral">Referral</option>
                <option value="Web Search">Web Search</option>
                <option value="Advertisement">Advertisement</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="h-[10px]" />

            <div>
              <label htmlFor="message" className="block text-[14px] leading-[24px] font-bold text-[#0d1724] mb-[5px]">
                Message <span className="text-[#c32230]">*</span>
              </label>
              <textarea
                id="message"
                required
                rows={8}
                placeholder="Enter any comments you may have..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-[15px] py-[10px] border border-gray-300 text-[14px] focus:ring-2 focus:ring-[#c32230] focus:border-transparent outline-none resize-y"
              />
            </div>

            {/* Submit — cf-btn style: border-radius 3px, padding 13px 20px, bg #4585f4, color #fff, font-size 16px */}
            <button
              type="submit"
              className="px-[20px] py-[13px] text-[16px] font-bold text-white rounded-[3px]"
              style={{ backgroundColor: "#4585f4" }}
            >
              Submit
            </button>
          </form>
        </div>
      </section>

      {/* Contact Info + Map — uk-section-default, bg image cover, uk-height-viewport, uk-container-xlarge (1600px), uk-grid-collapse */}
      <section className="relative min-h-screen mt-[70px]">
        <Image
          src="/images/contact.jpg"
          alt=""
          fill
          className="object-cover"
        />
        <div className="relative z-10">
          <div className="max-w-[1600px] mx-auto">
            {/* uk-grid uk-grid-collapse = no gap, 2 cols */}
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Contact Info — uk-tile-default uk-tile, left side on desktop but visually second (map is uk-flex-first) */}
              <div className="bg-white px-[15px] sm:px-[30px] py-[40px] flex items-center md:order-2">
                <div className="w-full">
                  {/* Logo */}
                  <div className="text-center mt-[20px]">
                    <Image
                      src="/images/logo-mobile.png"
                      alt="OverRidge Wealth Advisors"
                      width={200}
                      height={38}
                      className="mx-auto"
                    />
                  </div>

                  {/* uk-margin-xlarge uk-width-large uk-margin-auto = mt 70px, max-w 450px, centered */}
                  {/* uk-grid uk-child-width-1-2@s uk-grid-large = 2 cols, 40px gap */}
                  <div className="mt-[70px] max-w-[450px] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-[40px] text-center sm:text-left">
                    <div>
                      {/* uk-h5 = Montserrat 700 14px/1.4 uppercase */}
                      <h2 className="font-bold text-[14px] leading-[1.4] uppercase text-[#0d1724] mb-0">
                        Address
                      </h2>
                      {/* uk-margin-small-top = mt 10px */}
                      <div className="mt-[10px] text-[14px] leading-[24px] text-[rgb(113,113,113)]">
                        6300 Ridglea Place,<br />
                        Suite 1020<br />
                        Fort Worth, TX 76116
                      </div>
                    </div>

                    <div>
                      <h2 className="font-bold text-[14px] leading-[1.4] uppercase text-[#0d1724] mb-0">
                        E-Mail Address
                      </h2>
                      <div className="mt-[10px] text-[14px] leading-[24px]">
                        <a href="mailto:info@overridge.com" className="text-[rgb(113,113,113)] hover:text-[#c32230]">
                          info@overridge.com
                        </a>
                      </div>
                    </div>

                    <div>
                      <h2 className="font-bold text-[14px] leading-[1.4] uppercase text-[#0d1724] mb-0">
                        Phone Number
                      </h2>
                      <div className="mt-[10px] text-[14px] leading-[24px]">
                        <a href="tel:8177381451" className="text-[rgb(113,113,113)] hover:text-[#c32230]">
                          (817) 738-1451
                        </a>
                      </div>
                    </div>

                    <div>
                      <h2 className="font-bold text-[14px] leading-[1.4] uppercase text-[#0d1724] mb-0">
                        Socials
                      </h2>
                      <div className="mt-[10px] flex gap-[30px] justify-center sm:justify-start">
                        <a
                          href="https://www.facebook.com/overridgewealth/"
                          target="_blank"
                          rel="noreferrer"
                          className="text-[#0d1724] hover:text-[#c32230]"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                          </svg>
                        </a>
                        <a
                          href="https://www.linkedin.com/company/overridge-wealth-advisors/"
                          target="_blank"
                          rel="noreferrer"
                          className="text-[#0d1724] hover:text-[#c32230]"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Map — uk-tile-default uk-tile uk-padding-remove, uk-flex-first@m */}
              <div className="min-h-[500px] md:min-h-0 md:order-1">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6713.101763456586!2d-97.416997!3d32.72456!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e732001844449%3A0xc0c8163b97d44fbd!2sOverRidge%20Wealth%20Advisors!5e0!3m2!1sen!2sus!4v1705207758464!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "500px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="OverRidge Wealth Advisors Location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
