export type ProjectCategory = "tool" | "research" | "dataset";
export type ProjectStatus = "online" | "developing" | "archived";

export interface Project {
  readonly slug: string;
  readonly title: string;
  readonly mark: string;
  readonly description: string;
  readonly category: ProjectCategory;
  readonly status: ProjectStatus;
  readonly tags: readonly string[];
  readonly url?: string;
  readonly repository?: string;
}
