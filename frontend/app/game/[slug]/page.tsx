"use client";

import React from "react";
import { useParams } from "next/navigation";
import { useGameData } from "@/context/game_context";
import { convertGameNameToId } from "@/utils/gamename_to_id";

export default function GameDetail() {
    const params = useParams();
    const slug = params?.slug as string | undefined;

    const games = useGameData();

    const game = games.find(
        (g) => convertGameNameToId(g.title) === slug
    );

    if (!game) {
        return <p>No game data available.</p>;
    }

    return (
        <div className="p-6">
            <h1 className="text-3xl font-title">{game.title}</h1>

            <p className="text-textsubcolor mt-2">
                {game.type} • {game.release_date}
            </p>

            <p className="mt-4">{game.description}</p>
        </div>
    );
}