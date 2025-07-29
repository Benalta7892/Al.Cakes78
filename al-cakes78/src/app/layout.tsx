import type { Metadata } from "next";
import { Geist, Geist_Mono, Domine } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import ToasterProvider from "@/components/ToastPreview/ToastPreview";
import "aos/dist/aos.css";
import AOSProvider from "@/components/AOSProvider/AOSProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const domine = Domine({
  variable: "--font-domine",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AL.Cakes - Entremets faits maison à Versailles",
  description:
    "Découvrez les entremets faits maison par la cheffe, préparés avec des ingrédients soigneusement sélectionnés. Explorez ses créations uniques et contactez-la facilement pour commandes ou informations. ",
  openGraph: {
    title: "AL.Cakes - Entremets faits maison à Versailles",
    description:
      "Découvrez les entremets faits maison par la cheffe, préparés avec des ingrédients soigneusement sélectionnés. Explorez ses créations uniques et contactez-la facilement pour commandes ou informations.",
    url: "https://al-cakes78.vercel.app/",
    siteName: "AL.Cakes",
    images: [
      {
        url: "/images/Logo.svg",
        width: 1200,
        height: 630,
        alt: "AL.Cakes - Entremets faits maison à Versailles",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${domine.variable} antialiased`}>
        <AOSProvider>
          <Header />

          <ToasterProvider />

          <main>{children}</main>

          <Footer />
        </AOSProvider>
      </body>
    </html>
  );
}
