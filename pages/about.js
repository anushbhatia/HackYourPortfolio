import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import NextLink from 'next/link';
import Container from './Navbar';
import Timeline from './Timeline';
import Cards from './Cards'
import Footer from './Footer';
const Talk = ({ title, link, children }) => (
  <>
    <h3 className="font-medium mb-2 text-lg">
      <a
        className="flex items-center text-gray-900 dark:text-gray-100"
        target="_blank"
        rel="noopener noreferrer"
        href={link}
      >
        {title}
        <div>
          <svg
            className="h-4 w-4 ml-1"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </div>
      </a>
    </h3>
    <p className="text-gray-600 dark:text-gray-400 mb-8">{children}</p>
  </>
);

export default function About() {

  return (
      <div className="bg-white dark:bg-black">
          <Container />
          <div className="flex flex-col container mx-auto px-4 justify-center items-start max-w-6xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-2 text-black dark:text-white">
                  About Me
        </h1>
              <h2 h2 className="prose text-gray-600 dark:text-gray-400 mb-16">
                  I have been ardent practitioner of cloud computing for over 4 years and have experience across multiple platforms. On the other hand , I am active UI/UX designer, having worked with multiple startups to revamp their products into a more appealing look. As far as full stack goes, I have had my fair share of work in majority of the stacks like MERN,MEAN etc.
    </h2> 
        {/* <Timeline></Timeline>    */}
 
        <h2 className="font-bold text-3xl tracking-tight mb-4 text-black dark:text-white">
          Talks
        </h2>
        <Talk
          title="A Workshop On Flutter Development"
          link="https://youtu.be/jhn7UBai4L0"
        >
          For the development of apps on mobile or different platforms, we previously required to write different lines of code according to different browsers. So to Solve this problem  Flutter Came into use. Flutter is Google’s new portable UI toolkit for building beautiful, natively-compiled applications for mobile, web, and desktop from a single codebase. 
        </Talk>
        
        <Cards ></Cards> 

        <div>
        <h2 className="font-bold text-3xl tracking-tight mb-4 text-black dark:text-white">
         Volunteering
        </h2>    
    <div class="text-gray-600 bg-white">
        <div class="max-w-8xl mx-auto ">
          <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 ">
            <div class="p-10 md:w-1/3 mb-6 flex flex-col "> 
                <div class="rounded bg-white p-4  "  >
                  <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-white text-white">
                    <img src="./landing_logo.png"/>
                    </div>
                  <div class="flex-grow ">
                    <h2 class="text-xl title-font font-medium">Data Science Community</h2>
                    <p class="text-sm">Tech Lead</p>
                  </div>
                </div>
            </div>
            <div class="p-10 md:w-1/3 md:mb-0 mb-6 flex flex-col ">
              <div class="pattern-dots-md gray-light">
                <div class="rounded bg-white p-4 ">
                  <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-white ">
                  <img src="./hackerearth.png"/>
                  </div>
                  <div class="flex-grow">
                    <h2 class=" text-xl title-font font-medium mb-3">SRM Hackerearth</h2>
                    <p class="text-sm">
                   Creatives Lead
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="p-10 md:w-1/3 md:mb-0 mb-6 flex flex-col ">
              <div class="pattern-dots-md gray-light">
                <div class="rounded bg-white p-4 ">
                  <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-700 text-white mb-5 flex-shrink-0">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path></svg>
                  </div>
                  <div class="flex-grow">
                    <h2 class=" text-xl title-font font-medium mb-3">Developpement Back-end</h2>
                    <p class="text-sm">
                     Grâce à Php et ces frameworks (Larave, Symfoni, Slim), je peux vous réaliser un site dynamique c'est-à-dire qui interagie avec votre base de données 💪. Nous pouvons essayer.
                    </p>
                  </div>
                </div>
        </div>
                </div>
              </div>
            </div>
          </div>
          </div>
          <Footer/>
      </div>
 
          </div>
  );
}