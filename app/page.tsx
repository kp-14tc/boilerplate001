import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"

export default function Home() {
  return (
    <main className="min-h-screen p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">My Hackathon App</h1>
      <Badge className="mb-6">Live Demo</Badge>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Try it out</CardTitle>
        </CardHeader>
        <CardContent className="flex gap-2">
          <Input placeholder="Type something..." />
          <Button>Submit</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Result</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Your output will appear here.</p>
        </CardContent>
      </Card>
    </main>
  )
}