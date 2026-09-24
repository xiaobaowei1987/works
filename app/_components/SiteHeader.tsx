const links = [
  ["/illustration", "插画"], ["/poems", "琐碎诗"], ["/books", "绘本"],
  ["/films", "动画"], ["/about", "关于"],
] as const;

export function SiteHeader({ active }: { active?: string }) {
  return (
    <header className="site-header">
      <a className="wordmark" href="/" aria-label="小宝维作品集首页">XIAO BAOWEI <span>小宝维</span></a>
      <nav aria-label="主导航">
        {links.map(([href, label]) => <a href={href} aria-current={active === href ? "page" : undefined} key={href}>{label}</a>)}
      </nav>
    </header>
  );
}
