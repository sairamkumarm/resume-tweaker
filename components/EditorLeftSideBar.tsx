"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
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
	Smile,
	Star,
	Trash2,
	Globe,
	Book,
} from "lucide-react";

interface LeftSideBarProps {
	activeSection: string;
	setActiveSection: React.Dispatch<React.SetStateAction<string>>;
}

interface Entry {
	id: string;
	[key: string]: string | string[];
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
			fields: ["url", "name", "email", "phone", "picture", "headline", "location"],
		},
		{
			id: "awards",
			icon: <Trophy className="w-4 h-4" />,
			title: "Awards",
			fields: ["title", "awarder", "date", "summary", "url"],
		},
		{
			id: "skills",
			icon: <Code className="w-4 h-4" />,
			title: "Skills",
			fields: ["name", "level", "keywords", "description"],
		},
		{ id: "summary", icon: <FileText className="w-4 h-4" />, title: "Summary", fields: ["content"] },
		{
			id: "profiles",
			icon: <Settings className="w-4 h-4" />,
			title: "Profiles",
			fields: ["url", "icon", "network", "username"],
		},
		{
			id: "projects",
			icon: <FileText className="w-4 h-4" />,
			title: "Projects",
			fields: ["url", "date", "name", "summary", "keywords", "description"],
		},
		{
			id: "education",
			icon: <GraduationCap className="w-4 h-4" />,
			title: "Education",
			fields: ["url", "area", "date", "score", "summary", "studyType", "institution"],
		},
		{ id: "interests", icon: <Smile className="w-4 h-4" />, title: "Interests", fields: ["name", "keywords"] },
		{
			id: "languages",
			icon: <Languages className="w-4 h-4" />,
			title: "Languages",
			fields: ["name", "description", "level"],
		},
		{
			id: "volunteer",
			icon: <Heart className="w-4 h-4" />,
			title: "Volunteering",
			fields: ["organization", "position", "location", "date", "url"],
		},
		{
			id: "experience",
			icon: <Briefcase className="w-4 h-4" />,
			title: "Experience",
			fields: ["url", "date", "company", "summary", "location", "position"],
		},
		{
			id: "references",
			icon: <Star className="w-4 h-4" />,
			title: "References",
			fields: ["name", "description", "summary", "url"],
		},
		{
			id: "publications",
			icon: <Book className="w-4 h-4" />,
			title: "Publications",
			fields: ["name", "publisher", "date", "summary", "url"],
		},
		{
			id: "certifications",
			icon: <Award className="w-4 h-4" />,
			title: "Certifications",
			fields: ["url", "date", "name", "issuer", "summary"],
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
			newEntry[field] = field === "keywords" ? [] : "";
		});
		setResumeData((prev) => ({
			...prev,
			[section]: [...(prev[section] || []), newEntry],
		}));
	};

	const updateEntry = (section: string, id: string, field: string, value: string | string[]) => {
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
									value={(entry[field] as string[]).join(", ")}
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