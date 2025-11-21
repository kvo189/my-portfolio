import { Navigation } from '@/components/Navigation';
import { Metadata } from 'next';
import { notoSans, rubik } from './font';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import profilePic from '@/assets/me_edit.png';
import portfolioPreviewSmartHome from '@/assets/portfolio/portfolio_preview_smart_home.png';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faGithub, faSquareJs, faJava, faSalesforce, faReact, faAngular, faAws, faNodeJs, faHtml5, faBootstrap } from '@fortawesome/free-brands-svg-icons';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { SocialMediaButton } from '@/components/SocialMediaButton/SocialMediaButton';
import { faAddressBook, faEnvelope, faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { Button } from '@/components/Button';
import styles from './page.module.css';
import { ContactCard } from '@/components/ContactCard';
import { Brand, ProjectCard, ExperienceCard } from '@/components';

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
        <HomeContent id='home' />
        <Section1 id='skills' />
        <Section2 id='portfolio' />
        <Section3 id='experience' />
        <ContactCard />
      </main>
      <Footer></Footer>
    </>
  );
}

function HomeContent({ id }: { id: string }) {
  return (
    <section id={id} className={`${rubik.className} text-center flex flex-col md:flex-row md:gap-8 lg:gap-20 items-center text-secondary-gray scroll-mt-20 md:scroll-mt-32`}>
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
          <Button icon={faPaperPlane} text="Let's talk" anchor={true} href='#contact' />
          <a href='#portfolio' className='text-secondary-gray2 md:text-lg hover:text-primary-red-hover transition-all'>
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

function Section1({ id }: { id: string }) {
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
      <section id={id} className='flex flex-col md:gap-8 lg:gap-20 md:flex-row-reverse items-center text-secondary-gray text-center scroll-mt-20 md:scroll-mt-32'>
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

function Section2({ id }: { id: string }) {
  return (
    <section id={id} className={`flex flex-col items-center text-secondary-gray text-center font-rubik w-full scroll-mt-20 md:scroll-mt-32`}>
      <h2 className={`${notoSans.className} text-2xl lg:text-2rem font-bold mb-6 sm:mb-8`}>
        Recent <span className='text-primary-red'>Projects</span>
      </h2>
      <div className='grid grid-cols-1 gap-6 sm:gap-8 lg:gap-12 xl:gap-16 w-full'>
        <ProjectCard
          imageSrc={portfolioPreviewSmartHome}
          title='Smart Home Application (POC)'
          description='Empowers users to monitor and control home temperature, manipulate sensors wired to appliances through the UI, and track utility costs and usages via interactive tables and graphs, all powered by mock data. An innovative glimpse into efficient home management.'
          startDate='February 2021 - March 2021'
          stack={['React', 'Material UI', 'Express', 'PostgreSQL']}
          link='https://khang-vo-smart-home.vercel.app/'
        />
      </div>
    </section>
  );
}

function Section3({ id }: { id: string }) {
  return (
    <section id={id} className={`flex flex-col items-center text-secondary-gray text-center ${rubik.className} w-full scroll-mt-20 md:scroll-mt-32`}>
      <h2 className={`${notoSans.className} text-2xl lg:text-2rem font-bold mb-6 sm:mb-8`}>
        Professional <span className='text-primary-red'>Experience</span>
      </h2>
      <div className='grid grid-cols-1 gap-6 sm:gap-8 w-full'>
        <ExperienceCard
          title='Software Engineer II'
          company='Lattice'
          location='San Francisco, CA (Remote)'
          period='Sep 2025 - Nov 2025'
        >
          <ul className='text-sm font-light list-disc ml-3 gap-2 grid'>
            <li>Built features for enterprise HR platform using React, TypeScript, GraphQL (Relay) in a production monorepo serving 5,000+ customers.</li>
            <li>Contributed to GraphQL API services using Node.js, NestJS, and PostgreSQL with Kysely query builder.</li>
            <li>Designed and analyzed A/B tests using Statsig feature flag platform to measure feature impact and guide product decisions.</li>
          </ul>
        </ExperienceCard>
        <ExperienceCard
          title='Software Engineer I'
          company='Pack Health - A Quest Diagnostics company'
          location='Birmingham, AL'
          period='Jan 2022 - Sep 2025'
        >
          <ul className='text-sm font-light list-disc ml-3 gap-2 grid'>
            <li>Developed and maintained full-stack web applications using Angular, Node.js, RESTful APIs, and PostgreSQL, supporting over 345,000 active members and improving user engagement and operational efficiency.</li>
            <li>Contributed to the development and deployment of 20+ Angular-based web applications, each hosted as a standalone domain or subdomain, serving both internal teams and external members.</li>
            <li>Architected and maintained cloud infrastructure across 500+ AWS Lambda functions, leveraging Infrastructure as Code (CloudFormation, Serverless Framework) to ensure 99.9% uptime, high availability, and fault tolerance.</li>
            <li>Refactored legacy codebases using object-oriented programming principles, implemented CI/CD pipelines with Bitbucket Pipelines, and applied Test-Driven Development (TDD) practices using Mocha, Chai, and Cypress—maintaining over 80% unit test coverage across core applications.</li>
            <li>Implemented ETL workflows to sync data from Contentful and Salesforce into PostgreSQL, enabling real-time and near-real-time data consistency across platforms. Salesforce updates are reflected in the database within seconds, while Contentful content changes sync to the database within 2 minutes, streamlining workflows and reducing manual coordination.</li>
            <li>Created a microservice for PDF generation using Node.js and AWS SDK that dynamically retrieves data models, generates documents, stores them in S3, and distributes secure pre-signed URLs—delivering over 1,000 personalized documents per month with near-instant access.</li>
            <li>Developed secure, role-based access portals for 1,000+ members and 50+ Health Advisors by integrating OAuth 2.0 authentication and authorization using AWS Cognito and Google Identity, ensuring data privacy and controlled access.</li>
            <li>Integrated custom UI components into Salesforce pages, utilizing Apex, Visualforce, and Lightning Web Components, enhancing the Salesforce platform&apos;s functionality and user experience for internal teams.</li>
          </ul>
        </ExperienceCard>
      </div>
    </section>
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
          <a className='hover:text-primary-red' href='#home'>
            Home
          </a>
        </li>
        <li>
          <a className='hover:text-primary-red' href='#skills'>
            About
          </a>
        </li>
        <li>
          <a className='hover:text-primary-red' href='#portfolio'>
            Portfolio
          </a>
        </li>
        <li>
          <a className='hover:text-primary-red' href='#experience'>
            Experience
          </a>
        </li>
        <li>
          <a className='hover:text-primary-red' href='#contact'>
            Contact
          </a>
        </li>
      </ul>
    </footer>
  );
}
