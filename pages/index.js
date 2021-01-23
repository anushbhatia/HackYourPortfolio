import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Container from './Navbar'
export default function Home() {
  return (

    <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
            <Container />
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Hey 👋 , Anush Here
        </h1>
        <h2 className="prose text-gray-600 dark:text-gray-400 mb-16">
        I have been ardent practitioner of cloud computing for over 4 years and have experience across multiple platforms. On the other hand , I am active UI/UX designer, having worked with multiple startups to revamp their products into a more appealing look. As far as full stack goes, I have had my fair share of work in majority of the stacks like MERN,MEAN etc.
        </h2>
      </div>

    )
}
