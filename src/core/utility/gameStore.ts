import { GAME_STATE_KEY } from "../constants/game"
import { GameState } from "../types/game"


export const getGameState = () => {
    const stateInString = localStorage.getItem(GAME_STATE_KEY)
    return stateInString ? (JSON.parse(stateInString) as GameState) : null
}

export const setGameState = (state: GameState) => {
    localStorage.setItem(GAME_STATE_KEY, JSON.stringify(state))
}