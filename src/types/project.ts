export interface Project {
  name: string;
  image: string;
  description: string;
  liveSite?: string;
  backendGithubUrl?: string;
  frontendGithubUrl?: string;
  githubUrl?: string;
  workInProgress: boolean;
  stacks: string[];
}
