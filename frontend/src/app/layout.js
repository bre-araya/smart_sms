import "./globals.css";

export const metadata = {
  title: "Smart SMS",
  description: "Smart school management system built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
