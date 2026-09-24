import type { Metadata } from "next";
import { SiteFooter } from "../_components/SiteFooter";
import { SiteHeader } from "../_components/SiteHeader";
import { poems } from "../data";

const image = "https://www.xiaobaowei.com/works/poems/poem-123.jpg";
export const metadata: Metadata = {
  title: "琐碎诗 — 小保伟", description: "小保伟的手写诗作品。",
  openGraph: { title: "琐碎诗 — 小保伟", description: "写一点今天想过，但没有说完的话。", url: "https://www.xiaobaowei.com/poems", images: [image] },
  twitter: { card: "summary_large_image", title: "琐碎诗 — 小保伟", description: "写一点今天想过，但没有说完的话。", images: [image] },
};

export default function PoemsPage() {
  return <main id="top" className="dark-page"><SiteHeader active="/poems" /><section className="section poems-section subpage">
    <div className="section-head light-head"><div><p>02</p><h1>琐碎诗</h1></div><p>写一点今天想过，但没有说完的话。</p></div>
    <div className="poem-gallery">{poems.map((number, index) => <figure className="poem-card" key={number}>
      <img src={`/works/poems/poem-${number}.jpg`} alt={`琐碎诗手写作品 ${index + 1}`} loading={index < 2 ? "eager" : "lazy"} /><figcaption>琐碎诗 · {String(index + 1).padStart(2, "0")}</figcaption>
    </figure>)}</div>
  </section><SiteFooter /></main>;
}
