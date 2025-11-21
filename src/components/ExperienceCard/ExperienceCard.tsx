import { ReactNode } from 'react';

interface ExperienceCardProps {
  title: string;
  company: string;
  location: string;
  period: string;
  children: ReactNode;
}

export function ExperienceCard({ title, company, location, period, children }: ExperienceCardProps) {
  return (
    <div
      className='relative text-white
            p-6 md:p-9
            text-left
            w-full
            flex flex-col
            after:-skew-x-1 
            after:content-[""] 
            after:w-full 
            after:bg-primary-red 
            after:h-full 
            after:block 
            after:top-0 
            after:left-0
            after:absolute 
            after:-z-10 
            after:rounded-2xl
            drop-shadow-red
            '
    >
      <div className='flex flex-col md:flex-row justify-between mb-4'>
        <div>
          <h3 className='text-xl'>{title}</h3>
          <div className='text-md text-white/60'>{company}</div>
        </div>
        <div className='text-right'>
          <div className='text-base md:text-xl'>{period}</div>
          <div className='text-md text-white/60'>{location}</div>
        </div>
      </div>
      {children}
    </div>
  );
}
