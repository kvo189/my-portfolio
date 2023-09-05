import { IconDefinition, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ReactNode } from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
  icon: IconDefinition;
  text: string;
  anchor?: boolean;
  className?: string;
  href?: string;
  disabled?: boolean;
  onClick?: () => void;
}

export function Button({ icon, text, anchor = false, className, onClick, href, disabled }: ButtonProps) {
  const Tag = anchor ? 'a' : ('button' as keyof JSX.IntrinsicElements);
  if (disabled) {
    onClick = () => {};
    href = undefined;
  }
  return (
    <Tag
      className={`
        btn
        rounded-md
        transition-all
        ${styles.btn}
        ${className || ''}
        `}
      onClick={onClick}
      href={href}
      disabled={disabled}
    >
      <FontAwesomeIcon icon={icon} />
      {text}
    </Tag>
  );
}
