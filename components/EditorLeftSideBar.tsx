"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
	SheetFooter,
} from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useTheme } from "next-themes";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
	Image,
	Smile,
	Heart,
	Star,
	Trash2,
} from "lucide-react";

interface LeftSideBarProps {
	activeSection: string;
	setActiveSection: React.Dispatch<React.SetStateAction<string>>;
}

interface Entry {
	id: string;
	[key: string]: string;
}

export function LeftSideBar({ activeSection, setActiveSection }: LeftSideBarProps) {
	const [isCollapsed, setIsCollapsed] = useState(false);
	const [sidebarWidth, setSidebarWidth] = useState(320);
	const sidebarRef = useRef<HTMLDivElement>(null);
	const [isDragging, setIsDragging] = useState(false);
	const [entries, setEntries] = useState<Record<string, Entry[]>>({});
	const { theme } = useTheme();

	const resumeSections = [
		{ id: "basics", icon: <UserPlus className="w-4 h-4" />, title: "Basics" },
		{ id: "profiles", icon: <Settings className="w-4 h-4" />, title: "Profiles" },
		{ id: "experience", icon: <Briefcase className="w-4 h-4" />, title: "Experience" },
		{ id: "education", icon: <GraduationCap className="w-4 h-4" />, title: "Education" },
		{ id: "skills", icon: <Code className="w-4 h-4" />, title: "Skills" },
		{ id: "languages", icon: <Languages className="w-4 h-4" />, title: "Languages" },
		{ id: "projects", icon: <FileText className="w-4 h-4" />, title: "Projects" },
		{ id: "publications", icon: <Award className="w-4 h-4" />, title: "Publications" },
		{ id: "awards", icon: <Trophy className="w-4 h-4" />, title: "Awards" },
		{ id: "volunteer", icon: <Heart className="w-4 h-4" />, title: "Volunteering" },
		{ id: "interests", icon: <Smile className="w-4 h-4" />, title: "Interests" },
		{ id: "references", icon: <Star className="w-4 h-4" />, title: "References" },
		{ id: "certifications", icon: <FileText className="w-4 h-4" />, title: "Certifications" },
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
		setEntries((prev) => ({
			...prev,
			[section]: [...(prev[section] || []), newEntry],
		}));
	};

	const updateEntry = (section: string, id: string, field: string, value: string) => {
		setEntries((prev) => ({
			...prev,
			[section]: prev[section].map((entry) => (entry.id === id ? { ...entry, [field]: value } : entry)),
		}));
	};

	const deleteEntry = (section: string, id: string) => {
		setEntries((prev) => ({
			...prev,
			[section]: prev[section].filter((entry) => entry.id !== id),
		}));
	};

	const renderEntryFields = (section: string, entry: Entry) => {
		switch (section) {
			case "basics":
				return (
					<Card key={entry.id} className="mb-4">
						<CardHeader>
							<CardTitle>Basic Information</CardTitle>
							<CardDescription>Enter your personal details</CardDescription>
						</CardHeader>
						<CardContent className="space-y-4">
							<div>
								<Label htmlFor={`name-${entry.id}`}>Name</Label>
								<Input
									id={`name-${entry.id}`}
									value={entry.name || ""}
									onChange={(e) => updateEntry(section, entry.id, "name", e.target.value)}
									placeholder="John Doe"
								/>
							</div>
							<div>
								<Label htmlFor={`email-${entry.id}`}>Email</Label>
								<Input
									id={`email-${entry.id}`}
									type="email"
									value={entry.email || ""}
									onChange={(e) => updateEntry(section, entry.id, "email", e.target.value)}
									placeholder="john.doe@example.com"
								/>
							</div>
							<div>
								<Label htmlFor={`phone-${entry.id}`}>Phone</Label>
								<Input
									id={`phone-${entry.id}`}
									value={entry.phone || ""}
									onChange={(e) => updateEntry(section, entry.id, "phone", e.target.value)}
									placeholder="(555) 123-4567"
								/>
							</div>
							<Button variant="destructive" size="sm" onClick={() => deleteEntry(section, entry.id)}>
								<Trash2 className="w-4 h-4 mr-2" /> Delete
							</Button>
						</CardContent>
					</Card>
				);
			case "skills":
			case "languages":
			case "interests":
				return (
					<Card key={entry.id} className="mb-4">
						<CardHeader>
							<CardTitle>{section.charAt(0).toUpperCase() + section.slice(1)} Entry</CardTitle>
							<CardDescription>Add your {section}</CardDescription>
						</CardHeader>
						<CardContent className="space-y-4">
							<div>
								<Label htmlFor={`name-${entry.id}`}>Name</Label>
								<Input
									id={`name-${entry.id}`}
									value={entry.name || ""}
									onChange={(e) => updateEntry(section, entry.id, "name", e.target.value)}
									placeholder={`${section.charAt(0).toUpperCase() + section.slice(1)} name`}
								/>
							</div>
							<div>
								<Label htmlFor={`level-${entry.id}`}>Level (optional)</Label>
								<Input
									id={`level-${entry.id}`}
									value={entry.level || ""}
									onChange={(e) => updateEntry(section, entry.id, "level", e.target.value)}
									placeholder="Beginner / Intermediate / Advanced"
								/>
							</div>
							<Button variant="destructive" size="sm" onClick={() => deleteEntry(section, entry.id)}>
								<Trash2 className="w-4 h-4 mr-2" /> Delete
							</Button>
						</CardContent>
					</Card>
				);
			default:
				return (
					<Card key={entry.id} className="mb-4">
						<CardHeader>
							<CardTitle>{section.charAt(0).toUpperCase() + section.slice(1)} Entry</CardTitle>
							<CardDescription>Add details for this entry</CardDescription>
						</CardHeader>
						<CardContent className="space-y-4">
							<div>
								<Label htmlFor={`title-${entry.id}`}>Title</Label>
								<Input
									id={`title-${entry.id}`}
									value={entry.title || ""}
									onChange={(e) => updateEntry(section, entry.id, "title", e.target.value)}
									placeholder="Enter title"
								/>
							</div>
							<div>
								<Label htmlFor={`description-${entry.id}`}>Description</Label>
								<Textarea
									id={`description-${entry.id}`}
									value={entry.description || ""}
									onChange={(e) => updateEntry(section, entry.id, "description", e.target.value)}
									placeholder="Enter description"
								/>
							</div>
							<Button variant="destructive" size="sm" onClick={() => deleteEntry(section, entry.id)}>
								<Trash2 className="w-4 h-4 mr-2" /> Delete
							</Button>
						</CardContent>
					</Card>
				);
		}
	};

	const renderSheetContent = (section: string) => {
		const sectionEntries = entries[section] || [];

		return (
			<div className="flex flex-col h-full">
				<ScrollArea className="flex-grow pr-4">
					{sectionEntries.map((entry) => renderEntryFields(section, entry))}
					{sectionEntries.length === 0 && (
						<p className="text-center text-gray-500">No entries yet. Add some!</p>
					)}
				</ScrollArea>
				<div className="mt-4 space-y-2 mb-12">
					<Button onClick={() => addEntry(section)} className="w-full">
						<Plus className="w-4 h-4 mr-2" /> Add New Entry
					</Button>
					<Button variant="ghost" type="submit" className="w-full">
						Save Changes
					</Button>
				</div>
			</div>
		);
	};

	return (
		<div
			ref={sidebarRef}
			className={`relative h-screen border-r transition-all duration-300 ease-in-out ${
				isCollapsed ? "w-16" : ""
			} ${theme === "dark" ? "bg-zinc-900 border-zinc-700" : "bg-zinc-100 border-zinc-200"}`}
			style={{ width: isCollapsed ? "4rem" : `${sidebarWidth}px` }}
		>
			<div className="flex flex-col h-full">
				<div
					className={`p-4 border-b flex justify-between items-center ${
						theme === "dark" ? "border-zinc-700" : "border-zinc-200"
					}`}
				>
					{!isCollapsed && (
						<h2 className={`text-lg font-semibold ${theme === "dark" ? "text-zinc-100" : "text-zinc-800"}`}>
							Resume Sections
						</h2>
					)}
					<Button
						variant="ghost"
						size="icon"
						onClick={() => setIsCollapsed(!isCollapsed)}
						className={
							theme === "dark" ? "text-zinc-400 hover:text-zinc-200" : "text-zinc-500 hover:text-zinc-700"
						}
					>
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
				className={`absolute top-0 right-0 w-1 h-full cursor-ew-resize ${
					theme === "dark" ? "bg-zinc-700 hover:bg-zinc-600" : "bg-zinc-300 hover:bg-zinc-400"
				}`}
				onMouseDown={() => setIsDragging(true)}
			/>
		</div>
	);
}