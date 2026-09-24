import { films, illustrations } from "../data";
import { SiteFooter } from "./SiteFooter";
import { Locale, SiteHeader } from "./SiteHeader";
import { PoemBook } from "./PoemBook";

export type Section = "home" | "illustration" | "poems" | "books" | "films" | "about";

const copy = {
  en: {
    section: {
      illustration: ["Illustration", "People, relationships, and feelings that are difficult to explain."],
      poems: ["Fragments of Poetry", "A few thoughts from today that were never quite finished."],
      books: ["Books & Stories", "Images unfolding through paper, binding, and narrative."],
      films: ["Moving Image", "Letting the people on paper move, just a little."],
    },
    artworks: ["Warmth", "Protection", "Drifting", "Smile", "Talking to Myself", "Hiding", "Be Transparent", "Wrapped Up", "The Pencil Behind", "Birthday Wish", "Emptying Out", "Melting", "Two Flowers", "Two Figures", "Untitled 76", "Untitled 80", "Untitled 88"],
    poemCaption: "Fragment",
    books: [
      ["New Picture Dictionary", "Artist book · 2020", "A visual dictionary that can be leafed through, unfolded, or allowed to linger in space.", "dictionary", ["65.jpg", "66.jpg", "68.jpg", "77.jpg"]],
      ["Poetry Collection", "Handmade book · 2019", "A handmade-book experiment in which paper, binding, and image form one work.", "poetry", ["01.jpg", "02.jpg", "03.jpg", "04.jpg"]],
      ["Mr. Crane, Please Pay Me Back", "Picture book", "Blue ballpoint pen, handwriting, and recurring little houses form a light and absurd narrative.", "crane", ["31.jpg", "42.jpg", "78.jpg", "84.jpg", "photo.jpg"]],
    ] as const,
    filmTitles: ["May 17: No One Can Explain Their Dreams", "Rock Paper Scissors", "Hiding Behind", "Moving Still"],
    aboutTitle: "Xiao Baowei is an illustrator.",
    about: "Drawing from people and everyday experience, she records subtle, warm, and sometimes absurd moments between people through illustration, handwritten poetry, artist books, and animation.",
    imageAlt: "Artwork",
  },
  ja: {
    section: {
      illustration: ["イラスト", "人物、関係、そして言葉では説明しにくい感情。"],
      poems: ["ささやかな詩", "今日考えたこと、でも言い終えられなかったことを少しだけ。"],
      books: ["絵本と本", "紙、製本、物語のあいだで生まれるイメージ。"],
      films: ["映像", "紙の上で止まっていた人を、そっと動かす。"],
    },
    artworks: ["ぬくもり", "守る", "漂流", "微笑み", "自分との対話", "自分を隠す", "透明になる", "自分を包む", "背中の鉛筆", "誕生日の願い", "空っぽになる", "溶ける", "二輪の花", "二人の小人", "無題 76", "無題 80", "無題 88"],
    poemCaption: "ささやかな詩",
    books: [
      ["新・絵の辞典", "Artist book · 2020", "めくることも、広げることも、空間に置くこともできるイメージの辞典。", "dictionary", ["65.jpg", "66.jpg", "68.jpg", "77.jpg"]],
      ["詩集", "Handmade book · 2019", "紙、製本、イメージが一体となった手製本の実験。", "poetry", ["01.jpg", "02.jpg", "03.jpg", "04.jpg"]],
      ["鶴さん、お金を返して", "Picture book", "青いボールペン、手書き文字、繰り返し現れる小さな家が、軽やかで少し不思議な物語をつくる。", "crane", ["31.jpg", "42.jpg", "78.jpg", "84.jpg", "photo.jpg"]],
    ] as const,
    filmTitles: ["5月17日　自分の夢は誰にも説明できない", "じゃんけん", "後ろに隠れる", "静かに前へ"],
    aboutTitle: "小保伟はイラストレーターです。",
    about: "人物と日々の経験を手がかりに、イラスト、手書きの詩、絵本、アニメーションを通して、人と人のあいだにある繊細で温かく、ときに少し不思議な瞬間を記録しています。",
    imageAlt: "作品",
  },
} as const;

