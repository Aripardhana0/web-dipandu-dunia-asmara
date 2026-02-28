import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: "DIPANDU DUNIA ASMARA — Stand Up Comedy Show by Pandu Dunia",
  description:
    "DIPANDU DUNIA ASMARA, stand up comedy show terbaru dari Pandu Dunia. Satu malam, seribu tawa, satu cerita tentang cinta. Coming Soon 2026!",
  keywords: [
    "Pandu Dunia",
    "stand up comedy",
    "DIPANDU DUNIA ASMARA",
    "comedy show Indonesia",
    "tiket stand up comedy",
    "pandudunia",
  ],
  openGraph: {
    title: "DIPANDU DUNIA ASMARA — Stand Up Comedy Show",
    description:
      "Stand up comedy show terbaru dari Pandu Dunia. Satu malam, seribu tawa, satu cerita tentang cinta.",
    type: "website",
    images: ["/banner.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>
        {children}
        <script defer async src="https://megatix.co.id/js/widgets/megatix.js"></script>
        {/* Megatix redirect to #kota on close */}
        <script dangerouslySetInnerHTML={{
          __html: `
            // Listen for hash changes triggered by Megatix closing (empty or #/)
            window.addEventListener('hashchange', function(e) {
              const currentHash = window.location.hash;
              if (currentHash === '' || currentHash === '#' || currentHash === '#/') {
                e.preventDefault();
                // Redirect back to the #kota section when the widget is closed
                window.location.hash = '#kota';
              }
            }, false);

            // Also lock body scroll when megatix is open to prevent background scrolling
            const observer = new MutationObserver(function(mutations) {
              mutations.forEach(function(mutation) {
                mutation.addedNodes.forEach(function(node) {
                  if (node.nodeType === 1 && (node.tagName === 'IFRAME' || node.id.includes('megatix') || node.className.includes('megatix'))) {
                    document.body.style.overflow = 'hidden';
                  }
                });
                mutation.removedNodes.forEach(function(node) {
                  if (node.nodeType === 1 && (node.tagName === 'IFRAME' || node.id.includes('megatix') || node.className.includes('megatix'))) {
                    document.body.style.overflow = '';
                    // Backup check in case hashchange didn't fire properly
                    if (window.location.hash === '' || window.location.hash === '#/') {
                        window.location.hash = '#kota';
                    }
                  }
                });
              });
            });

            document.addEventListener('DOMContentLoaded', () => {
              observer.observe(document.body, { childList: true });
            });
          `
        }} />
      </body>
    </html>
  );
}
