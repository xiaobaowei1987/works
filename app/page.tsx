const illustrations = [
  ["warmth.jpg", "温暖", "wide"],
  ["protection.jpg", "保护", "portrait"],
  ["drift.jpg", "漂流", "portrait"],
  ["smile.jpg", "微笑", "portrait"],
  ["dialogue.jpg", "和自己对话", "portrait"],
  ["hide.jpg", "隐藏自己", "portrait"],
  ["transparent.jpg", "透明一下", "portrait"],
  ["wrapped.jpg", "包裹自己", "portrait"],
  ["pencil.jpg", "背后的铅笔", "portrait"],
  ["birthday.jpg", "生日愿望", "portrait"],
  ["empty.jpg", "放空一下", "portrait"],
  ["melting.jpg", "融化", "portrait"],
  ["two-flowers.jpg", "两朵小花", "portrait"],
  ["two-figures.jpg", "两个小人", "portrait"],
  ["untitled-76.jpg", "未命名作品 76", "portrait"],
  ["untitled-80.jpg", "未命名作品 80", "portrait"],
  ["untitled-88.jpg", "未命名作品 88", "landscape"],
];

const poems = [123, 125, 128, 130, 133, 137, 140, 145];

const bookProjects = [
  {
    title: "新画词典",
    subtitle: "Artist book · 2020",
    copy: "一本可以翻阅、展开，也可以在空间里停留的图像词典。",
    path: "dictionary",
    images: ["65.jpg", "66.jpg", "68.jpg", "77.jpg"],
  },
  {
    title: "诗集",
    subtitle: "Handmade book · 2019",
    copy: "纸张、装订与图像共同构成的手工书实验。",
    path: "poetry",
    images: ["01.jpg", "02.jpg", "03.jpg", "04.jpg"],
  },
  {
    title: "鹤总请还钱",
    subtitle: "Picture book",
    copy: "蓝色圆珠笔、手写字与重复出现的小房子，组成一段轻巧又荒诞的叙事。",
    path: "crane",
    images: ["31.jpg", "42.jpg", "78.jpg", "84.jpg", "photo.jpg"],
  },
];

const films = [
  ["dream.mp4", "5月17日 谁也讲不清自己的梦"],
  ["rock-paper-scissors.mp4", "石头剪刀布"],
  ["behind.mp4", "躲在后面"],
  ["moving-still.mp4", "静止地往前"],
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="小宝维作品集首页">
          XIAO BAOWEI <span>小宝维</span>
        </a>
        <nav aria-label="主导航">
          <a href="#illustration">插画</a>
          <a href="#poems">琐碎诗</a>
          <a href="#books">绘本</a>
          <a href="#moving-image">动画</a>
          <a href="#about">关于</a>
        </nav>
      </header>

      <section className="hero" id="top">
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

      <div className="running-line" aria-hidden="true">
        <span>DRAWING THE SMALL THINGS BETWEEN PEOPLE</span>
        <span>画人与人之间细小的事情</span>
      </div>

      <section className="section illustration-section" id="illustration" aria-labelledby="illustration-title">
        <div className="section-head">
          <div><p>01</p><h2 id="illustration-title">插画</h2></div>
          <p>人物、关系和那些很难解释的情绪。</p>
        </div>
        <div className="illustration-grid">
          {illustrations.map(([file, title, shape], index) => (
            <figure className={`art-card ${shape} art-${index + 1}`} key={file}>
              <div className="image-wrap">
                <img src={`/works/illustration/${file}`} alt={`插画作品《${title}》`} loading={index < 3 ? "eager" : "lazy"} />
              </div>
              <figcaption><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3></figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="section poems-section" id="poems" aria-labelledby="poems-title">
        <div className="section-head light-head">
          <div><p>02</p><h2 id="poems-title">琐碎诗</h2></div>
          <p>写一点今天想过，但没有说完的话。</p>
        </div>
        <div className="poem-rail">
          {poems.map((number, index) => (
            <figure className="poem-card" key={number}>
              <img src={`/works/poems/poem-${number}.jpg`} alt={`琐碎诗手写作品 ${index + 1}`} loading="lazy" />
              <figcaption>琐碎诗 · {String(index + 1).padStart(2, "0")}</figcaption>
            </figure>
          ))}
        </div>
        <p className="rail-hint">横向浏览 →</p>
      </section>

      <section className="section books-section" id="books" aria-labelledby="books-title">
        <div className="section-head">
          <div><p>03</p><h2 id="books-title">绘本与书</h2></div>
          <p>图像在纸张、装订与叙事之间发生。</p>
        </div>
        <div className="book-projects">
          {bookProjects.map((project, projectIndex) => (
            <article className="book-project" key={project.title}>
              <div className="book-copy">
                <p>0{projectIndex + 1} / 03</p>
                <h3>{project.title}</h3>
                <span>{project.subtitle}</span>
                <p>{project.copy}</p>
              </div>
              <div className="book-images">
                {project.images.map((file, index) => (
                  <img
                    className={index === 0 ? "book-cover" : "book-detail"}
                    src={`/works/books/${project.path}/${file}`}
                    alt={`${project.title}作品图 ${index + 1}`}
                    loading="lazy"
                    key={file}
                  />
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section film-section" id="moving-image" aria-labelledby="film-title">
        <div className="section-head light-head">
          <div><p>04</p><h2 id="film-title">动画</h2></div>
          <p>让停在纸上的人，轻轻动一下。</p>
        </div>
        <div className="film-grid">
          {films.map(([file, title], index) => (
            <figure className="film-card" key={file}>
              <video src={`/works/video/${file}`} muted loop playsInline controls preload="metadata" />
              <figcaption><span>0{index + 1}</span><h3>{title}</h3></figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="about" id="about" aria-labelledby="about-title">
        <p className="about-label">05 · About</p>
        <div>
          <h2 id="about-title">小宝维是一位插画创作者。</h2>
          <p>她以人物和日常经验为线索，在插画、手写诗、绘本与动画中记录人与人之间细微、温暖、有时也有些荒诞的时刻。</p>
          <p className="about-en">Xiao Baowei is an illustrator working across drawing, artist books and moving image.</p>
        </div>
      </section>

      <footer>
        <div><p>合作、出版与展览</p><h2>Let&apos;s make<br />something together.</h2></div>
        <p className="contact-note">联系信息即将补充</p>
        <div className="footer-meta"><span>© {new Date().getFullYear()} Xiao Baowei</span><a href="#top">回到顶部 ↑</a></div>
      </footer>
    </main>
  );
}
