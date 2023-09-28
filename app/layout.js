import Navbar from "../components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Sample Next Project",
  description: "Website to learn nextjs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-200">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
