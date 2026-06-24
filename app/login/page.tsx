"use client"

import { useState } from "react"
import { createClient } from "@/lib/supabase-browser"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useRouter } from "next/navigation"

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const router = useRouter()
  const supabase = createClient()

  async function handleSignUp() {
    setLoading(true)
    const { error } = await supabase.auth.signUp({ email, password })
    if (error) setError(error.message)
    else router.push("/dashboard")
    setLoading(false)
  }

  async function handleSignIn() {
    setLoading(true)
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) setError(error.message)
    else router.push("/dashboard")
    setLoading(false)
  }

  return (
    <main className="min-h-screen p-8 max-w-md mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Sign in</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          <Input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <Button onClick={handleSignIn} disabled={loading}>
            {loading ? "Signing in..." : "Sign in"}
          </Button>
          <Button variant="outline" onClick={handleSignUp} disabled={loading}>
            Create account
          </Button>
        </CardContent>
      </Card>
    </main>
  )
}