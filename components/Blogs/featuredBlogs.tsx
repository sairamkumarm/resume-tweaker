import { featuredBlogs } from "@/data/BlogsData";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import Link from "next/link";

export default function FeaturedBlogs() {
    return(
       <div className="my-8">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-8">
                Featured Blogs
            </h1>
            <div className="grid grid-cols-3 grid-rows-2 w-full gap-4">
              {featuredBlogs.length > 0 && featuredBlogs.map((blog, idx) => (
                <Link href={`blogs/${blog.id}`} key={blog.id}  
                className={`${
                    idx === 0 || idx === featuredBlogs.length-2
                    ? "col-span-2 row-span-2 min-h-[25rem] max-h-[55rem]"  
                    : "col-span-1 row-span-1 h-auto" 
                  } relative rounded-md overflow-hidden cursor-pointer`}>
                    <Card key={idx} className="overflow-hidden relative">
                        <img 
                          src={blog.thumbnail} 
                          className="bottom-0 w-full h-full object-fill overflow-hidden shadow-inner rounded-md shadow-purple-950" 
                          alt={blog.title} 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-purple-900/30 to-transparent z-[10]"></div>
                        {(idx === 0 || idx === featuredBlogs.length-2) ? (
                            <CardFooter className="absolute flex flex-col items-start gap-4 bottom-4 z-20 text-white">
                                 <CardTitle className="text-2xl">{blog.title}</CardTitle>
                                 <CardDescription>{blog.desc}</CardDescription>
                            </CardFooter>
                        ) : (
                            <CardHeader className="absolute flex flex-col items-start gap-4 top-1/2 transform -translate-y-1/2 z-20 text-white">
                                 <CardTitle className="text-2xl">{blog.title}</CardTitle>
                                 <CardDescription>{blog.desc.substring(0, 150) + "..."}</CardDescription>
                            </CardHeader>
                        )}
                    </Card>
                </Link>
              ))}
            </div>
       </div>
    )
}
