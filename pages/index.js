import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Container from './Navbar'
import emoji from "react-easy-emoji";
import Footer from './Footer';
import ProjectCard from './Projects';
import IconFromLibrary from './Skills';
import Subscribe from './Subsribe';
var ReactRotatingText = require('react-rotating-text');
export default function Home() {
  return (
    <div>            <Container />
    <div className="flex flex-col container mx-auto px-4 justify-center items-start max-w-6xl mx-auto ">

        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-2 text-black dark:text-white">
          Hey, Anush Here 
        </h1>
        <h2 className="greeting-nickname font-medium text-xl md:text-2xl tracking-tight mb-2 text-gray-600 dark:text-white">
              I am into <ReactRotatingText items={["Designing", "UI/UX", "Cloud Computing", "Web Development", "Open Source", "Mentoring"]} />
        </h2>
        <h2 className="prose text-gray-600 dark:text-gray-400 mb-16">
          A passionate individual who always thrive to work on end to end products which develop sustainable and scalable social and technical systems to create impact.
        </h2>
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
          Projects
      </h3>
      <ProjectCard
          title="Girslcript Boiler Plate Website"
          description="An open source project for creating a website that shall serve as a template for various chapters of GirlScript Foundation"
          href="https://girlscriptboilerplate.netlify.app/"
          icon="girlscript"
        />
        <ProjectCard
          title="Posture Fix"
          description="A Application that hleps you to keep in good posture"
          href="https://anushbhatia.github.io/posture/"
          icon="posture"
        />
        <ProjectCard
          title="Certificate Generator"
          description="Fast Certificate Generator using php and firebase."
          href="https://bdsc-cert.herokuapp.com/"
          icon="certificate"
        />
         <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
          Skills</h3>
        <IconFromLibrary />
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
          Newsletter</h3>
        <Subscribe />
        <Footer />

      </div>

      </div>
    )
}
