export const ALERT_MESSAGES = {
    'WORD_NOT_FOUND': 'Word not found',
    'NOT_ENOUGH_LETTERS': 'Not enough letters',
    'CORRECT_WORD_MESSAGE': 'The word was {}',
    'GAME_WON': 'Amazing, You are a genius',
    'GAME_LOST': 'Sorry, but the Correct word was {}'
}

export const getGameLostMessage = (word: string) => `Sorry, but the Correct word was ${word}`

export const ALERT_TIME_MS = 2000