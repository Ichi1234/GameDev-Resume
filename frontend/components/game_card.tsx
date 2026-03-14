  import { Game } from "@/types/game";
  import Chip from "./chip";
  import Image from "next/image";
import { formatDate } from "@/utils/format_date";


  type Props = {
    game: Game;
  };

  export default function GameCard({ game }: Props) {
    return (
      <div className="bg-cardbackground max-w-110 border-2 border-[#272321] rounded-xl">

        {/* Image Section */}
        <div className="relative aspect-video">
          <Image
            className="object-cover rounded-t-xl"
            src={game.cover_img_path || "/img/default_cover_img.png"}
            alt="Cover Image of the game"
            fill
          />

          <div className="absolute inset-0 bg-gradient-to-t from-cardbackground via-cardbackground/40 to-transparent"></div>

          <div className="absolute top-3 left-3 px-3 py-1 text-xs rounded-sm inline border border-primary/50 bg-cardbackground text-primary uppercase">
            { game.type }
          </div>
        </div>
        
        {/* Detail Section */}
        <div className="p-4">
          <div className="flex justify-between items-baseline">
            <h2 className="text-white font-title text-2xl ">{ game.title }</h2>
            <p className="text-xs text-textsubcolor"> { game.release_date != "" ? formatDate(game.release_date) : "In Progress" } </p>
          </div>

          <p className="mt-2 line-clamp-4 text-sm">{ game.description }</p>

          <div className="flex gap-x-2 mt-4">
            {game.tags.map((tag) => (
                <Chip key={tag} label={tag} />
              ))}
          </div>
        
        </div>
        
      </div>
    );
  }