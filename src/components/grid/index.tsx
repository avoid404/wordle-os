import React, {ReactNode} from 'react';
import GameRow from './gameRow';
import './index.css';

type Props = {
    guesses: string[]
    currentGuess: string
}

function Grid({guesses, currentGuess}: Props) {
    const emptyRows =
    guesses.length < 5 ? Array.from(Array(5 - guesses.length)) : []
    let rows: ReactNode[] = []
    // used Guess row/s
    rows = rows.concat(guesses.map((guess, i) => (
        <GameRow key={`completed_row_${i}`} guess={guess} isCompleted={true} isCurrentGuess={false} rowKey={`completed_row_${i}`} />
    )))
    // current guess row, only if chance remaining
    if (guesses.length < 6) {
        rows = rows.concat([<GameRow key={`current_row`} guess={currentGuess} isCompleted={false} isCurrentGuess={true} rowKey={`current_row`} />])
    }
    // remaining guess row/s
    rows = rows.concat(emptyRows.map((_, i) => (
        <GameRow key={`empty_row_${i}`} isCompleted={false} isCurrentGuess={false} rowKey={`empty_row_${i}`}/>
    )))
    return (
        <div className='flex w-full grow items-center'>
            <div className='grid grid-row-6 grid-flow-row gap-2 w-full px-8 md:px-44 my-10' id="board">
                {rows}
            </div>
        </div>
    );
}

export default Grid;
