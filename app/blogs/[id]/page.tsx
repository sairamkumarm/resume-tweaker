"use client";
import { useState } from 'react'
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { Breadcrumbs } from '@/components/BlogBreadCrumbs';


export default function BlogPost() {
 
  const [isLoading, setIsLoading] = useState(false)

  const blog = {
    id:1,
    title: "The Future of Web Development",
    excerpt: "Exploring upcoming trends and technologies shaping the web.",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    image: "/blogImages/blog5.png",
    date: "2023-08-15",
    readTime: "5 min read",
    category: "Technology",
  }

  if (isLoading) {
    return <BlogPostSkeleton />
  }

  if (!blog) {
    return <div>Blog post not found</div>
  }

  return (
    <article className="container mx-auto px-4 py-16 max-w-4xl">
      <Breadcrumbs />
      <header className="mb-8">
        <Badge className="mb-4">{blog.category}</Badge>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">
          {blog.title}
        </h1>
        <div className="flex flex-wrap items-center text-muted-foreground gap-4">
          <div className="flex items-center">
            <User className="mr-2 h-4 w-4" />
            <span>Wibblit</span>
          </div>
          <div className="flex items-center">
            <Calendar className="mr-2 h-4 w-4" />
            <span>{blog.date}</span>
          </div>
          <div className="flex items-center">
            <Clock className="mr-2 h-4 w-4" />
            <span>{blog.readTime}</span>
          </div>
        </div>
      </header>
      <div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden">
        <Image
          src={blog.image}
          alt={blog.title}
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      <div className="prose prose-lg max-w-none">
        {blog.content.split('\n').map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      <div className="mt-12 flex justify-between items-center">
        <Button variant="outline" asChild>
          <Link href="/blogs">Back to all blogs</Link>
        </Button>
        <div className="flex gap-4">
          <Button variant="outline">Share</Button>
          <Button>Subscribe</Button>
        </div>
      </div>
    </article>
  )
}

function BlogPostSkeleton() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <Skeleton className="h-6 w-40 mb-8" />
      <Skeleton className="h-12 w-full mb-4" />
      <Skeleton className="h-6 w-3/4 mb-8" />
      <Skeleton className="h-[400px] w-full mb-8 rounded-lg" />
      <div className="space-y-4">
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-6 w-3/4" />
      </div>
    </div>
  )
}