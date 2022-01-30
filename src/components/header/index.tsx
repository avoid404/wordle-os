import React from 'react';
import Heading from './heading';
import InfoButton from './infoButton';
import StatsButton from './stats';


function Header() {
  return (
    <header className="border-b border-gray flex items-center justify-between w-full">
        <InfoButton />
        <Heading />
        <StatsButton />
    </header>
  );
}

export default Header;
