import { useState } from "react"
import { useTheme } from "next-themes"
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
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { ChevronRight, ChevronDown } from "lucide-react"

export default function RightSideBar() {
  const { theme, setTheme } = useTheme()
  const [dark, setDark] = useState<boolean>(theme === "dark")
  const [margin, setMargin] = useState<number>(20)
  const [paperFormat, setPaperFormat] = useState<string>("A4")

  const handleDarkModeChange = (checked: boolean) => {
    setDark(checked)
    setTheme(checked ? "dark" : "light")
  }

  const handleMarginChange = (value: number[]) => {
    setMargin(value[0])
  }

  const handlePaperFormatChange = (value: string) => {
    setPaperFormat(value)
  }

  const handleExport = (format: "JSON" | "PDF") => {
    // Implement export logic here
    console.log(`Exporting as ${format}`)
  }

  return (
    <div className="w-80 bg-card border-l border-border flex flex-col hidden md:flex">
      <div className="p-4 border-b border-border">
        <h2 className="text-lg font-semibold">Styling Options</h2>
      </div>
      <ScrollArea className="flex-grow">
        <div className="p-4 space-y-6">
          <div>
            <Label>Template</Label>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="w-full justify-between mt-2">
                  Select a template
                  <ChevronRight className="h-4 w-4 opacity-50" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Choose a Template</SheetTitle>
                  <SheetDescription>Select a template for your resume.</SheetDescription>
                </SheetHeader>
                <div className="grid gap-4 py-4">
                  <Button className="justify-start">Modern</Button>
                  <Button className="justify-start">Classic</Button>
                  <Button className="justify-start">Minimal</Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
          <div>
            <Label>Font Family</Label>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="w-full justify-between mt-2">
                  Select a font
                  <ChevronRight className="h-4 w-4 opacity-50" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Choose a Font</SheetTitle>
                  <SheetDescription>Select a font family for your resume.</SheetDescription>
                </SheetHeader>
                <div className="grid gap-4 py-4">
                  <Button className="justify-start">Sans-serif</Button>
                  <Button className="justify-start">Serif</Button>
                  <Button className="justify-start">Monospace</Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
          <div>
            <Label>Font Size</Label>
            <Slider defaultValue={[14]} max={24} min={10} step={1} className="mt-2" />
          </div>
          <div>
            <Label>Line Height</Label>
            <Slider defaultValue={[1.5]} max={2} min={1} step={0.1} className="mt-2" />
          </div>
          <div>
            <Label>Margin (mm)</Label>
            <div className="flex items-center space-x-2 mt-2">
              <Slider
                value={[margin]}
                onValueChange={handleMarginChange}
                max={50}
                min={0}
                step={1}
                className="flex-grow"
              />
              <Input
                type="number"
                value={margin}
                onChange={(e) => setMargin(Number(e.target.value))}
                className="w-16"
              />
            </div>
          </div>
          <div>
            <Label>Paper Format</Label>
            <Select value={paperFormat} onValueChange={handlePaperFormatChange}>
              <SelectTrigger className="w-full mt-2">
                <SelectValue placeholder="Select format" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="A4">A4</SelectItem>
                <SelectItem value="Letter">Letter</SelectItem>
                <SelectItem value="Legal">Legal</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label>Theme Color</Label>
            <div className="flex flex-wrap gap-2 mt-2">
              {["bg-blue-500", "bg-green-500", "bg-red-500", "bg-purple-500", "bg-yellow-500", "bg-pink-500", "bg-indigo-500", "bg-teal-500"].map((color) => (
                <button
                  key={color}
                  className={`w-8 h-8 rounded-full ${color} border-2 border-background focus:outline-none focus:ring-2 focus:ring-ring`}
                />
              ))}
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Switch id="dark-mode" checked={dark} onCheckedChange={handleDarkModeChange} />
            <Label htmlFor="dark-mode">Dark Mode</Label>
          </div>
        </div>
      </ScrollArea>
      <div className="p-4 border-t border-border">
        <Popover>
          <PopoverTrigger asChild>
            <Button className="w-full">
              Export
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-56 p-2">
            <div className="grid gap-y-4">
              <div className="w-full cursor-pointer hover:bg-secondary px-2" onClick={() => handleExport("JSON")}>Export as JSON</div>
              <div className="w-full cursor-pointer hover:bg-secondary px-2" onClick={() => handleExport("PDF")}>Export as PDF</div>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  )
}