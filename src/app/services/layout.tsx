import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services - OverRidge Wealth Advisors",
  description:
    "Explore our financial services including investment management, retirement planning, wealth management, and more at OverRidge Wealth Advisors.",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
