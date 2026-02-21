import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources - OverRidge Wealth Advisors",
  description:
    "Access financial news, research tools, and frequently asked questions from OverRidge Wealth Advisors.",
};

export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
