"use client";

import { useState, useRef, useEffect, MouseEvent, ChangeEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import {
  ChevronRight,
  ChevronLeft,
  FileText,
  Settings,
  Download,
  Undo,
  Redo,
  ZoomIn,
  ZoomOut,
  Plus,
  Trash2,
  FileDown,
  Move,
} from "lucide-react";
import  LeftSideBar  from "@/components/EditorLeftSideBar";
import RightSideBar from "@/components/EditorRightSideBar";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

// Define types for page
interface Page {
  id: number;
  content: string;
}

const PAGE_FORMATS: {
  A4: { width: string; height: string };
  LETTER: { width: string; height: string };
} = {
  A4: { width: "210mm", height: "297mm" },
  LETTER: { width: "216mm", height: "279mm" },
};

export default function ResumeBuilder() {
  const [leftSidebarOpen, setLeftSidebarOpen] = useState<boolean>(true);
  const [rightSidebarOpen, setRightSidebarOpen] = useState<boolean>(true);
  const [activeSection, setActiveSection] = useState<string>("basics");
  const [pages, setPages] = useState<Page[]>([{ id: 1, content: "" }]);
  const [activePage, setActivePage] = useState<number>(1);
 const [pageFormat, setPageFormat] = useState<"A4" | "LETTER">("A4");
  const [zoom, setZoom] = useState<number>(100);
  const [history, setHistory] = useState<Page[][]>([[]]);
  const [historyIndex, setHistoryIndex] = useState<number>(0);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [dragStart, setDragStart] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  const resumeContainerRef = useRef<HTMLDivElement>(null);
  const resumePagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const newHistory = [...history.slice(0, historyIndex + 1), pages];
    setHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
  }, [pages]);

  const addPage = () => {
    const newPageId = pages.length + 1;
    setPages([...pages, { id: newPageId, content: "" }]);
    setActivePage(newPageId);
  };

  const deletePage = (id: number) => {
    if (pages.length > 1) {
      const newPages = pages.filter((page) => page.id !== id);
      setPages(newPages);
      setActivePage(newPages[0].id);
    }
  };

  const updatePageContent = (id: number, content: string) => {
    const updatedPages = pages.map((page) =>
      page.id === id ? { ...page, content } : page
    );
    setPages(updatedPages);
  };

  const undo = () => {
    if (historyIndex > 0) {
      setHistoryIndex(historyIndex - 1);
      setPages(history[historyIndex - 1]);
    }
  };

  const redo = () => {
    if (historyIndex < history.length - 1) {
      setHistoryIndex(historyIndex + 1);
      setPages(history[historyIndex + 1]);
    }
  };

  const handleZoom = (newZoom: number) => {
    setZoom(Math.max(10, Math.min(newZoom, 200)));
  };

  const downloadPDF = async () => {
    const pdf = new jsPDF({
      format: pageFormat.toLowerCase(),
      unit: "mm",
    });

    for (let i = 0; i < pages.length; i++) {
      const pageElement = document.getElementById(`page-${pages[i].id}`);
      if (pageElement) {
        const canvas = await html2canvas(pageElement, { scale: 2 });
        const imgData = canvas.toDataURL("image/png");

        if (i > 0) pdf.addPage();
        pdf.addImage(
          imgData,
          "PNG",
          0,
          0,
          pdf.internal.pageSize.getWidth(),
          pdf.internal.pageSize.getHeight()
        );
      }
    }

    pdf.save("resume.pdf");
  };

  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (isDragging) {
      const newX = e.clientX - dragStart.x;
      const newY = e.clientY - dragStart.y;
      setPosition({ x: newX, y: newY });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div className="flex h-screen bg-background text-foreground">
      <AnimatePresence>
        {leftSidebarOpen && (
          <LeftSideBar
            activeSection={activeSection}
            setActiveSection={setActiveSection}
          />
        )}
      </AnimatePresence>

      <div className="flex-grow flex flex-col">
        <div className="p-4 border-b border-border flex justify-between items-center">
          <Button
            variant="ghost"
            onClick={() => setLeftSidebarOpen(true)}
            className="md:hidden"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
          <h1 className="text-2xl font-bold">Resume Builder</h1>
          <Button
            variant="ghost"
            onClick={() => setRightSidebarOpen(true)}
            className="md:hidden"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
        </div>
        <div
          className="flex-grow overflow-hidden relative"
          ref={resumeContainerRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          <div
            ref={resumePagesRef}
            className="absolute"
            style={{
              transform: `translate(${position.x}px, ${position.y}px) scale(${
                zoom / 100
              })`,
              transformOrigin: "0 0",
              transition: "transform 0.1s ease-out",
            }}
          >
            {pages.map((page) => (
              <div
                key={page.id}
                id={`page-${page.id}`}
                className="bg-white shadow-xl dark:shadow-lg rounded-lg p-8 mb-8 transition-all duration-300 relative"
                style={{
                  width: PAGE_FORMATS[pageFormat].width,
                  height: PAGE_FORMATS[pageFormat].height,
                  margin: "0 auto 2rem",
                }}
              >
                <div
                  className="w-full h-full overflow-auto"
                  contentEditable
                  suppressContentEditableWarning
                  onInput={(e: ChangeEvent<HTMLDivElement>) =>
                    updatePageContent(page.id, e.currentTarget.innerHTML)
                  }
                  dangerouslySetInnerHTML={{ __html: page.content }}
                />
                {pages.length > 1 && (
                  <Button
                    variant="destructive"
                    size="icon"
                    className="absolute top-2 right-2"
                    onClick={() => deletePage(page.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="p-4 border-t border-border flex justify-between items-center">
          <div className="flex space-x-2">
            <Button onClick={undo} disabled={historyIndex === 0}>
              <Undo className="h-4 w-4 mr-2" />
              Undo
            </Button>
            <Button
              onClick={redo}
              disabled={historyIndex === history.length - 1}
            >
              <Redo className="h-4 w-4 mr-2" />
              Redo
            </Button>
            <Button onClick={addPage}>
              <Plus className="h-4 w-4 mr-2" />
              Add Page
            </Button>
          </div>
          <div className="flex space-x-2 items-center">
            <Button onClick={() => handleZoom(zoom - 10)}>
              <ZoomOut className="h-4 w-4" />
            </Button>
            <Slider
              value={[zoom]}
              onValueChange={(value) => handleZoom(value[0])}
              min={10}
              max={200}
              step={10}
              className="w-24"
            />
            <Button onClick={() => handleZoom(zoom + 10)}>
              <ZoomIn className="h-4 w-4" />
            </Button>
            <Button onClick={downloadPDF}>
              <FileDown className="h-4 w-4 mr-2" />
              Download PDF
            </Button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {rightSidebarOpen && (
          <RightSideBar />
        )}
      </AnimatePresence>
    </div>
  );
}
