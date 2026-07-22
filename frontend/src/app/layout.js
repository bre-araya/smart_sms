import "./globals.css";
import Header from "@/components/Header";
import { AuthProvider } from "@/context/AuthContext";

export const metadata = {
  title: "Smart SMS",
  description: "Smart school management system built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <Header />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
