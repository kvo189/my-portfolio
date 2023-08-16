import { IconDefinition, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ReactNode } from 'react';

interface ButtonProps {
  icon: IconDefinition;
  text: string;
  anchor?: boolean;
}

export function Button({ icon, text, anchor = false }: ButtonProps) {
  const Tag = anchor ? 'a' : ('button' as keyof JSX.IntrinsicElements);
  return (
    <>
      <Tag
        className='relative text-white text-sm font-medium 
        select-none py-2 px-3 
        flex gap-1 items-center justify-center
        w-fit cursor-pointer
        after:-skew-x-6 
        after:content-[""] 
        after:w-full 
        after:bg-primary-red 
        hover:after:bg-primary-red-hover 
        active:after:bg-primary-red-active
        hover:after:shadow-md
        active:after:shadow-inner
        after:h-full 
        after:block 
        after:top-0 
        after:left-0
        after:absolute 
        after:-z-10 
        after:rounded-md
        '
      >
        <FontAwesomeIcon icon={icon} />
        {text}
      </Tag>
    </>
  );
}
