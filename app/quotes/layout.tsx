import type { Metadata } from "next";
import "./quotes.css";

export const metadata: Metadata = {
  title: "APUSH Quote Challenge | EPOCH",
  description: "通过 150 条史料引文识别 50 位美国史核心人物，并理解人物、时代与主张之间的联系。",
  openGraph: {
    title: "APUSH Quote Challenge | EPOCH",
    description: "Guess the author. Understand the era. Master APUSH.",
    images: [{ url: "/quote-challenge-og.png", width: 1200, height: 630 }],
  },
};

export default function QuotesLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
