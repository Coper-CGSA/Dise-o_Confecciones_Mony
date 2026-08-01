import { SiteHeader } from "@/components/site/site-header";
import { Hero } from "@/components/site/hero";
import { Story } from "@/components/site/story";
import { Classes } from "@/components/site/classes";
import { Contact } from "@/components/site/contact";
import { SiteFooter } from "@/components/site/site-footer";
import { WhatsAppFloat } from "@/components/site/whatsapp-float";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Story />
        <Classes />
        <Contact />
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </div>
  );
}
