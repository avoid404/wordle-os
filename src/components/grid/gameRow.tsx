import React from 'react';
import { getCharStatus } from '../../core/utility/status';
import Cell from './cell';

type Props = {
  guess?: string
  isCurrentGuess: boolean
  isCompleted: boolean
  rowKey: string
}

function GameRow({guess, isCurrentGuess, isCompleted, rowKey}: Props) {
  let cells = null
  if(!guess) {
    const emptyCells = Array.from(Array(5))
    cells = emptyCells.map((_, i) => (
      <Cell key={`${rowKey}_${i}`} />
    ))
  }
  else if (isCompleted) {
    const statuses = getCharStatus(guess)
    cells = guess.split('').map((letter, i) => {
      return <Cell key={`${rowKey}_${i}`} value={letter} status={statuses[i]}/>
    })
  }
  else if(isCurrentGuess) {
    const guessLength = guess.length
    const emptyCells = Array.from(Array(5 - guessLength))
    cells = guess.split('').map((letter, i) => (
      <Cell key={`${rowKey}_${i}`} value={letter} isCurrent={true}/>
    ))
    cells = cells.concat(emptyCells.map((_, i) => (
      <Cell key={`${rowKey}_${guessLength + i}`} />
    )))
  }

  return (
    <div className='grid grid-col-5 grid-flow-col gap-2 w-full grid-cols-5'>
      {cells}
    </div>
  );
}

export default GameRow;
