import { SiteHeader } from "./_components/SiteHeader";

const entrances = [
  ["01", "插画", "Illustration", "/illustration", "/works/illustration/protection.jpg"],
  ["02", "琐碎诗", "Fragments of Poetry", "/poems", "/works/poems/poem-123.jpg"],
  ["03", "绘本与书", "Books & Stories", "/books", "/works/books/dictionary/65.jpg"],
  ["04", "动画", "Moving Image", "/films", "/works/illustration/untitled-88.jpg"],
  ["05", "关于", "About the Artist", "/about", "/works/illustration/dialogue.jpg"],
] as const;

export default function Home() {
  return (
    <main id="top" className="home">
      <SiteHeader />
      <section className="hero home-hero">
        <div className="hero-copy">
          <p className="kicker">Illustration · Drawing · Moving Image</p>
          <h1>画一点，<br />那些没说出口的事。</h1>
          <p className="hero-note">小宝维的图像、手写诗、绘本与动画。</p>
        </div>
        <figure className="hero-art">
          <img src="/works/illustration/warmth.jpg" alt="插画作品《温暖》" />
          <figcaption><span>温暖</span><span>Illustration</span></figcaption>
        </figure>
      </section>
      <div className="running-line" aria-hidden="true"><span>SELECTED WORKS &amp; SMALL THINGS BETWEEN PEOPLE</span><span>从这里进入每一个栏目</span></div>
      <section className="home-index" aria-labelledby="work-index-title">
        <div className="home-index-heading"><p>Explore</p><h2 id="work-index-title">进入作品</h2></div>
        <div className="home-nav-grid">
          {entrances.map(([number, title, english, href, image]) => (
            <a className="home-nav-card" href={href} key={href}>
              <img src={image} alt="" loading="lazy" /><span className="home-nav-number">{number}</span>
              <span className="home-nav-title">{title}</span><span className="home-nav-en">{english}</span><span className="home-nav-arrow" aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
