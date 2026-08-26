import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://epoch-apush-learning-lab.vercel.app"),
  title: "EPOCH｜APUSH 美国史学习实验室",
  description: "通过 APUSH Codenames、历史立场推演、时间线排序与史料引文人物挑战，训练美国史概念关联、情境化与史料分析。",
  openGraph: {
    title: "EPOCH｜APUSH 美国史学习实验室",
    description: "四种学习路径训练 AP 美国史概念关联、情境化、年代框架与史料人物辨识。",
    images: [{ url: "/og-image", width: 1200, height: 630, alt: "EPOCH APUSH Learning Lab" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "EPOCH｜APUSH 美国史学习实验室",
    description: "APUSH Codenames、历史立场推演、时间线排序与史料引文人物挑战。",
    images: ["/og-image"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
