import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ProjectBrowser } from "./components/ProjectBrowser";
import { projects } from "./data/projects";
import { useTheme } from "./hooks/useTheme";

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const onlineCount = projects.filter((project) => project.status === "online").length;
  const categoryCount = new Set(projects.map((project) => project.category)).size;

  return (
    <div className="app-shell">
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero projectCount={projects.length} onlineCount={onlineCount} categoryCount={categoryCount} />
        <ProjectBrowser projects={projects} />
        <section className="about-section" id="about" aria-labelledby="about-title">
          <div className="container about-grid">
            <div><p className="section-kicker">About</p><h2 id="about-title">A small home for things I build.</h2></div>
            <div className="about-copy">
              <p>这个站点不会试图变成复杂的门户。它只负责把真正有用、仍在维护的项目放在一个干净的入口里。</p>
              <p>前端保持轻量，项目数据集中管理；需要后端时，再在同一套 Cloudflare Workers 架构上逐步加入 API、数据库和管理功能。</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
