import { Game } from "@/types/game";

export const MockGamesData: Game[] = [{
  id: 1,
  title: "Raging Cacophony",
  description: 
  <>
    A 2D boss fight prototype inspired by Hollow Knight.
    <br/>
    This project focuses on designing a responsive combat system and experimenting with a unique rage mechanic driven by real-time microphone input.
  </>,
  download_path: "yes",
  start_date: "2026-01-17",
  status: "inprogress",
  type: "Experimental Game",
  tags: ["2D", "Action", "Single Player"],
  platforms: ["PC"],
  photos: ["AAA"],
  videos: ["AAA"],

  changelogs: [
    {
    id: 1,
    game_id: 1,
    version: 0.9,
    description: "All the main feature is finished, Published the demo.",
    date: "2026-01-26"
    },
  ]
}];