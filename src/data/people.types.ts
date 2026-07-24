export interface Person {
  id: string;
  name: string;
  designation: string;
  /** Short line describing what they handle — shown under the designation */
  responsibility?: string;
  email?: string;
  phone?: string;
  /** Path under /public/images/people/, e.g. "salil-kashyap.jpg" */
  image: string;
}

export interface PeopleGroup {
  id: string;
  title: string;
  /** Optional short subtitle/description for the group */
  subtitle?: string;
  people: Person[];
}

export interface ProjectInvestigator {
  id: string;
  name: string;
  /** Department, or role like "Coordinator, CET" */
  affiliation: string;
  /** External profile URL, if any */
  profileUrl?: string;
  projects: string[];
}
