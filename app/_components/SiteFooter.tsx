import type { Locale } from "./SiteHeader";

const text = {
  zh: { label: "合作、出版与展览", note: "联系信息即将补充", top: "回到顶部 ↑" },
  en: { label: "Commissions, publishing & exhibitions", note: "Contact details coming soon", top: "Back to top ↑" },
  ja: { label: "制作、出版、展示のご相談", note: "連絡先は近日掲載予定です", top: "ページ上部へ ↑" },
};

export function SiteFooter({ locale = "zh" }: { locale?: Locale }) {
  const copy = text[locale];
  return (
    <footer>
      <div><p>{copy.label}</p><h2>Let&apos;s make<br />something together.</h2></div>
      <p className="contact-note">{copy.note}</p>
      <div className="footer-meta"><span>© {new Date().getFullYear()} Xiao Baowei</span><a href="#top">{copy.top}</a></div>
    </footer>
  );
}
