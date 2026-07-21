import "./globals.css";
import Header from "@/components/Header";

export const metadata = {
  title: "Smart SMS",
  description: "Smart school management system built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
