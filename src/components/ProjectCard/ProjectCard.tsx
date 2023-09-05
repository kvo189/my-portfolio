import React from 'react';
import projectCardPlaceHolderImg from '@/assets/project_card_placeholder.png';
import Image, { StaticImageData } from 'next/image';
import styles from './ProjectCard.module.scss';
import format from 'date-fns/format';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export interface ProjectCardProps {
  title?: string;
  startDate?: string;
  endDate?: string;
  stack?: string[];
  imageSrc?: StaticImageData | string;
  description?: string;
  link: string;
}

const DEFAULT_DESC = 'No description provided';

export function ProjectCard({ title, imageSrc, description, startDate, endDate, stack, link }: ProjectCardProps) {
  const dateStr = startDate ?? format(new Date(), 'dd LLLL yyyy');
  if (endDate) {
    dateStr.concat(`-${endDate}`);
  }
  return (
    <div className='rounded-xl shadow-xl relative flex flex-col md:flex-row'>
      <a href={link} className={`flex-1 ${styles.imgLink}`} target='_blank'>
        <Image src={imageSrc ?? projectCardPlaceHolderImg} alt='' className={`${styles.image} w-full`} width={1050} height={700}></Image>
      </a>

      <div className='rounded-xl flex flex-col text-left p-6 -mt-12 md:mt-0 z-10 bg-white relative flex-1 md:rounded-l-none'>
        <div className='flex justify-between items-center'>
          <h3 className={`font-rubik text-xl text-dark-blue`}>{title ?? 'Project Name'}</h3>
          <a href={link} target='_blank' className='text-dark-blue hover:text-primary-red-hover transition-all'>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='' size='lg' />
          </a>
        </div>
        <div className='text-primary-red font-semibold text-sm'>{`${dateStr}`}</div>
        <p className='text-secondary-gray-75 mt-2 font-normal leading-6'>{description ?? DEFAULT_DESC}</p>
        {/* display tech stack list ul*/}
        {stack?.length && (
          <ul className='flex flex-wrap mt-4'>
            {stack?.map((tech, i) => (
              <li key={i} className='text-sm text-secondary-gray-75 mr-2'>
                {tech}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
