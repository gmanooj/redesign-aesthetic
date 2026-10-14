import { Cormorant_Infant, Mulish } from "next/font/google";
import "./globals.css";
import "./fluid-engine.css";

const cormorant = Cormorant_Infant({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-heading",
});

const mulish = Mulish({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
});

export const metadata = {
  title: "Counseling in Newbury Park, CA | Conejo Valley Family Counseling",
  description: "Counseling for adults, couples, and children in Newbury & across CA.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${mulish.variable}`}>
      <body className="bg-[#FBF9F4] text-[#2B2B2B] font-[family-name:var(--font-body)] antialiased">
        {children}
      </body>
    </html>
  );
}
