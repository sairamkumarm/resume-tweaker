import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import SidebarContent from "./SideBar";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";

interface props {
    isSidebarOpen: boolean;
    setIsSidebarOpen: (open: boolean) => void;
}

export const MobileSideBar: React.FC<props> = ({ isSidebarOpen, setIsSidebarOpen }) => {
    return (
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
    )
}