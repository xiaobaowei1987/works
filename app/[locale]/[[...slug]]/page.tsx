import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LocalizedPage, localizedMeta, type Section } from "../../_components/LocalizedPage";
import type { Locale } from "../../_components/SiteHeader";

const sections: Section[] = ["home", "illustration", "poems", "books", "films", "about"];

function resolve(params: { locale: string; slug?: string[] }) {
  if (params.locale !== "en" && params.locale !== "ja") return null;
  const section = (params.slug?.[0] ?? "home") as Section;
  if ((params.slug?.length ?? 0) > 1 || !sections.includes(section)) return null;
  return { locale: params.locale as Exclude<Locale, "zh">, section };
}

export function generateStaticParams() {
  return ["en", "ja"].flatMap((locale) => sections.map((section) => ({ locale, slug: section === "home" ? [] : [section] })));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug?: string[] }> }): Promise<Metadata> {
  const page = resolve(await params);
  if (!page) return {};
  const meta = localizedMeta(page.locale, page.section);
  const suffix = page.section === "home" ? "" : `/${page.section}`;
  const url = `https://www.xiaobaowei.com/${page.locale}${suffix}`;
  const image = `https://www.xiaobaowei.com${meta.image}`;
  return { title: meta.title, description: meta.description, openGraph: { title: meta.title, description: meta.description, url, images: [image] }, twitter: { card: "summary_large_image", title: meta.title, description: meta.description, images: [image] } };
}

export default async function LocalizedRoute({ params }: { params: Promise<{ locale: string; slug?: string[] }> }) {
  const page = resolve(await params);
  if (!page) notFound();
  return <LocalizedPage locale={page.locale} section={page.section} />;
}
