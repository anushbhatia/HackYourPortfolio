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
        <h2 className="greeting-nickname font-medium text-xl md:text-2xl tracking-tight mb-2 text-gray-600 dark:text-white">
              I am into <ReactRotatingText items={["Designing", "UI/UX", "Cloud Computing", "Web Development", "Open Source", "Mentoring"]} />
        </h2>
        <h2 className="prose text-gray-600 dark:text-gray-400 mb-16">
        A passionate individual who always thrive to work on end to end products which develop sustainable and scalable social and technical systems to create impact.
        </h2>
      </div>
      </div>
    )
}
