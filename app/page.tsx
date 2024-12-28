import { users, upcomingGames } from "../lib/mockData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">NFL Prediction League</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid gap-8 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Leaderboard</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Rank</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Correct Predictions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {users.sort((a, b) => b.correctPredictions - a.correctPredictions).map((user, index) => (
                    <TableRow key={user.id}>
                      <TableCell>{index + 1}</TableCell>
                      <TableCell>{user.name}</TableCell>
                      <TableCell>{user.correctPredictions}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Upcoming Games</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {upcomingGames.map((game) => (
                  <li key={game.id} className="flex items-center justify-between bg-white p-4 rounded-lg shadow">
                    <div>
                      <p className="font-semibold">{game.homeTeam} vs {game.awayTeam}</p>
                      <p className="text-sm text-gray-500">{game.date}</p>
                    </div>
                    <div className="space-x-2">
                      <Button variant="outline">{game.homeTeam}</Button>
                      <Button variant="outline">{game.awayTeam}</Button>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}

