import { GameResult } from "../constants/game";

export type GameState = {
    guesses: string[]
    wordle: string
}

export interface IGameResult {
    result: GameResult
 }
 