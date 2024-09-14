"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import SidebarContent from "@/components/SideBar"
import { Menu, Plus, Trash } from "lucide-react"
import { userData } from "@/data/UserData"
import { Education, UserData, Reference, SocialMediaLink, Experience, Project } from "@/types/types"


export default function ProfilePage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [user, setUser] = useState<UserData>(userData)

  const handleInputChange = (field: keyof UserData, value: string | number) => {
    setUser((prevUser) => ({ ...prevUser, [field]: value }))
  }

  const handleArrayInputChange = <T extends keyof UserData>(
    field: T,
    index: number,
    value: UserData[T] extends (infer U)[] ? Partial<U> : never
  ) => {
    setUser((prevUser: UserData) => {
      if (Array.isArray(prevUser[field])) {
        const newArray = [...prevUser[field]] as any[]
        newArray[index] = { ...newArray[index], ...value }
        return { ...prevUser, [field]: newArray }
      }
      return prevUser
    })
  }

  const handleAddArrayItem = <T extends keyof UserData>(field: T) => {
    setUser((prevUser: UserData) => {
      if (Array.isArray(prevUser[field])) {
        const newItem = (
          field === "education_level"
            ? { university_name: "", joined_year: 0, passed_out_year: 0, cgpa_or_marks: "" }
            : field === "projects"
            ? { project_name: "", description: "", StartDate: "", EndDate: "", project_url: "" }
            : field === "Experience"
            ? { company_name: "", role: "", description: "", StartDate: "", EndDate: "" }
            : ""
        ) as UserData[T] extends (infer U)[] ? U : never

        return {
          ...prevUser,
          [field]: [...prevUser[field], newItem],
        }
      }
      return prevUser
    })
  }
  const handleRemoveArrayItem = <T extends keyof UserData>(field: T, index: number) => {
    setUser((prevUser: UserData) => {
      if (Array.isArray(prevUser[field])) {
        return {
          ...prevUser,
          [field]: prevUser[field].filter((_, i) => i !== index),
        }
      }
      return prevUser
    })
  }

  return (
    <div className="flex h-screen bg-background text-foreground">
      {/* Sidebar for larger screens */}
      <aside className="hidden w-64 border-r border-border bg-muted/40 lg:block">
        <SidebarContent />
      </aside>

      {/* Mobile sidebar */}
      <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="fixed left-4 top-4 z-40 lg:hidden">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle sidebar</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64 p-0">
          <SidebarContent />
        </SheetContent>
      </Sheet>

      {/* Main content */}
      <main className="flex-1 overflow-auto p-4 md:p-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="mb-6 text-3xl font-bold">Profile</h1>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Credits</CardTitle>
              <CardDescription>Your current credit balance and level</CardDescription>
            </CardHeader>
            <CardContent>
              <Progress value={(user.credits / user.max_credits) * 100} className="mb-2" />
              <p className="text-sm text-muted-foreground">
                {user.credits} / {user.max_credits} credits
              </p>
            </CardContent>
            <CardFooter>
              <Button>Upgrade</Button>
            </CardFooter>
          </Card>

          <Tabs defaultValue="personal" className="space-y-4">
            <TabsList>
              <TabsTrigger value="personal">Personal Info</TabsTrigger>
              <TabsTrigger value="professional">Professional Info</TabsTrigger>
              <TabsTrigger value="education">Education & Skills</TabsTrigger>
              <TabsTrigger value="projects">Projects & Experience</TabsTrigger>
            </TabsList>

            <TabsContent value="personal">
              <Card>
                <CardHeader>
                  <CardTitle>Personal Information</CardTitle>
                  <CardDescription>Update your personal details here</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="fullname">Full Name</Label>
                      <Input
                        id="fullname"
                        value={user.fullname}
                        onChange={(e) => handleInputChange("fullname", e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contact_number">Contact Number</Label>
                      <Input
                        id="contact_number"
                        value={user.contact_number}
                        onChange={(e) => handleInputChange("contact_number", e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={user.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="address">Address</Label>
                      <Input
                        id="address"
                        value={user.address}
                        onChange={(e) => handleInputChange("address", e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea
                      id="bio"
                      value={user.bio}
                      onChange={(e) => handleInputChange("bio", e.target.value)}
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="professional">
              <Card>
                <CardHeader>
                  <CardTitle>Professional Information</CardTitle>
                  <CardDescription>Update your professional details here</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="role">Current Role</Label>
                      <Input
                        id="role"
                        value={user.role}
                        onChange={(e) => handleInputChange("role", e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="experience_years">Years of Experience</Label>
                      <Input
                        id="experience_years"
                        type="number"
                        value={user.experience_years}
                        onChange={(e) => handleInputChange("experience_years", e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Skills</Label>
                    {user.skills.map((skill, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Input
                          value={skill}
                          onChange={(e) => handleArrayInputChange("skills", index, e.target.value)}
                        />
                        <Button
                          size="icon"
                          variant="outline"
                          onClick={() => handleRemoveArrayItem("skills", index)}
                        >
                          <Trash className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                    <Button onClick={() => handleAddArrayItem("skills")}>
                      <Plus className="mr-2 h-4 w-4" /> Add Skill
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="education">
              <Card>
                <CardHeader>
                  <CardTitle>Education & Skills</CardTitle>
                  <CardDescription>Update your educational background and skills</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {user.education_level.map((edu, index) => (
                    <div key={index} className="space-y-2">
                      <Label>Education {index + 1}</Label>
                      <div className="grid gap-4 md:grid-cols-2">
                        <Input
                          placeholder="University Name"
                          value={edu.university_name}
                          onChange={(e) =>
                            handleArrayInputChange("education_level", index, {
                              ...edu,
                              university_name: e.target.value,
                            })
                          }
                        />
                        <Input
                          placeholder="CGPA/Marks"
                          value={edu.cgpa_or_marks}
                          onChange={(e) =>
                            handleArrayInputChange("education_level", index, {
                              ...edu,
                              cgpa_or_marks: e.target.value,
                            })
                          }
                        />
                        <Input
                          type="number"
                          placeholder="Joined Year"
                          value={edu.joined_year}
                          onChange={(e) =>
                            handleArrayInputChange("education_level", index, {
                              ...edu,
                              joined_year: parseInt(e.target.value),
                            })
                          }
                        />
                        <Input
                          type="number"
                          placeholder="Passed Out Year"
                          value={edu.passed_out_year}
                          onChange={(e) =>
                            handleArrayInputChange("education_level", index, {
                              ...edu,
                              passed_out_year: parseInt(e.target.value),
                            })
                          }
                        />
                      </div>
                    </div>
                  ))}
                  <Button onClick={() => handleAddArrayItem("education_level")}>
                    <Plus className="mr-2 h-4 w-4" /> Add Education
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="projects">
              <Card>
                <CardHeader>
                  <CardTitle>Projects & Experience</CardTitle>
                  <CardDescription>Update your projects and work experience</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label>Projects</Label>
                    {user.projects.map((project, index) => (
                      <div key={index} className="space-y-2">
                        <Input
                          placeholder="Project Name"
                          value={project.project_name}
                          onChange={(e) =>
                            handleArrayInputChange("projects", index, {
                              ...project,
                              project_name: e.target.value,
                            })
                          }
                        />
                        <Textarea
                          placeholder="Description"
                          value={project.description}
                          onChange={(e) =>
                            handleArrayInputChange("projects", index, {
                              ...project,
                              description: e.target.value,
                            })
                          }
                        />
                        <div className="grid gap-4 md:grid-cols-2">
                          <Input
                            type="date"
                            placeholder="Start Date"
                            value={project.StartDate}
                            onChange={(e) =>
                              handleArrayInputChange("projects", index, {
                                ...project,
                                StartDate: e.target.value,
                              })
                            }
                          />
                          <Input
                            type="date"
                            placeholder="End Date"
                            value={project.EndDate}
                            onChange={(e) =>
                              handleArrayInputChange("projects", index, {
                                ...project,
                                EndDate: e.target.value,
                              })
                            }
                          />
                        </div>
                        <Input
                          placeholder="Project URL"
                          value={project.project_url}
                          onChange={(e) =>
                            handleArrayInputChange("projects", index, {
                              ...project,
                              project_url: e.target.value,
                            })
                          }
                        />
                      </div>
                    ))}
                    <Button onClick={() => handleAddArrayItem("projects")}>
                      <Plus className="mr-2 h-4 w-4" /> Add Project
                    </Button>
                  </div>
                  <div className="space-y-2">
                    <Label>Work Experience</Label>
                    {user.Experience.map((exp, index) => (
                      <div key={index} className="space-y-2">
                        <Input
                          placeholder="Company Name"
                          value={exp.company_name}
                          onChange={(e) =>
                            handleArrayInputChange("Experience", index, {
                              ...exp,
                              company_name: e.target.value,
                            })
                          }
                        />
                        <Input
                          placeholder="Role"
                          value={exp.role}
                          onChange={(e) =>
                            handleArrayInputChange("Experience", index, {
                              ...exp,
                              role: e.target.value,
                            })
                          }
                        />
                        <Textarea
                          placeholder="Description"
                          value={exp.description}
                          onChange={(e) =>
                            handleArrayInputChange("Experience", index, {
                              ...exp,
                              description: e.target.value,
                            })
                          }
                        />
                        <div className="grid gap-4 md:grid-cols-2">
                          <Input
                            type="date"
                            placeholder="Start Date"
                            value={exp.StartDate}
                            onChange={(e) =>
                              handleArrayInputChange("Experience", index, {
                                ...exp,
                                StartDate: e.target.value,
                              })
                            }
                          />
                          <Input
                            type="date"
                            placeholder="End Date"
                            value={exp.EndDate}
                            onChange={(e) =>
                              handleArrayInputChange("Experience", index, {
                                ...exp,
                                EndDate: e.target.value,
                              })
                            }
                          />
                        </div>
                      </div>
                    ))}
                    <Button onClick={() => handleAddArrayItem("Experience")}>
                      <Plus className="mr-2 h-4 w-4" /> Add Experience
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>
      </main>
    </div>
  )
}