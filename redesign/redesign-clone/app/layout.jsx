import { Cormorant_Infant, Mulish } from "next/font/google";
import localFont from "next/font/local";
import { SITE_URL } from "@/lib/site";
import SmoothScroll from "@/components/common/SmoothScroll";
import ScrollToTop from "@/components/common/ScrollToTop";
import "./globals.css";
import "./fluid-engine.css";
import "lenis/dist/lenis.css";

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

const weddingDay = localFont({
  src: "../public/WeddingdayPersonalUseRegular-1Gvo0.ttf",
  variable: "--font-wedding-day",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Anxiety & Trauma Therapist in Santa Monica | Dr. Maya Reynolds, PsyD",
  description: "Licensed clinical psychologist in Santa Monica, CA offering anxiety, trauma, EMDR and burnout therapy for adults. In-person sessions and secure California telehealth.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Anxiety & Trauma Therapist in Santa Monica | Dr. Maya Reynolds, PsyD",
    description: "Licensed clinical psychologist in Santa Monica, CA offering anxiety, trauma, EMDR and burnout therapy for adults. In-person sessions and secure California telehealth.",
    type: "website",
    url: SITE_URL,
    siteName: "Dr. Maya Reynolds, PsyD",
    images: [
      {
        url: `${SITE_URL}/og-portrait-only.jpg`,
        width: 800,
        height: 800,
        type: "image/jpeg",
        alt: "Dr. Maya Reynolds, PsyD - Therapy in Santa Monica, CA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anxiety & Trauma Therapist in Santa Monica | Dr. Maya Reynolds, PsyD",
    description: "Licensed clinical psychologist in Santa Monica, CA offering anxiety, trauma, EMDR and burnout therapy for adults. In-person sessions and secure California telehealth.",
    images: [
      {
        url: `${SITE_URL}/og-portrait-only.jpg`,
        width: 800,
        height: 800,
        type: "image/jpeg",
        alt: "Dr. Maya Reynolds, PsyD - Therapy in Santa Monica, CA",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["MedicalBusiness", "LocalBusiness"],
      "@id": `${SITE_URL}/#practice`,
      "name": "Dr. Maya Reynolds, PsyD",
      "url": SITE_URL,
      "image": `${SITE_URL}/images/profile/dr-maya-reynolds.png`,
      "description": "Licensed clinical psychologist in Santa Monica, CA offering anxiety, trauma, EMDR and burnout therapy for adults. In-person sessions and secure California telehealth.",
      "medicalSpecialty": ["ClinicalPsychology", "Psychiatric"],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "123th Street 45 W",
        "addressLocality": "Santa Monica",
        "addressRegion": "CA",
        "postalCode": "90401",
        "addressCountry": "US"
      },
      "areaServed": [
        { "@type": "City", "name": "Santa Monica" },
        { "@type": "State", "name": "California" }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Where is your Santa Monica office, and do you offer telehealth?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "My office is at 123th Street 45 W, Santa Monica, CA 90401, a quiet, private space with natural light and an uncluttered feel. I also offer secure telehealth for clients located in California."
          }
        },
        {
          "@type": "Question",
          "name": "Who do you typically work with?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Adults who feel overwhelmed by anxiety, stress, or the lingering effects of past experiences. Many are high-achieving, thoughtful entrepreneurs, creatives, and professionals who feel exhausted or stuck in overthinking."
          }
        },
        {
          "@type": "Question",
          "name": "What is a therapy session with you like?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Warm, collaborative, and grounded. Sessions are structured enough to feel supportive, with space for reflection and depth, using CBT, EMDR, mindfulness-based practices, and body-oriented techniques."
          }
        },
        {
          "@type": "Question",
          "name": "How do you approach trauma therapy and EMDR?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "I work with single-incident trauma and long-standing patterns from childhood, relationships, or chronic stress, paced carefully with an emphasis on safety and stabilization."
          }
        },
        {
          "@type": "Question",
          "name": "How do we get started?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Reach out through the consultation booking form. Whether you choose in-person sessions in Santa Monica or telehealth in California, we can see together whether I'm a good fit."
          }
        }
      ]
    }
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${mulish.variable} ${weddingDay.variable}`}>
      <head>
        <meta property="og:title" content="Anxiety & Trauma Therapist in Santa Monica | Dr. Maya Reynolds, PsyD" />
        <meta property="og:description" content="Licensed clinical psychologist in Santa Monica, CA offering anxiety, trauma, EMDR and burnout therapy for adults. In-person sessions and secure California telehealth." />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Dr. Maya Reynolds, PsyD" />
        <meta property="og:image" content={`${SITE_URL}/og-portrait-only.jpg`} />
        <meta property="og:image:secure_url" content={`${SITE_URL}/og-portrait-only.jpg`} />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="800" />
        <meta property="og:image:alt" content="Dr. Maya Reynolds, PsyD - Therapy in Santa Monica, CA" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Anxiety & Trauma Therapist in Santa Monica | Dr. Maya Reynolds, PsyD" />
        <meta name="twitter:description" content="Licensed clinical psychologist in Santa Monica, CA offering anxiety, trauma, EMDR and burnout therapy for adults. In-person sessions and secure California telehealth." />
        <meta name="twitter:image" content={`${SITE_URL}/og-portrait-only.jpg`} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof window !== 'undefined') {
                if ('scrollRestoration' in history) {
                  history.scrollRestoration = 'manual';
                }
                window.scrollTo(0, 0);
              }
            `,
          }}
        />
      </head>
      <body className="bg-surface text-ink">
        <SmoothScroll>
          {children}
          <ScrollToTop />
        </SmoothScroll>
      </body>
    </html>
  );
}
