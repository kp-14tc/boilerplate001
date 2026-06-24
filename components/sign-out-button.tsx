"use client"

import { createClient } from "@/lib/supabase-browser"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export default function SignOutButton() {
  const router = useRouter()
  const supabase = createClient()

  async function handleSignOut() {
    await supabase.auth.signOut()
    router.push("/login")
  }

  return (
    <Button variant="outline" onClick={handleSignOut}>
      Sign out
    </Button>
  )
}