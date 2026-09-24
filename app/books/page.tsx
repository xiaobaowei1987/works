import type { Metadata } from "next";
import { SiteFooter } from "../_components/SiteFooter";
import { SiteHeader } from "../_components/SiteHeader";
import { bookProjects } from "../data";

const image = "https://www.xiaobaowei.com/works/books/dictionary/65.jpg";
export const metadata: Metadata = {
  title: "绘本与书 — 小保伟", description: "小保伟的绘本、艺术家书与手工书作品。",
  openGraph: { title: "绘本与书 — 小保伟", description: "图像在纸张、装订与叙事之间发生。", url: "https://www.xiaobaowei.com/books", images: [image] },
  twitter: { card: "summary_large_image", title: "绘本与书 — 小保伟", description: "图像在纸张、装订与叙事之间发生。", images: [image] },
};

export default function BooksPage() {
  return <main id="top"><SiteHeader active="/books" /><section className="section books-section subpage">
    <div className="section-head"><div><p>03</p><h1>绘本与书</h1></div><p>图像在纸张、装订与叙事之间发生。</p></div>
    <div className="book-projects">{bookProjects.map((project, projectIndex) => <article className="book-project" key={project.title}>
      <div className="book-copy"><p>0{projectIndex + 1} / 03</p><h2>{project.title}</h2><span>{project.subtitle}</span><p>{project.copy}</p></div>
      <div className="book-images">{project.images.map((file, index) => <img className={index === 0 ? "book-cover" : "book-detail"} src={`/works/books/${project.path}/${file}`} alt={`${project.title}作品图 ${index + 1}`} loading={index === 0 ? "eager" : "lazy"} key={file} />)}</div>
    </article>)}</div>
  </section><SiteFooter /></main>;
}
