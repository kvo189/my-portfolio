import { ReactNode } from 'react';
import { faLinkedin, faLinkedinIn, IconLookup } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

interface SocialMediaButtonProps {
  icon: IconLookup
}

export function SocialMediaButton({ icon }: SocialMediaButtonProps) {
  return (
    <>
      <button
        className='group rounded-full w-9 h-9 bg-[#79869F1A] hover:bg-[#EA4C88] hover:cursor-pointer
            flex justify-center items-center'
      >
        <FontAwesomeIcon color={`#79869F`} icon={icon} className='group-hover:text-white' />
      </button>
    </>
  );
}
