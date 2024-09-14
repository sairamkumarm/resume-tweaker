  
export type BlogType = {
    id: number,
    title: string;
    excerpt: string;
    content: string;
    date: string;
    readTime: string;
    category: string;
    image: string;
}

export interface Education {
    university_name: string
    joined_year: number
    passed_out_year: number
    cgpa_or_marks: string
  }
  
  export interface Project {
    project_name: string
    description: string
    StartDate: string
    EndDate: string
    project_url: string
  }
  
  export interface Experience {
    company_name: string
    role: string
    description: string
    StartDate: string
    EndDate: string
  }
  
  export interface SocialMediaLink {
    platform: string
    url: string
  }
  
  export interface Reference {
    name: string
    contact: string
    relationship: string
  }
  
  export interface UserData {
    id: number
    user_id: number
    fullname: string
    contact_number: string
    email: string
    address: string
    bio: string
    links: string[]
    skills: string[]
    role: string
    experience_years: number
    education_level: Education[]
    certifications: string[]
    languages: string[]
    projects: Project[]
    Experience: Experience[]
    achievements: string[]
    social_media_links: SocialMediaLink[]
    references: Reference[]
    updated_at: Date
    credits: number
    max_credits: number
  }