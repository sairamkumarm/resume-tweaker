import { useState } from 'react'
import { useRouter } from 'next/router'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Upload } from 'lucide-react'
import Link from 'next/link'

// Assuming you have a function to submit the form data
// import { submitBlogPost } from '@/lib/api'

const categories = [
  "Web Development",
  "Technology",
  "Programming",
  "Design",
  "AI",
  "Data Science",
  "Cybersecurity",
]

export default function BlogForm() {    
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    category: '',
    image: null,
    author: '',
  })

  const handleInputChange = () => {
    
  }

  const handleCategoryChange = (value: string) => {
    setFormData(prevData => ({ ...prevData, category: value }))
  }

  const handleImageChange = () => {

  }

  const handleSubmit = async () => {
  
  }

  return (
    <div className="container mx-auto px-4 py-16 max-w-2xl">
      <Link href="/blogs" className="inline-flex items-center text-primary hover:underline mb-8">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to all blogs
      </Link>
      <Card>
        <CardHeader>
          <CardTitle>Create New Blog Post</CardTitle>
          <CardDescription>Fill in the details for your new blog post</CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                name="title"
                className='input'
                placeholder='Enter the title'
                value={formData.title}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="excerpt">Excerpt</Label>
              <Textarea
                id="excerpt"
                name="excerpt"
                className='input'
                placeholder='Enter excerpt'
                value={formData.excerpt}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="content">Content</Label>
              <Textarea
                id="content"
                name="content"
                value={formData.content}
                placeholder='Enter the content'
                onChange={handleInputChange}
                required
                className="min-h-[200px] input"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Select name="category" onValueChange={handleCategoryChange} required>
                <SelectTrigger className='input'>
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="author">Author</Label>
              <Input
                id="author"
                name="author"
                className='input'
                value={"Wibblit"}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="image">Cover Image</Label>
              <div className="flex items-center space-x-2">
                <Input
                  id="image"
                  name="image"
                  type="file"
                  onChange={handleImageChange}
                  accept="image/*"
                  required
                  className="flex-grow input"
                />
                <Button type="button" variant="outline" size="icon">
                  <Upload className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button type="button" variant="outline" asChild>
              <Link href="/blogs">Cancel</Link>
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Submit Blog Post'}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}