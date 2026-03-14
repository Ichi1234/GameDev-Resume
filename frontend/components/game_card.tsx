import { Game } from "@/types/game";
import Chip from "./chip";
import Image from "next/image";


type Props = {
  game: Game;
};

export default function GameCard({ game }: Props) {
  return (
    <div className="bg-cardbackground w-90  inline border-2 border-[#272321] rounded-xl">
      
      <div className="relative w-full h-[50%]">
        <Image
          className="object-cover rounded-xl"
          src={game.cover_img_path || "/img/default_cover_img.png"}
          alt="Cover Image of the game"
          fill
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

        <div className="absolute top-4 left-4 px-4 py-1 rounded-md inline border-1 border-primary/50 bg-cardbackground text-primary uppercase">
          { game.type }
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-end">
          <h2 className="text-white font-title text-2xl">{ game.title }</h2>
          <p className="text-xs text-textsubcolor"> { game.release_date || "In Progress" } </p>
        </div>

        <p className="mt-2">{ game.description }</p>

        <div className="flex gap-x-2 mt-4">
           {game.tags.map((tag) => (
              <Chip key={tag} label={tag} />
            ))}
        </div>
       
      </div>
      
    </div>
  );
}