import React from 'react';

import styles from './Brand.module.scss';

export interface BrandProps {
  prop?: string;
}

export function Brand({ prop = 'default value' }: BrandProps) {
  return (
    <div className='flex gap-2 items-center justify-center'>
      <svg xmlns='http://www.w3.org/2000/svg' width='26' height='26' viewBox='0 0 26 26' fill='none' className="font-urbanist">
        <circle cx='12.7543' cy='12.7543' r='12.7543' fill='#F1665A' />
        {/* add text "K" in the middle of circle */}
        <text x='8' y='18' fill='white' fontSize='14px' fontWeight='bold'>
          K
        </text>
      </svg>
      <h1 className={`text-lg sm:text-2xl font-bold text-secondary-gray`}>
        Khang_<span className='text-primary-red'>Vo</span>
      </h1>
    </div>
  );
}
