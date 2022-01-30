import React, { useEffect } from 'react';
import Key from './key';
import './index.css'
import { KeyValue } from '../../core/types/keyboard';
import { CharValue } from '../../core/types/keys';
import { getKeysStatus } from '../../core/utility/status';

type Props = {
    onChar: (value: CharValue) => void
    onDelete: () => void
    onEnter: () => void
    guesses: string[]
}

function Keyboard({onChar, onDelete, onEnter, guesses}: Props) {
    const keyGuessValue = getKeysStatus(guesses)
    const onClick = (value: KeyValue) => {
        if (value === 'ENTER') {
            onEnter()
        }
        else if (value === 'DELETE') {
            onDelete()
        }
        else {
            onChar(value)
        }
    }

    useEffect(() => {
        const listener = (e: KeyboardEvent) => {
          if (e.code === 'Enter') {
            onEnter()
          } else if (e.code === 'Backspace') {
            onDelete()
          } else {
            const key = e.key.toUpperCase()
            if (key.length === 1 && key >= 'A' && key <= 'Z') {
              onChar((key as CharValue))
            }
          }
        }
        window.addEventListener('keyup', listener)
        return () => {
          window.removeEventListener('keyup', listener)
        } 
    }, [onEnter, onDelete, onChar])
    
    return (
      <div className='flex w-full grow items-center flex-col'>
          <div className="flex justify-center mb-1 w-full">
              <Key value="Q" onClick={onClick} status={keyGuessValue['Q']}/>
              <Key value="W" onClick={onClick} status={keyGuessValue['W']}/>
              <Key value="E" onClick={onClick} status={keyGuessValue['E']}/>
              <Key value="R" onClick={onClick} status={keyGuessValue['R']}/>
              <Key value="T" onClick={onClick} status={keyGuessValue['T']}/>
              <Key value="Y" onClick={onClick} status={keyGuessValue['Y']}/>
              <Key value="U" onClick={onClick} status={keyGuessValue['U']}/>
              <Key value="I" onClick={onClick} status={keyGuessValue['I']}/>
              <Key value="O" onClick={onClick} status={keyGuessValue['O']}/>
              <Key value="P" onClick={onClick} status={keyGuessValue['P']}/>
          </div>
          <div className="flex justify-center mb-1 w-full">
              <Key value="A" onClick={onClick} status={keyGuessValue['A']}/>
              <Key value="S" onClick={onClick} status={keyGuessValue['S']}/>
              <Key value="D" onClick={onClick} status={keyGuessValue['D']}/>
              <Key value="F" onClick={onClick} status={keyGuessValue['F']}/>
              <Key value="G" onClick={onClick} status={keyGuessValue['G']}/>
              <Key value="H" onClick={onClick} status={keyGuessValue['H']}/>
              <Key value="J" onClick={onClick} status={keyGuessValue['J']}/>
              <Key value="K" onClick={onClick} status={keyGuessValue['K']}/>
              <Key value="L" onClick={onClick} status={keyGuessValue['L']}/>
          </div>
          <div className="flex justify-center w-full">
              <Key width={65.4} value="ENTER" onClick={onClick}>
                  Enter
              </Key>
              <Key value="Z" onClick={onClick} status={keyGuessValue['Z']}/>
              <Key value="X" onClick={onClick} status={keyGuessValue['X']}/>
              <Key value="C" onClick={onClick} status={keyGuessValue['C']}/>
              <Key value="V" onClick={onClick} status={keyGuessValue['V']}/>
              <Key value="B" onClick={onClick} status={keyGuessValue['B']}/>
              <Key value="N" onClick={onClick} status={keyGuessValue['N']}/>
              <Key value="M" onClick={onClick} status={keyGuessValue['M']}/>
              <Key width={65.4} value="DELETE" onClick={onClick}>
                  Delete
              </Key>
          </div>    
      </div>
    );
}

export default Keyboard;
