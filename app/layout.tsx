import BootstrapClient from "@/components/BootstrapClient";
import type { Metadata } from "next";
import "@/styles/custom.scss";
import "@solana/wallet-adapter-react-ui/styles.css";
import { Toaster } from "react-hot-toast";

/**
 * Root layout, server side rendered
 */

export const metadata: Metadata = {
  title: "FLEXAR SSP Integration",
  description: "Sample integration of FLEXAR Solana Subscription Platform in a custom website",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body data-bs-theme="dark">
        <BootstrapClient />
        <div><Toaster position="bottom-left" /></div>
        {children}
      </body>
    </html>
  );
}
