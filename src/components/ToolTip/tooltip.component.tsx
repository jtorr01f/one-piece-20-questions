import React, { FC, useState } from 'react';

import { useClickOutside } from '../../hooks/useClickOutside';

import { TooltipProps } from '@/types/components/toolTip';

import './tooltip.styles.css';

const Tooltip: FC<TooltipProps> = ({ children, text }) => {
  const [isVisible, setIsVisible] = useState(false);

    const tooltipnRef = useClickOutside(() => {
      setIsVisible(false);
    });
  

  return (
    <div
      ref={tooltipnRef}
      className='tooltip-wrapper'
      onClick={() => setIsVisible(!isVisible)}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div className='tooltip'>
          {text}
        </div>
      )}
    </div>
  );
};

export default Tooltip;