import type { Metadata } from "next";
import { SiteFooter } from "../_components/SiteFooter";
import { SiteHeader } from "../_components/SiteHeader";
import { films } from "../data";

const image = "https://www.xiaobaowei.com/works/illustration/untitled-88.jpg";
export const metadata: Metadata = {
  title: "动画作品 — 小保伟", description: "小保伟的动画与动态影像作品。",
  openGraph: { title: "动画作品 — 小保伟", description: "让停在纸上的人，轻轻动一下。", url: "https://www.xiaobaowei.com/films", images: [image] },
  twitter: { card: "summary_large_image", title: "动画作品 — 小保伟", description: "让停在纸上的人，轻轻动一下。", images: [image] },
};

export default function FilmsPage() {
  return <main id="top" className="dark-page"><SiteHeader active="/films" /><section className="section film-section subpage">
    <div className="section-head light-head"><div><p>04</p><h1>动画</h1></div><p>让停在纸上的人，轻轻动一下。</p></div>
    <div className="film-grid">{films.map(([file, title], index) => <figure className="film-card" key={file}>
      <video src={`/works/video/${file}`} muted loop playsInline controls preload="metadata" /><figcaption><span>0{index + 1}</span><h2>{title}</h2></figcaption>
    </figure>)}</div>
  </section><SiteFooter /></main>;
}
