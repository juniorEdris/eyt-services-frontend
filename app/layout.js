import { TWMaterialComponents } from "@/lib/twMaterialAssets";
import "./globals.css";
import { AppHeader } from "@/components/primary/header";

export const metadata = {
  title: "EYT | Explore Your Vision",
  description:
    "Unleash your creative potential and explore the power of imagination with our comprehensive guide. Learn how to nurture your creative mindset, overcome blocks, embrace different perspectives, and cultivate your unique vision. Join us on this transformative journey today!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`overflow-x-hidden`}>
        <section className="relative max-w-[1480px] m-auto">
          <TWMaterialComponents>
            <AppHeader />
            <section className="overflow-x-hidden">{children}</section>
          </TWMaterialComponents>
        </section>
      </body>
    </html>
  );
}
