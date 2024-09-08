import LatestBlogs from "@/components/Blogs/latestBlogs";
import { LandingNav } from "@/components/LandingNav";
import FeaturedBlogs from "@/components/Blogs/featuredBlogs";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Separator } from "@radix-ui/react-separator";

export default function Blogs() {
    return(
        <main className="relative flex justify-center items-center flex-col overflow-hidden mx-auto my-20 sm:px-10 px-5">
            <div className="max-w-7xl w-full">
                <LandingNav />
                {/* only for our E-mail */}
                <div className="w-full text-center py-8">
                    <Button className="w-[50vw] py-8 text-xl">
                        <span className="mr-3">Add</span>
                        <Plus />
                    </Button>
                </div>
                <FeaturedBlogs />
                <Separator />
                <LatestBlogs />
            </div>
        </main>
    )
}