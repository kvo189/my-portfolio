import { Inter, Urbanist, Rubik, Noto_Sans } from 'next/font/google'
 
export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-rubik',
  display: 'auto',
  preload: true,
})
 
export const urbanist = Urbanist({
  subsets: ['latin'],
  variable: '--font-urbanist',
  display: 'auto',
  preload: true,
})
 
export const rubik = Rubik({
  subsets: ['latin'],
  variable: '--font-rubik',
  display: 'auto',
  preload: true,
})
 
export const notoSans = Noto_Sans({
  subsets: ['latin'],
  weight: ["400", "700"],
  display: 'auto',
  preload: true,
})