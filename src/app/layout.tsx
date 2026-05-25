import type { Metadata, Viewport } from "next";
import { Noto_Sans_JP } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
  themeColor: "#f97316",
};

export const metadata: Metadata = {
  title: "建設重機資格ナビ | 重機オペレーター資格学習サイト",
  description: "フォークリフト・玉掛け・移動式クレーン・車両系建設機械など、建設業界の重機資格取得に必要な学習動画をまとめたe-learningサイトです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${notoSansJP.variable} antialiased font-sans`} suppressHydrationWarning={true}>
        <div className="min-h-screen bg-slate-50">{children}</div>
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
