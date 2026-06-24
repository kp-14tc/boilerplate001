import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Dashboard() {
  return (
    <main className="min-h-screen p-8 max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <Badge>Beta</Badge>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Total Users</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">142</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Results Generated</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">89</p>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
