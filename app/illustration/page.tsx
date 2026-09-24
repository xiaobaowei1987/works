import type { Metadata } from "next";
import { SiteFooter } from "../_components/SiteFooter";
import { SiteHeader } from "../_components/SiteHeader";
import { illustrations } from "../data";

const image = "https://www.xiaobaowei.com/works/illustration/warmth.jpg";
export const metadata: Metadata = {
  title: "插画作品 — 小宝维", description: "小宝维关于人物、关系与日常情绪的插画作品。",
  openGraph: { title: "插画作品 — 小宝维", description: "人物、关系和那些很难解释的情绪。", url: "https://www.xiaobaowei.com/illustration", images: [image] },
  twitter: { card: "summary_large_image", title: "插画作品 — 小宝维", description: "人物、关系和那些很难解释的情绪。", images: [image] },
};

export default function IllustrationPage() {
  return <main id="top" className="illustration-page"><SiteHeader active="/illustration" /><section className="section illustration-section subpage">
    <div className="section-head"><div><p>01</p><h1>插画</h1></div><p>人物、关系和那些很难解释的情绪。</p></div>
    <div className="illustration-grid">{illustrations.map(([file, title, shape], index) => <figure className={`art-card ${shape} art-${index + 1}`} key={file}>
      <div className="image-wrap"><img src={`/works/illustration/${file}`} alt={`插画作品《${title}》`} loading={index < 3 ? "eager" : "lazy"} /></div>
      <figcaption><span>{String(index + 1).padStart(2, "0")}</span><h2>{title}</h2></figcaption>
    </figure>)}</div>
  </section><SiteFooter /></main>;
}
