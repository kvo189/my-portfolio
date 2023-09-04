import { Navigation } from '@/components/Navigation';
import { Metadata } from 'next';
import { notoSans, rubik } from './font';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import profilePic from '@/assets/me_edit.png';
import projectCardPlaceHolderImg from '@/assets/project_card_placeholder.png';
import { faDatabase, faLocationDot, faMobile, faPhone } from '@fortawesome/free-solid-svg-icons';
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
import { faAddressBook, faEnvelope, faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { Button } from '@/components/Button';
import styles from './page.module.css';
import { ContactCard } from '@/components/ContactCard';
import { Brand } from '@/components';

config.autoAddCss = false;

export const metadata: Metadata = {
  title: 'Khang Vo | My Portfolio',
};

export default function Home() {
  const bodyPadding = 'px-6 sm:px-16';
  return (
    <>
      <Navigation padding={bodyPadding} />
      <main className={`py-10 flex min-h-screen flex-col items-center gap-16 md:gap-24 lg:gap-32 ${bodyPadding} max-w-6xl m-auto`}>
        <HomeContent id="home"/>
        <Section1 id="skills"/>
        <Section2 id="portfolio"/>
        <Section3 id="experience"/>
        <ContactCard />
      </main>
      <Footer></Footer>
    </>
  );
}

function HomeContent({id}: {id: string}) {
  return (
    <section id={id} className={`${rubik.className} text-center flex flex-col md:flex-row md:gap-8 lg:gap-20 items-center text-secondary-gray`}>
      {/* Text */}
      <div className='flex flex-col flex-1 lg:basis-0 md:items-start md:text-left basis-2/5'>
        <h2 className={`${notoSans.className} text-2xl lg:text-2rem font-bold`}>
          <span className='text-secondary-gray-75'>Hello, my name is </span>
          <span className='text-primary-red'>Khang Vo.</span>
          <br></br>
          <span className='text-secondary-gray'>I build innovative solutions through code.</span>
        </h2>
        <p className='mt-3 text-secondary-gray-75 font-rubik lg:text-lg'>
          Full stack developer with industry experience building web applications. <br></br>
          Currently, I&apos;m crafting exceptional digital experiences for members, customers, and health advisors at{' '}
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
          <SocialMediaButton icon={faLinkedinIn} href='https://www.linkedin.com/in/khang-vo-kvo/' />
          <SocialMediaButton icon={faGithub} href='https://github.com/kvo189' />
        </div>
      </div>
      {/* Image */}
      <div className='mt-6 px-14 md:px-0 flex flex-1 md:flex-1 justify-center basis-2/5'>
        <Image className='rounded-3xl' src={profilePic} alt='' width={337} height={474} unoptimized />
      </div>
    </section>
  );
}

function Section1({id}: {id: string}) {
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
      name: 'Bootstrap',
      icon: faBootstrap,
    },
  ];
  return (
    <>
      <section id={id} className='flex flex-col md:gap-8 lg:gap-20 md:flex-row-reverse items-center text-secondary-gray text-center'>
        <div className='flex flex-col flex-1 md:items-start md:text-left md:basis-1/2'>
          <h2 className={`${notoSans.className} text-2xl lg:text-2rem font-bold`}>
            Ready to Elevate Your Next <span className='text-primary-red'>Project!</span>
          </h2>
          <p className='mt-3 text-secondary-gray-75 font-rubik lg:text-lg'>
            I specialize in JavaScript/TypeScript and have a strong professional background in Angular, SQL, HTML, CSS, Salesforce, and AWS.<br></br>
            Additionally, I&apos;m well-versed in other programming languages and tools such as Java, Python, Node.js, and React. Continuously expanding my skill set, I&apos;m
            always adding new capabilities to my repertoire.
          </p>
        </div>
        <div className='mt-6 flex flex-1 md:flex-1 md:basis-1/2 justify-start'>
          <div id={styles.skillsBackground}>
            {skillsArray.map((skill, i) => (
              <div key={skill.name} className={styles.skillCard}>
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

function Section2({id}: {id: string}) {
  return (
    <>
      <section id={id} className={`flex flex-col items-center text-secondary-gray text-center ${rubik.className}`}>
        <h2 className={`${notoSans.className} text-2xl lg:text-2rem font-bold mb-6 sm:mb-8`}>
          Recent <span className='text-primary-red'>Projects</span>
        </h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8'>
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </section>
    </>
  );
}

function Section3({id}: {id: string}) {
  return (
    <>
      <section id={id} className={`flex flex-col items-center text-secondary-gray text-center ${rubik.className} w-full`}>
        <h2 className={`${notoSans.className} text-2xl lg:text-2rem font-bold mb-6 sm:mb-8`}>
          Professional <span className='text-primary-red'>Experience</span>
        </h2>
        <div
          className='relative text-white
            p-6 md:p-9
            text-left
            w-full
            flex flex-col
            after:-skew-x-2 
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
          <div className='flex flex-col md:flex-row justify-between'>
            <div>
              <h3 className='text-xl'>Software Engineer I</h3>
              <div className='text-sm text-white/60 mb-2'>Pack Health - A Quest Diagnostics company</div>
            </div>
            <div className='text-base md:text-xl mb-4'>January 2022 - Present</div>
          </div>
          <ul className='text-sm font-light list-disc ml-3 gap-2 grid'>
            <li>Developed full-stack internal and member-facing web applications using Angular and Node.js, resulting in improved user experience and engagement.</li>
            <li>
              Integrated custom UI components into Salesforce pages, utilizing Apex, Visualforce, and Lightning Web Components, enhancing the Salesforce platform's functionality
              for the company.
            </li>
            <li>Managed and optimized AWS infrastructure with CloudFormation, Lambda, API Gateway, and S3, ensuring high availability and scalability for critical systems.</li>
            <li>Implemented the company's internal design system and custom UI components, customizing Bootstrap to maintain brand consistency and improve usability.</li>
            <li>Refactored legacy code, conducted ETL operations to synchronize data from Salesforce to Contentful, and deployed bug fixes to improve user satisfaction.</li>
          </ul>
        </div>
      </section>
    </>
  );
}

function Footer() {
  return (
    <footer className={`${styles.footer} text-center flex flex-col justify-center py-12 gap-8 font-rubik`}>
      <Brand></Brand>

      <div className='flex justify-center gap-6'>
        <SocialMediaButton icon={faLinkedinIn} href='https://www.linkedin.com/in/khang-vo-kvo/' />
        <SocialMediaButton icon={faGithub} href='https://github.com/kvo189' />
      </div>

      <ul className='flex justify-center gap-5 text-[#79869F]'>
        <li>
          <a className='' href=''>
            Home
          </a>
        </li>
        <li>
          <a href=''>About me</a>
        </li>
        <li>
          <a href=''>Projects</a>
        </li>
        <li>
          <a href=''>Experience</a>
        </li>
      </ul>
    </footer>
  );
}

function ProjectCard() {
  return (
    <div className='rounded-xl max-w-md shadow-xl relative'>
      <Image src={projectCardPlaceHolderImg} alt='' className='rounded-xl w-full relative'></Image>

      <div className='rounded-xl flex flex-col text-left p-6 -mt-16 z-10 bg-white relative'>
        <h3 className={`${rubik.className} text-2xl text-dark-blue`}>Project Name</h3>
        <div className='text-primary-red font-semibold text-sm'>12 March 2023</div>
        <p className='text-secondary-gray-75'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
        </p>
      </div>
    </div>
  );
}
