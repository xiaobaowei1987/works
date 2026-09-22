const works = [
  { id: "01", title: "Selected Work", meta: "Illustration · 2026", tone: "coral" },
  { id: "02", title: "Editorial", meta: "Commissioned work", tone: "ink" },
  { id: "03", title: "Characters", meta: "Personal project", tone: "moss" },
  { id: "04", title: "Books & Print", meta: "Cover illustration", tone: "sand" },
  { id: "05", title: "Daily Drawings", meta: "Sketchbook", tone: "blue" },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Xiao Baowei home">
          XIAO BAOWEI <span>Illustration</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <p className="eyebrow">Independent illustrator · Based in China</p>
        <h1>
          Images for stories,
          <br />
          people <em>&amp;</em> everyday life.
        </h1>
        <div className="hero-foot">
          <p>
            A quiet, playful portfolio of editorial illustration,
            <br />
            characters, books and personal observations.
          </p>
          <a href="#work">Selected works ↓</a>
        </div>
      </section>

      <section className="work" id="work" aria-labelledby="work-title">
        <div className="section-heading">
          <h2 id="work-title">Selected work</h2>
          <span>2023—2026</span>
        </div>
        <div className="work-grid">
          {works.map((work, index) => (
            <article className={`work-card work-card-${index + 1}`} key={work.id}>
              <div className={`art-placeholder ${work.tone}`} aria-label="Artwork image placeholder">
                <span>{work.id}</span>
                <p>Artwork coming soon</p>
              </div>
              <div className="work-caption">
                <h3>{work.title}</h3>
                <p>{work.meta}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about" id="about" aria-labelledby="about-title">
        <p className="section-label" id="about-title">About</p>
        <div>
          <p className="about-lead">
            Xiao Baowei is an illustrator whose work finds warmth, humour and
            small surprises in ordinary moments.
          </p>
          <p className="about-note">
            Full biography, client list and exhibition history will be added
            with the final portfolio materials.
          </p>
        </div>
      </section>

      <footer id="contact">
        <p>Have a project in mind?</p>
        <a href="mailto:hello@example.com">Let&apos;s work together <Arrow /></a>
        <div className="footer-meta">
          <span>© {new Date().getFullYear()} Xiao Baowei</span>
          <span>Instagram · Xiaohongshu</span>
        </div>
      </footer>
    </main>
  );
}
