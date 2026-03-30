import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://joshimedical.com'),
  title: 'Joshi Medical Stores | Trusted Pharmacy in Dhad, Maharashtra',
  description: 'Joshi Medical Stores in Dhad provides a complete range of medicines and healthcare products with 4.7-star rated service. Visit us on Bazar Line Rd.',
  openGraph: {
    title: 'Joshi Medical Stores | Trusted Pharmacy in Dhad, Maharashtra',
    description: 'Joshi Medical Stores in Dhad provides a complete range of medicines and healthcare products with 4.7-star rated service. Visit us on Bazar Line Rd.',
    images: [{ url: '/images/hero.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', title: 'Joshi Medical Stores | Trusted Pharmacy in Dhad, Maharashtra' },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Pharmacy",
    "name": "Joshi Medical Stores",
    "image": "https://joshimedical.com/images/hero.jpg",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Bazar Line Rd, Dhad",
      "addressLocality": "Dhad",
      "addressRegion": "Maharashtra",
      "postalCode": "443106",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "20.2520", // Generalized coordinates for Dhad
      "longitude": "76.1030"
    },
    "url": "https://joshimedical.com",
    "telephone": "+919421306535",
    "ratingValue": "4.7",
    "reviewCount": "6"
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
