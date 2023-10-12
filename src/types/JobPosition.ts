export type Role = 'Frontend' | 'Backend' | 'Fullstack';
export type Level = 'Junior' | 'Midweight' | 'Senior';
export type Languages = 'Python' | 'Ruby' | 'JavaScript' | 'HTML' | 'CSS';
export type Tools = 'React' | 'Sass' | 'Vue' | 'Django' | 'RoR';
export type Category = Role | Level | Languages | Tools;

export interface JobPosition {
  id: number;
  company: string;
  logo: string;
  new: boolean;
  featured: boolean;
  position: string;
  role: Role;
  level: Level;
  postedAt: string;
  contract: string;
  location: string;
  languages: Languages[];
  tools: Tools[];
}
