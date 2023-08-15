import { Navigation } from '@/components/Navigation';
import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  const bodyPadding = 'px-5 sm:px-12 lg:px-32';
  return (
    <>
      <Head>
        <title>Home App</title>

        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin="anonymous" />
        <link
          href='https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'
          rel='stylesheet'
        />
      </Head>
      <Navigation padding={bodyPadding} />
      <main className={`flex min-h-screen flex-col items-center justify-between ${bodyPadding}`}></main>
    </>
  );
}
