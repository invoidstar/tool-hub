interface HeroProps {
  readonly projectCount: number;
  readonly onlineCount: number;
  readonly categoryCount: number;
}

export function Hero({ projectCount, onlineCount, categoryCount }: HeroProps) {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-dot" />Personal project directory</p>
          <h1 id="hero-title">Useful things,<span> in one place.</span></h1>
          <p className="hero-description">把做过的小工具、研究站点与数据项目收进一个长期维护的入口。少一点寻找，多一点直接开始。</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">Browse projects <span aria-hidden="true">↓</span></a>
            <a className="button button-secondary" href="https://github.com/invoidstar" target="_blank" rel="noreferrer">GitHub profile</a>
          </div>
        </div>
        <aside className="hero-panel" aria-label="项目概览">
          <div className="hero-orbit" aria-hidden="true">
            <div className="orbit-ring orbit-ring-outer" />
            <div className="orbit-ring orbit-ring-inner" />
            <div className="orbit-star">✦</div>
          </div>
          <div className="hero-stats">
            <div><strong>{projectCount}</strong><span>Projects</span></div>
            <div><strong>{onlineCount}</strong><span>Online</span></div>
            <div><strong>{categoryCount}</strong><span>Categories</span></div>
          </div>
        </aside>
      </div>
    </section>
  );
}
