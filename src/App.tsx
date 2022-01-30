import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/header';
import Grid from './components/grid';
import Keyboard from './components/keyboard';
import { CharValue } from './core/types/keys';
import { getGameState, setGameState } from './core/utility/gameStore';
import { isCorrectWord, isWordInWordList, wordle } from './core/utility/gameUtil';
import { GameResult } from './core/constants/game';
import { Alert } from './components/alerts/alert';
import { AlertLevels } from './core/types/alerts';
import { ALERT_MESSAGES, ALERT_TIME_MS, getGameLostMessage } from './core/constants/alerts';

function App() {
  // TODO: add modals
  // TODO: add sharing
  const [currentGuess, setCurrentGuess] = useState<string>('')
  const [gameResult, setGameResult] = useState<GameResult>(GameResult.PENDING)
  const [alertMessage, setAlertMessage] = useState('')
  const [alertLevel, setAlertLevel] = useState<AlertLevels>(AlertLevels.WARNING)
  const [guesses, setGuess] = useState<string[]>(() => {
    const localState = getGameState()
    // check if new wordle is generated
    if(localState?.wordle !== wordle) {
      return []
    }
    const hasWonGame = localState?.guesses.includes(wordle)
    if(hasWonGame) {
      setGameResult(GameResult.WON)
    }
    else if(localState?.guesses.length === 6) {
      setGameResult(GameResult.LOST)
    }
    return localState.guesses
  })
  useEffect(() => {
    setGameState({ guesses, wordle })
  }, [guesses])

  useEffect(() => {
    if(gameResult === GameResult.WON) {
      setAlertMessage(ALERT_MESSAGES.GAME_WON)
      setAlertLevel(AlertLevels.SUCCESS)
      setTimeout(() => {
        setAlertMessage('')
        setAlertLevel(AlertLevels.WARNING)
      }, ALERT_TIME_MS)
    }
    if (gameResult === GameResult.LOST) {
      setAlertMessage(getGameLostMessage(wordle))
      setTimeout(() => {
        setAlertMessage('')
      }, ALERT_TIME_MS)
    }
  }, [gameResult])
  const onEnter = () => {
    if (gameResult !== GameResult.PENDING) {
      return
    }
    if(currentGuess.length < 5) {
      setAlertMessage(ALERT_MESSAGES.NOT_ENOUGH_LETTERS)
      return setTimeout(() => {
        setAlertMessage('')
      }, ALERT_TIME_MS)
    }
    if(!isWordInWordList(currentGuess)) {
      setAlertMessage(ALERT_MESSAGES.WORD_NOT_FOUND)
      return setTimeout(() => {
        setAlertMessage('')
      }, ALERT_TIME_MS)
    }
    const isWon = isCorrectWord(currentGuess)
    if (currentGuess.length === 5) {
      setGuess([...guesses, currentGuess])
      setCurrentGuess('')
    }
    if(isWon) {
      return setGameResult(GameResult.WON)
    }
    if(guesses.length === 5) {
      return setGameResult(GameResult.LOST)
    }
  }
  const onDelete = () => {
    setCurrentGuess(currentGuess.slice(0, -1))
  }
  const onChar = (char: CharValue) => {
    if(currentGuess.length < 5 && gameResult === GameResult.PENDING) {
      setCurrentGuess(`${currentGuess}${char}`)
    }
  }
  return (
    <div className='max-w-screen-sm flex items-center flex-col py-8 mx-2 md:mx-auto h-full'>
      <Header />
      <Grid guesses={guesses} currentGuess={currentGuess}/>
      <Keyboard onEnter={onEnter} onDelete={onDelete} onChar={onChar} guesses={guesses}/>
      <Alert isOpen={alertMessage !== ''} message={alertMessage} variant={alertLevel} />
    </div>
  );
}

export default App;
