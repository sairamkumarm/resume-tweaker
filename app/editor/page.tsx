"use client"

import RightSideBar from "@/components/EditorRightSideBar"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from "@/components/ui/sheet"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import {
  ChevronRight,
  ChevronLeft,
  Plus,
  Trash2,
  Image,
  Linkedin,
  Github,
  Twitter,
  Briefcase,
  GraduationCap,
  Award,
  Languages,
  Code,
  FileText,
  Trophy,
  UserPlus,
  Settings,
} from "lucide-react"
import { LeftSideBar } from "@/components/EditorLeftSideBar"

export default function ResumeBuilder() {
  const [leftSidebarOpen, setLeftSidebarOpen] = useState(true)
  const [rightSidebarOpen, setRightSidebarOpen] = useState(true)
  const [activeSection, setActiveSection] = useState("basics")
  const [pages, setPages] = useState([{ id: 1, name: "Page 1" }])
  const [activePage, setActivePage] = useState(1)

  const addPage = () => {
    const newPageId = pages.length + 1
    setPages([...pages, { id: newPageId, name: `Page ${newPageId}` }])
    setActivePage(newPageId)
  }

  const deletePage = (id:any) => {
    if (pages.length > 1) {
      const newPages = pages.filter(page => page.id !== id)
      setPages(newPages)
      setActivePage(newPages[0].id)
    }
  }
  const resumeSections = [
    { id: "basics", icon: <UserPlus className="w-4 h-4" />, title: "Basics" },
    { id: "experience", icon: <Briefcase className="w-4 h-4" />, title: "Experience" },
    { id: "education", icon: <GraduationCap className="w-4 h-4" />, title: "Education" },
    { id: "skills", icon: <Code className="w-4 h-4" />, title: "Skills" },
    { id: "languages", icon: <Languages className="w-4 h-4" />, title: "Languages" },
    { id: "projects", icon: <FileText className="w-4 h-4" />, title: "Projects" },
    { id: "publications", icon: <Award className="w-4 h-4" />, title: "Publications" },
    { id: "achievements", icon: <Trophy className="w-4 h-4" />, title: "Achievements" },
  ]

  return (
    <div className="flex h-screen bg-background text-foreground">
      {/* Left Sidebar */}
      <AnimatePresence>
        {leftSidebarOpen && (
          <LeftSideBar activeSection={activeSection} setActiveSection={setActiveSection} />
        )}
      </AnimatePresence>

      {/* Main Content Area */}
      <div className="flex-grow flex flex-col">
        <div className="p-4 border-b border-border flex justify-between items-center">
          <Button variant="ghost" onClick={() => setLeftSidebarOpen(true)} className="md:hidden">
            <ChevronRight className="h-4 w-4" />
          </Button>
          <h1 className="text-2xl font-bold">Resume Builder</h1>
          <Button variant="ghost" onClick={() => setRightSidebarOpen(true)} className="md:hidden">
            <ChevronLeft className="h-4 w-4" />
          </Button>
        </div>
        <ScrollArea className="flex-grow">
          <div className="max-w-4xl mx-auto p-4 space-y-8">
            {pages.map((page) => (
              <div key={page.id} className="bg-card shadow-lg rounded-lg p-8 w-full max-w-[21cm] min-h-[29.7cm]">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold">{page.name}</h2>
                  {pages.length > 1 && (
                    <Button variant="ghost" size="sm" onClick={() => deletePage(page.id)}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  )}
                </div>
                {/* Resume Content */}
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold">John Doe</h2>
                    <p className="text-muted-foreground">Frontend Developer | React | Next.js | TypeScript</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Experience</h3>
                    <div className="mt-2">
                      <h4 className="font-medium">Senior Frontend Developer</h4>
                      <p className="text-muted-foreground">TechCorp Inc. | 2020 - Present</p>
                      <p className="text-sm text-muted-foreground">
                        Led a team of developers in creating responsive web applications using React and Next.js.
                      </p>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Education</h3>
                    <div className="mt-2">
                      <h4 className="font-medium">Bachelor of Science in Computer Science</h4>
                      <p className="text-muted-foreground">University of Technology | 2016 - 2020</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Skills</h3>
                    <p className="text-muted-foreground">React, Next.js, TypeScript, JavaScript, HTML, CSS, Git</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
        <div className="p-4 border-t border-border flex justify-between items-center">
          <div className="flex space-x-2 overflow-x-auto">
            {pages.map((page) => (
              <Button
                key={page.id}
                variant={activePage === page.id ? "default" : "outline"}
                size="sm"
                onClick={() => setActivePage(page.id)}
              >
                {page.name}
              </Button>
            ))}
          </div>
          <Button onClick={addPage}>Add Page</Button>
        </div>
      </div>

      {/* Right Sidebar */}
      <AnimatePresence>
        {rightSidebarOpen && (
          <RightSideBar />
        )}
      </AnimatePresence>

      {/* Mobile Sidebar Sheets */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" className="fixed left-4 top-4 md:hidden">
            <FileText className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>Resume Sections</SheetTitle>
          </SheetHeader>
          <ScrollArea className="h-[calc(100vh-8rem)]">
            <div className="pr-8">
              {resumeSections.map((section) => (
                <Button
                  key={section.id}
                  variant={activeSection === section.id ? "default" : "ghost"}
                  className="w-full justify-start mb-2"
                  onClick={() => setActiveSection(section.id)}
                >
                  {section.icon}
                  <span className="ml-2">{section.title}</span>
                </Button>
              ))}
            </div>
          </ScrollArea>
        </SheetContent>
      </Sheet>

      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" className="fixed right-4 top-4 md:hidden">
            <Settings className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right">
          <SheetHeader>
            <SheetTitle>Styling Options</SheetTitle>
          </SheetHeader>
          <ScrollArea className="h-[calc(100vh-8rem)]">
            <div className="pr-8">
              {/* Styling options content (same as in the right sidebar) */}
              {/* ... */}
            </div>
          </ScrollArea>
        </SheetContent>
      </Sheet>
    </div>
  )
}