import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import NextLink from 'next/link';
import Container from './Navbar';
import Timeline from './Timeline';
import Cards from './Cards'
import Footer from './Footer';

export default function About() {

  return (
      <div className="bg-white dark:bg-black">
          <Container />
          <div className="flex flex-col container mx-auto px-4 justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-2 text-black dark:text-white">
                  About Me
        </h1>
              <h2 h2 className="prose text-gray-600 dark:text-gray-400 mb-16">
                  I have been ardent practitioner of cloud computing for over 4 years and have experience across multiple platforms. On the other hand , I am active UI/UX designer, having worked with multiple startups to revamp their products into a more appealing look. As far as full stack goes, I have had my fair share of work in majority of the stacks like MERN,MEAN etc.
    </h2> 
        {/* <Timeline></Timeline>    */}
    <Cards ></Cards>    
      </div>
      <Footer/>
          </div>
  );
}