import React, { ReactNode } from 'react';
import classnames from 'classnames';
import { KeyValue } from '../../core/types/keyboard';
import { CharStatus } from '../../core/types/keys';


type Props = {
    value: KeyValue
    onClick: (value: KeyValue) => void
    children ?: ReactNode
    width ?: number
    status?: CharStatus
  }

function Key({value, onClick, status, children, width = 40}: Props) {
    const classes = classnames(
        'flex items-center justify-center rounded mx-0.5 text-xs font-bold cursor-pointer select-none',
        {
            'bg-slate-200 hover:bg-slate-300 active:bg-slate-400': !status,
            'bg-slate-400 text-white': status === CharStatus.ABSENT,
            'bg-green-500 hover:bg-green-600 active:bg-green-700 text-white':
                status === CharStatus.CORRECT,
            'bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-700 text-white':
                status === CharStatus.PRESENT,
        }
    )

    const handleClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
        onClick(value)
        event.currentTarget.blur()
    }

    return (
        <button 
            style={{ width: `${width}px`, height: '58px'}} 
            className={classes}
            onClick={handleClick}
        >
            {children || value}
        </button>
    );
}

export default Key;
