import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - OverRidge Wealth Advisors",
  description:
    "Get in touch with OverRidge Wealth Advisors in Fort Worth, TX. Schedule a consultation or ask us a question.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
