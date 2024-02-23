interface CompanyDescription {
    id: number;
    name: string;
    img: string;
    description: string;
    myExperience: string[];
    experienceLinks: { id: number, label: string; link: string }[];
    technologies: string[];
    projects?: string[];
    workedTime: { from: string; to: string };
}

export type { CompanyDescription }