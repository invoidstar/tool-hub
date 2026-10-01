import type { Theme } from "../hooks/useTheme";
import { GithubIcon, MoonIcon, SunIcon } from "./Icons";

interface HeaderProps {
  readonly theme: Theme;
  readonly onToggleTheme: () => void;
}

export function Header({ theme, onToggleTheme }: HeaderProps) {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="#" aria-label="InVoidStar Tool Hub 首页">
          <span className="brand-mark" aria-hidden="true"><span /></span>
          <span className="brand-copy"><strong>InVoidStar</strong><small>Tool Hub</small></span>
        </a>
        <nav className="main-nav" aria-label="主导航">
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
        </nav>
        <div className="header-actions">
          <a className="icon-button" href="https://github.com/invoidstar" target="_blank" rel="noreferrer" aria-label="打开 InVoidStar 的 GitHub"><GithubIcon /></a>
          <button className="icon-button" type="button" onClick={onToggleTheme} aria-label={theme === "light" ? "切换到深色模式" : "切换到浅色模式"}>
            {theme === "light" ? <MoonIcon /> : <SunIcon />}
          </button>
        </div>
      </div>
    </header>
  );
}
