import { latestBlogs } from "@/data/BlogsData";
import {  
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../ui/card";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function LatestBlogs() {
    return (
       <div className="my-24">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-8">
                Latest Blogs
            </h1>
            <div className="grid grid-cols-3 gap-8">
                {latestBlogs.length > 0 && latestBlogs.map((blog, _idx) => (
                    <Link href={`blogs/${blog.id}`} key={blog.id}>
                        <Card className="cursor-pointer flex flex-col h-full">
                            <CardHeader className="px-0 pt-0 flex-shrink-0">
                                <img 
                                  src={blog.thumbnail} 
                                  className="w-full h-48 object-cover rounded-lg rounded-b-none" 
                                  alt={blog.title} 
                                />
                            </CardHeader>
                            <CardFooter className="flex flex-col items-start justify-start gap-3 flex-grow">
                                <CardTitle className="text-2xl">{blog.title}</CardTitle>
                                <CardDescription className="border-l-2 border-primary pl-2">{blog.desc.substring(0, 155) + "..."}</CardDescription>
                                <div className="flex justify-between w-full">
                                    <p>{blog.updatedOn}</p>
                                    <div className="flex gap-1 text-primary hover:underline font-semibold">
                                        <span>Check now</span>
                                        <ArrowUpRight />
                                    </div>
                                </div>
                            </CardFooter>
                        </Card>
                    </Link>
                ))}
            </div>
       </div>
    )
}
