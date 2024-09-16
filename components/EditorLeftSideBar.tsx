'use client'

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useTheme } from "next-themes";
import {
  ChevronLeft,
  ChevronRight,
  Plus,
  UserPlus,
  Briefcase,
  GraduationCap,
  Code,
  Languages,
  FileText,
  Award,
  Trophy,
  Settings,
  Heart,
  Star,
  Trash2,
  Book,
} from "lucide-react";

interface LeftSideBarProps {
  activeSection: string;
  setActiveSection: React.Dispatch<React.SetStateAction<string>>;
}

type URL = {
  href: string;
  label: string;
};

type Skill = {
  name: string;
  level?: 1 | 2 | 3 | 4 | 5 | "Beginner" | "Intermediate" | "Advanced";
};

type SkillCategory = {
  id: string;
  name: string;
  skills: Skill[];
};

interface Entry {
  id: string;
  [key: string]: string | string[] | URL | File | undefined | SkillCategory[];
}

interface ResumeSection {
  id: string;
  icon: JSX.Element;
  title: string;
  fields: string[];
}

export default function LeftSideBar({ activeSection, setActiveSection }: LeftSideBarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [sidebarWidth, setSidebarWidth] = useState(320);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [resumeData, setResumeData] = useState<Record<string, Entry[]>>({});
  const { theme } = useTheme();

  const resumeSections: ResumeSection[] = [
    {
      id: "basics",
      icon: <UserPlus className="w-4 h-4" />,
      title: "Basics",
      fields: ["url", "name", "email", "phone", "location", "headLine", "picture"],
    },
    { id: "summary", icon: <FileText className="w-4 h-4" />, title: "Summary", fields: ["content"] },
    {
      id: "profiles",
      icon: <Settings className="w-4 h-4" />,
      title: "Profiles",
      fields: ["url"],
    },
    {
      id: "skills",
      icon: <Code className="w-4 h-4" />,
      title: "Skills",
      fields: ["categories"],
    },
    {
      id: "projects",
      icon: <FileText className="w-4 h-4" />,
      title: "Projects",
      fields: ["url", "name", "summary", "startDate", "endDate", "keywords"],
    },
    {
      id: "education",
      icon: <GraduationCap className="w-4 h-4" />,
      title: "Education",
      fields: ["institution", "degree", "field", "specialization", "startDate", "endDate", "score"],
    },
    {
      id: "experience",
      icon: <Briefcase className="w-4 h-4" />,
      title: "Experience",
      fields: ["organization", "role", "startDate", "endDate", "location", "summary"],
    },
    {
      id: "languages",
      icon: <Languages className="w-4 h-4" />,
      title: "Languages",
      fields: ["name", "level"],
    },
    {
      id: "volunteer",
      icon: <Heart className="w-4 h-4" />,
      title: "Volunteering",
      fields: ["organization", "role", "location", "startDate", "endDate"],
    },
    {
      id: "awards",
      icon: <Trophy className="w-4 h-4" />,
      title: "Awards",
      fields: ["title", "awarder", "date", "summary"],
    },
    {
      id: "publications",
      icon: <Book className="w-4 h-4" />,
      title: "Publications",
      fields: ["name", "publisher", "publishedIn", "url", "date"],
    },
    {
      id: "certifications",
      icon: <Award className="w-4 h-4" />,
      title: "Certifications",
      fields: ["name", "issuer", "date", "url"],
    },
    {
      id: "references",
      icon: <Star className="w-4 h-4" />,
      title: "References",
      fields: ["name", "phone", "email"],
    },
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const newWidth = e.clientX;
      if (newWidth > 200 && newWidth < 600) {
        setSidebarWidth(newWidth);
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  const addEntry = (section: string) => {
    const newEntry: Entry = { id: Date.now().toString() };
    const sectionFields = resumeSections.find((s) => s.id === section)?.fields || [];
    sectionFields.forEach((field) => {
      if (field === "url") {
        newEntry[field] = { href: "", label: "" };
      } else if (field === "categories" && section === "skills") {
        newEntry[field] = [];
      } else {
        newEntry[field] = "";
      }
    });
    setResumeData((prev) => ({
      ...prev,
      [section]: [...(prev[section] || []), newEntry],
    }));
  };

  const updateEntry = (section: string, id: string, field: string, value: any) => {
    setResumeData((prev) => ({
      ...prev,
      [section]: prev[section].map((entry) => (entry.id === id ? { ...entry, [field]: value } : entry)),
    }));
  };

  const deleteEntry = (section: string, id: string) => {
    setResumeData((prev) => ({
      ...prev,
      [section]: prev[section].filter((entry) => entry.id !== id),
    }));
  };

  const addSkillCategory = (entryId: string) => {
    setResumeData((prev) => ({
      ...prev,
      skills: prev.skills.map((entry) => {
        if (entry.id === entryId) {
          const categories = entry.categories as SkillCategory[] || [];
          return {
            ...entry,
            categories: [
              ...categories,
              { id: Date.now().toString(), name: "", skills: [] },
            ],
          };
        }
        return entry;
      }),
    }));
  };

  const deleteSkillCategory = (entryId: string, categoryId: string) => {
    setResumeData((prev) => ({
      ...prev,
      skills: prev.skills.map((entry) => {
        if (entry.id === entryId) {
          const categories = entry.categories as SkillCategory[] || [];
          return {
            ...entry,
            categories: categories.filter((category) => category.id !== categoryId),
          };
        }
        return entry;
      }),
    }));
  };

  const addSkill = (entryId: string, categoryId: string) => {
    setResumeData((prev) => ({
      ...prev,
      skills: prev.skills.map((entry) => {
        if (entry.id === entryId) {
          const categories = entry.categories as SkillCategory[] || [];
          return {
            ...entry,
            categories: categories.map((category) => {
              if (category.id === categoryId) {
                return {
                  ...category,
                  skills: [...category.skills, { name: "", level: undefined }],
                };
              }
              return category;
            }),
          };
        }
        return entry;
      }),
    }));
  };

  const deleteSkill = (entryId: string, categoryId: string, skillIndex: number) => {
    setResumeData((prev) => ({
      ...prev,
      skills: prev.skills.map((entry) => {
        if (entry.id === entryId) {
          const categories = entry.categories as SkillCategory[] || [];
          return {
            ...entry,
            categories: categories.map((category) => {
              if (category.id === categoryId) {
                return {
                  ...category,
                  skills: category.skills.filter((_, index) => index !== skillIndex),
                };
              }
              return category;
            }),
          };
        }
        return entry;
      }),
    }));
  };

  const renderEntryFields = (section: string, entry: Entry, index: number) => {
    const fields = resumeSections.find((s) => s.id === section)?.fields || [];
    return (
      <div key={entry.id} className="mb-8">
        <h3 className="text-lg font-semibold mb-4">
          {section.charAt(0).toUpperCase() + section.slice(1)} {index + 1}
        </h3>
        <div className="space-y-4">
          {fields.map((field) => (
            <div key={field}>
              <Label htmlFor={`${field}-${entry.id}`}>
                {field.charAt(0).toUpperCase() + field.slice(1)}
              </Label>
              {field === "summary" || field === "content" ? (
                <Textarea
                  id={`${field}-${entry.id}`}
                  value={(entry[field] as string) || ""}
                  onChange={(e) => updateEntry(section, entry.id, field, e.target.value)}
                  placeholder={`Enter ${field}`}
                />
              ) : field === "keywords" ? (
                <Input
                  id={`${field}-${entry.id}`}
                  value={((entry[field] as string[]) || []).join(", ")}
                  onChange={(e) =>
                    updateEntry(
                      section,
                      entry.id,
                      field,
                      e.target.value.split(",").map((item) => item.trim())
                    )
                  }
                  placeholder={`Enter ${field} (comma-separated)`}
                />
              ) : field === "url" ? (
                <div className="space-y-2">
                  <Input
                    id={`${field}-href-${entry.id}`}
                    value={(entry[field] as URL)?.href || ""}
                    onChange={(e) => updateEntry(section, entry.id, field, { ...(entry[field] as URL), href: e.target.value })}
                    placeholder="Enter URL"
                    type="url"
                  />
                  <Input
                    id={`${field}-label-${entry.id}`}
                    value={(entry[field] as URL)?.label || ""}
                    onChange={(e) => updateEntry(section, entry.id, field, { ...(entry[field] as URL), label: e.target.value })}
                    placeholder="Enter label"
                  />
                </div>
              ) : field === "picture" ? (
                <Input
                  id={`${field}-${entry.id}`}
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      updateEntry(section, entry.id, field, file);
                    }
                  }}
                  type="file"
                  accept="image/*"
                />
              ) : field === "startDate" || field === "endDate" || field === "date" ? (
                <Input
                  id={`${field}-${entry.id}`}
                  value={(entry[field] as string) || ""}
                  onChange={(e) => updateEntry(section, entry.id, field, e.target.value)}
                  placeholder={`Enter ${field} (YYYY-MM)`}
                  type="month"
                />
              ) : field === "level" ? (
                <Select
                  onValueChange={(value) => updateEntry(section, entry.id, field, value)}
                  defaultValue={(entry[field] as string) || undefined}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select level" />
                  </SelectTrigger>
                  <SelectContent>
                    {[1, 2, 3, 4, 5, "Beginner", "Intermediate", "Advanced"].map((level) => (
                      <SelectItem key={level.toString()} value={level.toString()}>
                        {level}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              ) : field === "categories" && section === "skills" ? (
                <div className="space-y-4">
                  {((entry[field] as SkillCategory[]) || []).map((category, categoryIndex) => (
                    <div key={category.id} className="border p-4 rounded-md">
                      <Input
                        value={category.name}
                        onChange={(e) => {
                          const updatedCategories = [...(entry[field] as SkillCategory[])];
                          updatedCategories[categoryIndex].name = e.target.value;
                          updateEntry(section, entry.id, field, updatedCategories);
                        }}
                        placeholder="Category name"
                        className="mb-2"
                      />
                      {category.skills.map((skill, skillIndex) => (
                        <div key={skillIndex} className="flex items-center space-x-2 mb-2">
                          <Input
                            value={skill.name}
                            onChange={(e) => {
                              const updatedCategories = [...(entry[field] as SkillCategory[])];
                              updatedCategories[categoryIndex].skills[skillIndex].name = e.target.value;
                              updateEntry(section, entry.id, field, updatedCategories);
                            }}
                            placeholder="Skill name"
                          />
                          <Select
                            onValueChange={(value) => {
                              const updatedCategories = [...(entry[field] as SkillCategory[])];
                              updatedCategories[categoryIndex].skills[skillIndex].level = value as Skill['level'];
                              updateEntry(section, entry.id, field, updatedCategories);
                            }}
                            defaultValue={skill.level?.toString()}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select level" />
                            </SelectTrigger>
                            <SelectContent>
                              {[1, 2, 3, 4, 5, "Beginner", "Intermediate", "Advanced"].map((level) => (
                                <SelectItem key={level.toString()} value={level.toString()}>
                                  {level}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <Button
                            variant="destructive"
                            size="sm"
                            onClick={() => deleteSkill(entry.id, category.id, skillIndex)}
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      ))}
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => addSkill(entry.id, category.id)}
                        className="mr-2"
                      >
                        Add Skill
                      </Button>
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => deleteSkillCategory(entry.id, category.id)}
                      >
                        Delete Category
                      </Button>
                    </div>
                  ))}
                  <Button variant="outline" onClick={() => addSkillCategory(entry.id)}>
                    Add Category
                  </Button>
                </div>
              ) : (
                <Input
                  id={`${field}-${entry.id}`}
                  value={(entry[field] as string) || ""}
                  onChange={(e) => updateEntry(section, entry.id, field, e.target.value)}
                  placeholder={`Enter ${field}`}
                />
              )}
            </div>
          ))}
          <Button variant="destructive" size="sm" onClick={() => deleteEntry(section, entry.id)}>
            <Trash2 className="w-4 h-4 mr-2" /> Delete
          </Button>
        </div>
      </div>
    );
  };

  const renderSheetContent = (section: string) => {
    const sectionEntries = resumeData[section] || [];

    return (
      <div className="flex flex-col h-full">
        <ScrollArea className="flex-grow pr-4 my-8">
          {sectionEntries.map((entry, index) => renderEntryFields(section, entry, index))}
          {sectionEntries.length === 0 && (
            <p className="text-center text-muted-foreground">No entries yet. Add some!</p>
          )}
        </ScrollArea>
        <div className="mt-4 space-y-2 mb-12">
          <Button onClick={() => addEntry(section)} className="w-full">
            <Plus className="w-4 h-4 mr-2" /> Add New Entry
          </Button>
          <Button variant="outline" onClick={() => saveChanges(section)} className="w-full">
            Save Changes
          </Button>
        </div>
      </div>
    );
  };

  const saveChanges = (section: string) => {
    console.log(`Saving changes for ${section}:`, resumeData[section]);
    // Here you would typically send the data to your backend or update your state management system
  };

  return (
    <div
      ref={sidebarRef}
      className={`relative h-screen border-r transition-all duration-300 ease-in-out ${
        isCollapsed ? "w-16" : ""
      }`}
      style={{ width: isCollapsed ? "4rem" : `${sidebarWidth}px` }}
    >
      <div className="flex flex-col h-full">
        <div className="p-4 border-b flex justify-between items-center">
          {!isCollapsed && <h2 className="text-lg font-semibold">Resume Sections</h2>}
          <Button variant="ghost" size="icon" onClick={() => setIsCollapsed(!isCollapsed)}>
            {isCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
          </Button>
        </div>
        <ScrollArea className="flex-grow">
          <div className="p-4 space-y-4">
            {resumeSections.map((section) => (
              <Sheet key={section.id}>
                <SheetTrigger asChild>
                  <Button
                    variant={activeSection === section.id ? "default" : "ghost"}
                    className={`w-full justify-start ${isCollapsed ? "px-2" : ""}`}
                    onClick={() => setActiveSection(section.id)}
                  >
                    {section.icon}
                    {!isCollapsed && <span className="ml-2">{section.title}</span>}
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[400px] sm:w-[540px]">
                  <SheetHeader>
                    <SheetTitle>Edit {section.title}</SheetTitle>
                    <SheetDescription>Modify or add new entries to this section.</SheetDescription>
                  </SheetHeader>
                  {renderSheetContent(section.id)}
                </SheetContent>
              </Sheet>
            ))}
          </div>
        </ScrollArea>
      </div>
      <div
        className="absolute top-0 right-0 w-1 h-full cursor-ew-resize bg-border hover:bg-muted"
        onMouseDown={() => setIsDragging(true)}
      />
    </div>
  );
}

