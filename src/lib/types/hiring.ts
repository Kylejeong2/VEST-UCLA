export interface MemberCard {
    id: string;
    firstName: string;
    lastName: string;
    slug: string;
    headshot: string;
    description: string;
    skills: string[];
    isAvailable: boolean;
    lookingFor?: string;
  }

export interface Video {
  id?: string;
  url: string;
  title: string;
  description: string;
  createdAt?: Date;
  updatedAt?: Date;
  memberId?: string;
}

export interface Project {
  title: string;
  description: string;
  demoUrl?: string;
  imageUrl?: string;
}

export interface Member {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    headshot: string;
    description: string;
    resumeUrl?: string;
    linkedinUrl?: string;
    projects: Project[];
    skills: string[];
    isAvailable: boolean;
    lookingFor?: string;
    videos?: Video[];
    applicationResponses?: Record<string, string>;
  }

