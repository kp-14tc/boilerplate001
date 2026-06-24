"use client"

import { useState } from "react"
import { supabase } from "@/lib/supabase"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useRouter } from "next/navigation"

export default function AddProjectForm() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  async function handleSubmit() {
    setLoading(true)
    const { error } = await supabase
      .from("projects")
      .insert({ title, description })

    if (!error) {
      setTitle("")
      setDescription("")
      router.refresh()
    }
    setLoading(false)
  }

  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle>Add Project</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <Input
          placeholder="Project title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Input
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Button onClick={handleSubmit} disabled={loading}>
          {loading ? "Adding..." : "Add Project"}
        </Button>
      </CardContent>
    </Card>
  )
}