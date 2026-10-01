import { GithubIcon } from "./Icons";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div><strong>InVoidStar · Tool Hub</strong><p>Small tools, research utilities, and things worth keeping.</p></div>
        <a className="footer-link" href="https://github.com/invoidstar" target="_blank" rel="noreferrer"><GithubIcon />GitHub</a>
      </div>
    </footer>
  );
}
