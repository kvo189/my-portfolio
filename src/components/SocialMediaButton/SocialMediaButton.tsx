import { ReactNode } from 'react';
import { faLinkedin, faLinkedinIn, IconLookup } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

interface SocialMediaButtonProps {
  icon: IconLookup;
  href: string;
}

export function SocialMediaButton({ icon, href }: SocialMediaButtonProps) {
  return (
    <>
      <a
        className='group rounded-full w-9 h-9 bg-[#79869F1A] hover:bg-[#EA4C88] hover:cursor-pointer
            flex justify-center items-center'
        href={href}
      >
        <FontAwesomeIcon color={`#79869F`} icon={icon} className='group-hover:text-white' />
      </a>
    </>
  );
}
