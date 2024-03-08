import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Provider from "@/utils/Provider";
import { Image } from "@nextui-org/react";
import StarCanvas from "@/components/Stars";

const inter = Poppins({
    subsets: ["latin"],
    preload: true,
    adjustFontFallback: true,
    weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
    metadataBase: new URL("https://portfolio.varunrana.info"),
    title: "Varun Rana - Software Engineer Portfolio",
    description:
        "Varun Rana, a dedicated software engineer currently contributing to Mtechzilla, passionate about crafting innovative solutions and pushing the boundaries of technology.",
    openGraph: {
        title: "Varun Rana - Software Engineer Portfolio",
        description:
            "Varun Rana, a dedicated software engineer currently contributing to Mtechzilla, passionate about crafting innovative solutions and pushing the boundaries of technology.",
        url: "https://portfolio.varunrana.info",
        images: [{ url: "/portfolio.webp", width: 1200, height: 630 }],
        type: "website",
        phoneNumbers: "7827304056",
        countryName: "India",
        emails: "varunrana829@gmail.com",
        locale: "en_US",
    },
    alternates: { canonical: "https://portfolio.varunrana.info" },
    verification: {
        google: "XwwUeh1MGhBR6D6FAfzfdrTo_hKk8CHYSyJJNlYefG4",
        other: {
            me: ["varunrana829@gmail.com", "https://portfolio.varunrana.info"],
        },
    },
    category: "technology",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body
                className={` ${inter.className} w-full h-full antialiased selection:bg-purple-500/90 bg-[#09050f]`}
            >
                <div className="fixed block opacity-70 top-[15%] -right-[60%] sm:-top-[45%] sm:-right-[60%] 2xl:-top-[60%] 2xl:-right-[35%] z-0 rotate-180 sm:scale-y-105 pointer-events-none">
                    <Image
                        src="/docs-right.png"
                        height="100%"
                        className="relative z-0 opacity-0 shadow-black/5 data-[loaded=true]:opacity-100 shadow-none transition-transform-opacity motion-reduce:transition-none !duration-300 rounded-large pointer-events-none"
                        alt="docs right background"
                        data-loaded="true"
                    />
                </div>
                <svg
                    className="pointer-events-none fixed isolate z-50 opacity-70 mix-blend-soft-light"
                    width="100%"
                    height="100%"
                >
                    <filter id="pedroduarteisalegend">
                        <feTurbulence
                            type="fractalNoise"
                            baseFrequency="0.80"
                            numOctaves="4"
                            stitchTiles="stitch"
                        ></feTurbulence>
                    </filter>
                    <rect
                        width="100%"
                        height="100%"
                        filter="url(#pedroduarteisalegend)"
                    ></rect>
                </svg>

                <StarCanvas />
                <Provider>{children}</Provider>
            </body>
        </html>
    );
}
