import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Container from './Navbar'
import emoji from "react-easy-emoji";
var ReactRotatingText = require('react-rotating-text');
export default function Home() {
  return (
    <div>            <Container />
    <div className="flex flex-col container mx-auto px-4 justify-center items-start max-w-2xl mx-auto mb-16">

        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-2 text-black dark:text-white">
          Hey, Anush Here 
        </h1>
        <h2 className="greeting-nickname font-medium text-xl md:text-2xl tracking-tight mb-2 text-black dark:text-white">
              I am into <ReactRotatingText items={["Designing", "UI/UX", "Cloud Computing", "Web Development", "Open Source", "Mentoring"]} />
        </h2>
        <h2 className="prose text-gray-600 dark:text-gray-400 mb-16">
        I have been ardent practitioner of cloud computing for over 4 years and have experience across multiple platforms. On the other hand , I am active UI/UX designer, having worked with multiple startups to revamp their products into a more appealing look. As far as full stack goes, I have had my fair share of work in majority of the stacks like MERN,MEAN etc.
        </h2>
      </div>
      </div>
    )
}
