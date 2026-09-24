export type Locale = "zh" | "en" | "ja";

const navLabels = {
  zh: ["插画", "琐碎诗", "绘本", "动画", "关于"],
  en: ["Illustration", "Poems", "Books", "Films", "About"],
  ja: ["イラスト", "詩", "絵本", "映像", "プロフィール"],
};
const slugs = ["illustration", "poems", "books", "films", "about"] as const;

export function SiteHeader({ active, locale = "zh" }: { active?: string; locale?: Locale }) {
  const currentSlug = active?.replace(/^\//, "") ?? "";
  const localizedPath = (targetLocale: Locale) => {
    const suffix = currentSlug ? `/${currentSlug}` : "";
    return targetLocale === "zh" ? suffix || "/" : `/${targetLocale}${suffix}`;
  };
  return (
    <header className="site-header">
      <a className="wordmark" href="/" aria-label="小宝维作品集首页">XIAO BAOWEI <span>小宝维</span></a>
      <nav aria-label="主导航">
        {slugs.map((slug, index) => {
          const href = locale === "zh" ? `/${slug}` : `/${locale}/${slug}`;
          return <a href={href} aria-current={currentSlug === slug ? "page" : undefined} key={slug}>{navLabels[locale][index]}</a>;
        })}
        <span className="language-switch" aria-label="Language">
          <a href={localizedPath("zh")} aria-current={locale === "zh" ? "page" : undefined}>中</a>
          <a href={localizedPath("en")} aria-current={locale === "en" ? "page" : undefined}>EN</a>
          <a href={localizedPath("ja")} aria-current={locale === "ja" ? "page" : undefined}>日</a>
        </span>
      </nav>
    </header>
  );
}
