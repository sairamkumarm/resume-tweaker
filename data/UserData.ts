import { UserData } from "@/types/types"

export const userData: UserData = {
    id: 1,
    user_id: 1001,
    fullname: "John Doe",
    contact_number: "+1234567890",
    email: "john.doe@example.com",
    address: "123 Main St, Anytown, USA",
    bio: "Passionate software developer with 5 years of experience",
    links: ["https://github.com/johndoe", "https://linkedin.com/in/johndoe"],
    skills: ["JavaScript", "React", "Node.js", "Python"],
    role: "Senior Software Engineer",
    experience_years: 5,
    education_level: [
      {
        university_name: "Tech University",
        joined_year: 2015,
        passed_out_year: 2019,
        cgpa_or_marks: "3.8",
      },
    ],
    certifications: ["AWS Certified Developer", "Google Cloud Professional"],
    languages: ["English", "Spanish"],
    projects: [
      {
        project_name: "E-commerce Platform",
        description: "Built a scalable e-commerce platform using MERN stack",
        StartDate: "2020-01-01",
        EndDate: "2020-06-30",
        project_url: "https://example-ecommerce.com",
      },
    ],
    Experience: [
      {
        company_name: "Tech Solutions Inc.",
        role: "Software Engineer",
        description: "Developed and maintained web applications",
        StartDate: "2019-07-01",
        EndDate: "2022-12-31",
      },
    ],
    achievements: ["Best Employee of the Year 2021", "5x Hackathon Winner"],
    social_media_links: [
      { platform: "Twitter", url: "https://twitter.com/johndoe" },
      { platform: "LinkedIn", url: "https://linkedin.com/in/johndoe" },
    ],
    references: [
      {
        name: "Jane Smith",
        contact: "jane.smith@example.com",
        relationship: "Former Manager",
      },
    ],
    updated_at: new Date("2023-06-01"),
    credits: 750,
    max_credits: 1000,
  }
  