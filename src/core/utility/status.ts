import { CharStatus } from "../types/keys"
import { wordle } from "./gameUtil"

const isCharPresentInWordle = (letter: string, i: number) => {
    if(letter === wordle[i]){
        return CharStatus.CORRECT
    }
    if(wordle.includes(letter)) {
        return CharStatus.PRESENT 
    }
    return CharStatus.ABSENT
}

export const getKeysStatus = (guesses: string[]) => {
    const keyObject: {[key: string]: CharStatus} = {}

    guesses.forEach((guess, _) => {
        guess.split('').forEach((letter, i) => {
            keyObject[letter] = isCharPresentInWordle(letter, i)
        })
    })
    return keyObject
}

export const getCharStatus = (guess: string) => {
    const guessChars = guess.split('')

    return guessChars.map((letter, i) => {
        return isCharPresentInWordle(letter, i)
    })
}