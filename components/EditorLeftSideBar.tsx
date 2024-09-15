import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from "@/components/ui/sheet"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Label } from "./ui/label"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { SetStateAction, useState } from "react"
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

interface LeftSideBarProps {
  activeSection: string;
  setActiveSection: React.Dispatch<SetStateAction<string>>;
}

export const LeftSideBar: React.FC<LeftSideBarProps> = ({ activeSection, setActiveSection }) => {


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
        <div
            className="w-80 bg-card border-r border-border flex flex-col hidden md:flex"
          >
            <div className="p-4 border-b border-border">
              <h2 className="text-lg font-semibold">Resume Sections</h2>
            </div>
            <ScrollArea className="flex-grow">
              <div className="p-4 space-y-4">
                {resumeSections.map((section) => (
                  <Button
                    key={section.id}
                    variant={activeSection === section.id ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setActiveSection(section.id)}
                  >
                    {section.icon}
                    <span className="ml-2">{section.title}</span>
                  </Button>
                ))}
              </div>
            </ScrollArea>
            <div className="p-4 border-t border-border">
              <Sheet>
                <SheetTrigger asChild>
                  <Button className="w-full">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Custom Section
                  </Button>
                </SheetTrigger>
                <SheetContent side="left">
                  <SheetHeader>
                    <SheetTitle>Add Custom Section</SheetTitle>
                    <SheetDescription>Create a new custom section for your resume.</SheetDescription>
                  </SheetHeader>
                  <div className="py-4">
                    <Label htmlFor="section-name">Section Name</Label>
                    <Input id="section-name" placeholder="e.g., Volunteer Experience" />
                  </div>
                  <SheetFooter>
                    <Button type="submit">Add Section</Button>
                  </SheetFooter>
                </SheetContent>
              </Sheet>
            </div>
          </div>
    )
}