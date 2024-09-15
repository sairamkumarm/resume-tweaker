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
  import { Button } from "./ui/button"
  import { ChevronRight } from "lucide-react"
  import { Slider } from "@/components/ui/slider"
  import { Switch } from "@/components/ui/switch"
  import { useTheme } from "next-themes"
import { useState } from "react"
  

export default function RightSideBar() {
    const {theme, setTheme } = useTheme();
    const [dark, setDark] = useState<boolean>(theme === "dark" ? true : false);
    if(dark) {
      setTheme("dark")
    } else {
      setTheme("light")
    }
    return(
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
                      <Button variant="outline" className="w-full justify-between">
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
                      <Button variant="outline" className="w-full justify-between">
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
                  <Slider defaultValue={[14]} max={24} min={10} step={1} />
                </div>
                <div>
                  <Label>Line Height</Label>
                  <Slider defaultValue={[1.5]} max={2} min={1} step={0.1} />
                </div>
                <div>
                  <Label>Theme Color</Label>
                  <div className="flex space-x-2 mt-2">
                    {["bg-blue-500", "bg-green-500", "bg-red-500", "bg-purple-500", "bg-yellow-500"].map((color) => (
                      <button
                        key={color}
                        className={`w-8 h-8 rounded-full ${color} border-2 border-background focus:outline-none focus:ring-2 focus:ring-ring`}
                      />
                    ))}
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="dark-mode" checked={dark} onCheckedChange={setDark} />
                  <Label htmlFor="dark-mode">Dark Mode</Label>
                </div>
              </div>
            </ScrollArea>
            <div className="p-4 border-t border-border">
              <Button className="w-full">Export PDF</Button>
            </div>
          </div>
    )
}