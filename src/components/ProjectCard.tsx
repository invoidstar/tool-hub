import type { Project } from "../types/project";
import { ExternalIcon, GithubIcon } from "./Icons";

const categoryLabels = { tool: "Tool", research: "Research", dataset: "Dataset" } as const;
const statusLabels = { online: "Online", developing: "Developing", archived: "Archived" } as const;

export function ProjectCard({ project }: { readonly project: Project }) {
  const hasActions = Boolean(project.url || project.repository);

  return (
    <article className="project-card">
      <div className="project-card-top">
        <div className={`project-mark project-mark-${project.category}`}>{project.mark}</div>
        <div className="project-meta">
          <span className="category-badge">{categoryLabels[project.category]}</span>
          <span className={`status status-${project.status}`}><span className="status-dot" />{statusLabels[project.status]}</span>
        </div>
      </div>
      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
      <ul className="tag-list" aria-label={`${project.title} 标签`}>
        {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
      </ul>
      <div className="project-card-footer">
        {project.url && <a className="project-link project-link-primary" href={project.url} target="_blank" rel="noreferrer">Visit project <ExternalIcon /></a>}
        {project.repository && <a className="project-link" href={project.repository} target="_blank" rel="noreferrer" aria-label={`打开 ${project.title} GitHub 仓库`}><GithubIcon />GitHub</a>}
        {!hasActions && <span className="project-link project-link-disabled">Coming later</span>}
      </div>
    </article>
  );
}
