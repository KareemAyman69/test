
import type { Metadata } from "next";
import "./globals.css";
import { UserProvider } from '@auth0/nextjs-auth0/client';

export const metadata: Metadata = {
  title: "naQdi",
  description: "Enjoy fast and hassle-free transactions for all your needs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <UserProvider>
        <body>{children}</body>
      </UserProvider>
    </html>
  );
}
