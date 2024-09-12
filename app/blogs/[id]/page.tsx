'use client'

import { useState, useEffect } from 'react'
import { Calendar, Clock, User, ChevronUp, ChevronDown } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Breadcrumbs } from '@/components/BlogBreadCrumbs'

export default function BlogPost() {
  const [activeSection, setActiveSection] = useState('')
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [isTableOfContentsOpen, setIsTableOfContentsOpen] = useState(false)

  const blog = {
    id: 1,
    title: "The Future of Web Development",
    excerpt: "Exploring upcoming trends and technologies shaping the web.",
    image: "/blogImages/blog5.png",
    date: "2023-08-15",
    readTime: "5 min read",
    category: "Technology",
    author: "Wibblit",
    sections: [
      {
        id: 'introduction',
        title: 'Introduction',
        content: "The landscape of web development is constantly evolving, with new technologies and methodologies emerging at a rapid pace. As we look towards the future, it's crucial for developers to stay ahead of the curve and anticipate the changes that will shape our industry."
      },
      {
        id: 'ai-driven-development',
        title: 'AI-Driven Development',
        content: "Artificial Intelligence is set to revolutionize the way we approach web development. From AI-assisted coding to intelligent debugging tools, developers will soon have powerful allies in their daily work. This shift will not only increase productivity but also open up new possibilities for creating more intuitive and personalized web experiences."
      },
      {
        id: 'serverless-architecture',
        title: 'Serverless Architecture',
        content: "The move towards serverless architecture is gaining momentum. This approach allows developers to focus on writing code without the need to manage server infrastructure. As serverless platforms mature, we can expect to see more complex applications leveraging this technology, leading to faster development cycles and more scalable solutions."
      },
      {
        id: 'web-assembly',
        title: 'Web Assembly',
        content: "Web Assembly (Wasm) is poised to bring near-native performance to web applications. This technology allows developers to run code written in languages like C++ and Rust in the browser, opening up new possibilities for web-based games, complex visualizations, and high-performance applications."
      },
      {
        id: 'conclusion',
        title: 'Conclusion',
        content: "The future of web development is bright and full of exciting possibilities. As we embrace new technologies and methodologies, we'll be able to create more powerful, efficient, and user-friendly web applications. Staying informed and adaptable will be key for developers looking to thrive in this ever-changing landscape."
      }
    ]
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section')
      const scrollPosition = window.scrollY

      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.clientHeight

        if (scrollPosition >= sectionTop - 100 && scrollPosition < sectionTop + sectionHeight - 100) {
          setActiveSection(section.id)
        }
      })

      setShowScrollTop(scrollPosition > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (!blog) {
    return <div>Blog post not found</div>
  }

  return (
    <article className="container mx-auto px-4 py-8 max-w-4xl">
      <Breadcrumbs currPage={blog.title} />
      <header className="mb-8">
        <Badge className="mb-4">{blog.category}</Badge>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">
          {blog.title}
        </h1>
        <div className="flex flex-wrap items-center text-muted-foreground gap-4">
          <div className="flex items-center">
            <User className="mr-2 h-4 w-4" />
            <span>{blog.author}</span>
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
      <Card className="mb-8">
        <CardContent className="p-4">
          <Button
            variant="ghost"
            className="w-full flex justify-between items-center"
            onClick={() => setIsTableOfContentsOpen(!isTableOfContentsOpen)}
          >
            <span className="text-lg font-semibold">Table of Contents</span>
            {isTableOfContentsOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </Button>
          {isTableOfContentsOpen && (
            <nav className="mt-4">
              <ul className="space-y-2">
                {blog.sections.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className={`block py-1 px-2 rounded transition-colors ${
                        activeSection === section.id
                          ? 'bg-primary text-primary-foreground'
                          : 'hover:bg-muted'
                      }`}
                    >
                      {section.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </CardContent>
      </Card>
      <div className="prose prose-lg max-w-none mt-6">
        {blog.sections.map((section) => (
          <section className='mt-6' key={section.id} id={section.id}>
            <h2 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">{section.title}</h2>
            <p className="leading-7 [&:not(:first-child)]:mt-6">{section.content}</p>
          </section>
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
      {showScrollTop && (
        <Button
          className="fixed bottom-8 right-8 rounded-full p-2"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <ChevronUp className="h-6 w-6" />
        </Button>
      )}
    </article>
  )
}