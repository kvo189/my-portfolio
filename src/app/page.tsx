import { Navigation } from '@/components/Navigation';
import { Metadata } from 'next';
import { notoSans, rubik } from './font';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import profilePic from '@/assets/me_edit.png';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import {
  faLinkedin,
  faLinkedinIn,
  faGithub,
  faSquareJs,
  faJava,
  faSalesforce,
  faReact,
  faAngular,
  faAws,
  faNodeJs,
  faHtml5,
  faBootstrap,
} from '@fortawesome/free-brands-svg-icons';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { SocialMediaButton } from '@/components/SocialMediaButton/SocialMediaButton';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { Button } from '@/components/Button';
import styles from './page.module.css';
config.autoAddCss = false;

export const metadata: Metadata = {
  title: 'Home App',
};

export default function Home() {
  const bodyPadding = 'px-5 sm:px-8';
  return (
    <>
      <Navigation padding={bodyPadding} />
      <main className={`py-10 flex min-h-screen flex-col items-center gap-10 ${bodyPadding} max-w-6xl m-auto`}>
        <HomeContent />
        <Section1 />
      </main>
    </>
  );
}

function HomeContent() {
  return (
    <section className={`${rubik.className} text-center flex flex-col md:flex-row md:gap-8 items-center text-secondary-gray`}>
      {/* Text */}
      <div className='flex flex-col flex-1 basis-52 md:items-start md:text-left'>
        <h2 className={`${notoSans.className} text-2xl lg:text-3xl font-bold`}>
          <span className='text-secondary-gray-75'>Hello, my name is </span>
          <span className='text-primary-red'>Khang Vo.</span>
          <br></br>
          <span className='text-secondary-gray'>I build innovative solutions through code.</span>
        </h2>
        <p className='mt-3 text-secondary-gray-50 font-medium font-rubik lg:text-lg'>
          Full stack developer with industry experience building web applications. <br></br>
          Currently, I'm crafting exceptional digital experiences for members, customers, and health advisors at{' '}
          <span className='text-primary-red'>Pack Health - A Quest Diagnostics company</span>.
        </p>
        <div className='mt-6 flex items-center justify-center gap-6'>
          <Button icon={faPaperPlane} text="Let's talk" anchor={true} />
          <a href='' className='text-secondary-gray2 md:text-lg'>
            See my projects
          </a>
        </div>
        <div className='mt-6 text-lg flex items-center justify-center gap-3'>
          <span className='text-secondary-gray2'>Follow Me:</span>
          <SocialMediaButton icon={faLinkedinIn} />
          <SocialMediaButton icon={faGithub} />
        </div>
      </div>
      {/* Image */}
      <div className='mt-6 px-14 md:px-0 flex flex-1 md:flex-1 justify-center'>
        <Image className='rounded-3xl' src={profilePic} alt='' width={337} height={474} unoptimized />
      </div>
    </section>
  );
}

function Section1() {
  const skillsArray = [
    {
      name: 'Javascript',
      icon: faSquareJs,
    },
    {
      name: 'Angular',
      icon: faAngular,
    },
    {
      name: 'HTML & CSS',
      icon: faHtml5,
    },
    {
      name: 'AWS',
      icon: faAws,
    },
    {
      name: 'React',
      icon: faReact,
    },
    {
      name: 'Salesforce',
      icon: faSalesforce,
    },
    {
      name: 'Node.js',
      icon: faNodeJs,
    },
    {
      name: 'SQL',
      icon: faDatabase,
    },
    {
      name: 'Java',
      icon: faJava,
    },
    {
      name: 'faBootstrap',
      icon: faBootstrap,
    },
  ];
  return (
    <>
      <section className='flex flex-col md:gap-8 md:flex-row-reverse items-center text-secondary-gray text-center'>
        <div className='flex flex-col flex-1 md:items-start md:text-left '>
          <h2 className={`${notoSans.className} text-2xl lg:text-3xl font-bold`}>
            Ready to Elevate Your Next <span className='text-primary-red'>Project!</span>
          </h2>
          <p className='mt-3 text-secondary-gray-50 font-medium font-rubik lg:text-lg'>
            I specialize in JavaScript/TypeScript and have a strong professional background in Angular, SQL, HTML, CSS, Salesforce, and AWS.<br></br>
            Additionally, I'm well-versed in other programming languages and tools such as Java, Python, Node.js, and React. Continuously expanding my skill set, I'm always adding
            new capabilities to my repertoire.
          </p>
        </div>
        <div className='mt-6 flex flex-1 md:flex-1 justify-start'>
          <div id={styles.skillsBackground}>
            {skillsArray.map((skill) => (
              <div className={styles.skillCard}>
                <FontAwesomeIcon icon={skill.icon} className='text-3xl' />
                {skill.name}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
