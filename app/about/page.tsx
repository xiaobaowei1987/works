import type { Metadata } from "next";
import { SiteFooter } from "../_components/SiteFooter";
import { SiteHeader } from "../_components/SiteHeader";

const image = "https://www.xiaobaowei.com/works/illustration/dialogue.jpg";
export const metadata: Metadata = {
  title: "关于小宝维", description: "了解插画创作者小宝维。",
  openGraph: { title: "关于小宝维", description: "插画、手写诗、绘本与动画创作者。", url: "https://www.xiaobaowei.com/about", images: [image] },
  twitter: { card: "summary_large_image", title: "关于小宝维", description: "插画、手写诗、绘本与动画创作者。", images: [image] },
};

export default function AboutPage() {
  return <main id="top"><SiteHeader active="/about" /><section className="about about-page" aria-labelledby="about-title">
    <p className="about-label">05 · About</p><div><h1 id="about-title">小宝维是一位插画创作者。</h1>
    <p>她以人物和日常经验为线索，在插画、手写诗、绘本与动画中记录人与人之间细微、温暖、有时也有些荒诞的时刻。</p>
    <p className="about-en">Xiao Baowei is an illustrator working across drawing, artist books and moving image.</p>
    <figure className="about-art"><img src="/works/illustration/dialogue.jpg" alt="插画作品《和自己对话》" /></figure></div>
  </section><SiteFooter /></main>;
}