export function localizedMeta(locale: Locale, section: Section) {
  const lang = locale === "en" ? "en" : "ja";
  const c = copy[lang];
  const titles = { home: "Xiao Baowei — Illustrator", illustration: c.section.illustration[0], poems: c.section.poems[0], books: c.section.books[0], films: c.section.films[0], about: c.aboutTitle };
  const descriptions = { home: locale === "en" ? "Illustration, handwritten poetry, artist books, and animation by Xiao Baowei." : "小保伟のイラスト、手書きの詩、絵本、アニメーション。", illustration: c.section.illustration[1], poems: c.section.poems[1], books: c.section.books[1], films: c.section.films[1], about: c.about };
  const images = { home: "/og.jpg", illustration: "/works/illustration/warmth.jpg", poems: "/works/poems/poem-123.jpg", books: "/works/books/dictionary/65.jpg", films: "/works/illustration/untitled-88.jpg", about: "/works/illustration/dialogue.jpg" };
  return { title: titles[section], description: descriptions[section], image: images[section] };
}

export function LocalizedPage({ locale, section }: { locale: "en" | "ja"; section: Section }) {
  const c = copy[locale];
  const active = section === "home" ? undefined : `/${section}`;
  if (section === "home") return <main id="top" className="home-simple"><SiteHeader locale={locale} /><section className="home-artwork" aria-label={c.imageAlt}><img src="/works/illustration/warmth.jpg" alt={`${c.imageAlt}: ${c.artworks[0]}`} /></section><p className="home-copyright">© Xiao Baowei. All rights reserved.</p></main>;

  if (section === "illustration") return <main id="top" className="illustration-page"><SiteHeader active={active} locale={locale} /><section className="section illustration-section subpage"><SectionHead number="01" title={c.section.illustration[0]} description={c.section.illustration[1]} /><div className="illustration-grid">{illustrations.map(([file, , shape], index) => <figure className={`art-card ${shape}`} key={file}><div className="image-wrap"><img src={`/works/illustration/${file}`} alt={`${c.imageAlt}: ${c.artworks[index]}`} /></div><figcaption><span>{String(index + 1).padStart(2, "0")}</span><h2>{c.artworks[index]}</h2></figcaption></figure>)}</div></section><SiteFooter locale={locale} /></main>;

  if (section === "poems") return <main id="top" className="dark-page"><SiteHeader active={active} locale={locale} /><section className="section poems-section subpage"><SectionHead number="02" title={c.section.poems[0]} description={c.section.poems[1]} light /><PoemBook locale={locale} /></section><SiteFooter locale={locale} /></main>;

  if (section === "books") return <main id="top"><SiteHeader active={active} locale={locale} /><section className="section books-section subpage"><SectionHead number="03" title={c.section.books[0]} description={c.section.books[1]} /><div className="book-projects">{c.books.map(([title, subtitle, description, path, images], projectIndex) => <article className="book-project" key={title}><div className="book-copy"><p>0{projectIndex + 1} / 03</p><h2>{title}</h2><span>{subtitle}</span><p>{description}</p></div><div className="book-images">{images.map((file, index) => <img className={index === 0 ? "book-cover" : "book-detail"} src={`/works/books/${path}/${file}`} alt={`${title} ${index + 1}`} key={file} />)}</div></article>)}</div></section><SiteFooter locale={locale} /></main>;

  if (section === "films") return <main id="top" className="dark-page"><SiteHeader active={active} locale={locale} /><section className="section film-section subpage"><SectionHead number="04" title={c.section.films[0]} description={c.section.films[1]} light /><div className="film-grid">{films.map(([file], index) => <figure className="film-card" key={file}><video src={`/works/video/${file}`} muted loop playsInline controls preload="metadata" /><figcaption><span>0{index + 1}</span><h2>{c.filmTitles[index]}</h2></figcaption></figure>)}</div></section><SiteFooter locale={locale} /></main>;

  return <main id="top"><SiteHeader active={active} locale={locale} /><section className="about about-page"><p className="about-label">05 · About</p><div><h1>{c.aboutTitle}</h1><p>{c.about}</p><p className="about-en">Xiao Baowei is an illustrator working across drawing, artist books and moving image.</p><figure className="about-art"><img src="/works/illustration/dialogue.jpg" alt={`${c.imageAlt}: ${c.artworks[4]}`} /></figure></div></section><SiteFooter locale={locale} /></main>;
}

function SectionHead({ number, title, description, light = false }: { number: string; title: string; description: string; light?: boolean }) {
  return <div className={`section-head${light ? " light-head" : ""}`}><div><p>{number}</p><h1>{title}</h1></div><p>{description}</p></div>;
}
