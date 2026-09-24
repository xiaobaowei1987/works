import { SiteHeader } from "./_components/SiteHeader";

export default function Home() {
  return (
    <main id="top" className="home-simple">
      <SiteHeader />
      <section className="home-artwork" aria-label="首页作品">
        <img src="/works/illustration/warmth.jpg" alt="插画作品《温暖》" />
      </section>
      <p className="home-copyright">© Xiao Baowei. All rights reserved.</p>
    </main>
  );
}
