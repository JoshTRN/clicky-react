import React from "react"

export type GameInfo = {
    message: string,
    currentScore: number,
    highScore: number
}

export interface PlayCard {
    id: number,
    image: string,
    onClick: (e: React.MouseEvent<HTMLElement>) => void,
}
