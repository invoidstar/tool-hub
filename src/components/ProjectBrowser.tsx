import { useMemo, useState } from "react";
import type { Project, ProjectCategory } from "../types/project";
import { SearchIcon } from "./Icons";
import { ProjectCard } from "./ProjectCard";

type CategoryFilter = ProjectCategory | "all";
const filters: readonly { value: CategoryFilter; label: string }[] = [
  { value: "all", label: "All" },
  { value: "tool", label: "Tools" },
  { value: "research", label: "Research" },
  { value: "dataset", label: "Datasets" },
];

export function ProjectBrowser({ projects }: { readonly projects: readonly Project[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<CategoryFilter>("all");

  const counts = useMemo(() => projects.reduce((result, project) => {
    result[project.category] += 1;
    return result;
  }, { tool: 0, research: 0, dataset: 0 } satisfies Record<ProjectCategory, number>), [projects]);

  const visibleProjects = useMemo(() => {
    const normalized = query.trim().toLocaleLowerCase();
    return projects.filter((project) => {
      if (category !== "all" && project.category !== category) return false;
      if (!normalized) return true;
      return [project.title, project.description, ...project.tags].join(" ").toLocaleLowerCase().includes(normalized);
    });
  }, [category, projects, query]);

  const countFor = (value: CategoryFilter) => value === "all" ? projects.length : counts[value];

  return (
    <section className="projects-section" id="projects" aria-labelledby="projects-title">
      <div className="container">
        <div className="section-heading">
          <div><p className="section-kicker">Directory</p><h2 id="projects-title">Explore projects</h2></div>
          <p>工具保持实用，研究站点保持可查，所有项目都从这里快速进入。</p>
        </div>
        <div className="project-toolbar">
          <div className="filter-list" aria-label="项目分类筛选">
            {filters.map((filter) => (
              <button key={filter.value} className={category === filter.value ? "filter active" : "filter"} type="button" onClick={() => setCategory(filter.value)} aria-pressed={category === filter.value}>
                {filter.label}<span>{countFor(filter.value)}</span>
              </button>
            ))}
          </div>
          <label className="search-box">
            <span className="sr-only">搜索项目</span><SearchIcon />
            <input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search projects" autoComplete="off" />
          </label>
        </div>
        <p className="result-count" aria-live="polite">{visibleProjects.length} {visibleProjects.length === 1 ? "project" : "projects"}</p>
        {visibleProjects.length > 0 ? (
          <div className="project-grid">{visibleProjects.map((project) => <ProjectCard key={project.slug} project={project} />)}</div>
        ) : (
          <div className="empty-state"><span aria-hidden="true">✦</span><h3>No matching projects</h3><p>换一个关键词或分类试试。</p></div>
        )}
      </div>
    </section>
  );
}
