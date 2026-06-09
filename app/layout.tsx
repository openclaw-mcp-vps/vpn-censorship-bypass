import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "StegaVPN — Steganographic VPN for Censored Regions",
  description: "Bypass government censorship with steganographic VPN technology. Disguise your traffic as normal HTTPS browsing. Built for journalists, activists, and users in restricted regions."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="400f1b35-5bdf-463f-b73c-ea133913cbd5"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
