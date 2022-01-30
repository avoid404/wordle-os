import classNames from 'classnames';
import React from 'react';
import { CharStatus } from '../../core/types/keys';

type Props = {
    value?: string
    status?: CharStatus
    isCurrent?: boolean
}

function Cell({value, isCurrent, status}: Props) {
  let classes = classNames(
    'text-xl md:text-2xl border-2 rounded border-gray game-cell font-bold w-full items-center justify-center inline-flex',
    {
      'border-black dark:border-slate-100': isCurrent,
      'bg-yellow-500 dark:bg-yellow-700 text-white border-yellow-500 dark:border-yellow-700': !isCurrent && status === CharStatus.PRESENT,
      'bg-green-500 dark:bg-green-700 text-white border-green-500 dark:border-green-700': !isCurrent && status === CharStatus.CORRECT,
    }
  )
  return (
    <div className={classes}>{value}</div>
  );
}

export default Cell;
