

import Image from 'next/image'; 
const Year = ({ children }) => {
  return (
    <h3 className="text-lg md:text-xl font-bold mb-4 tracking-tight text-gray-900 dark:text-gray-100">
      {children}
    </h3>
  );
};
const Step = ({ title, children }) => {
  return (
    <li className="mb-4 ml-2">
      <div className="flex items-center mb-2 text-green-700 dark:text-green-300">
        <span className="sr-only">Check</span>
        <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24">
          <g
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
            <path d="M22 4L12 14.01l-3-3" />
          </g>
        </svg>
        <p className="font-medium text-gray-900 dark:text-gray-100">{title}</p>
      </div>
      <p className="text-gray-700 dark:text-gray-400">{children}</p>
    </li>
  );
};
export default function About() {

  return (
    <div className="bg-white dark:bg-black">
      <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
        Timeline
      </h3>
      <Year>2018</Year>
      
          <div class=" pt-15">
            <div class="grid gap-6 mb-12 md:grid-cols-1">
              <div class="min-w-0 p-4 bg-gray-100 rounded-lg shadow-xs dark:bg-gray-800">
                <h4 class="mb-4 font-semibold text-gray-800 dark:text-gray-300">
             SRM Instiute Of Science And Technology
                </h4>
            <div className="flex items-center p-2 rounded-xl">
      <div class="flex items-center space-x-4">
      <Image
              className="center"
        src="/SrmSeal.png"
        alt="Picture of the author"
        width={300}
        height={300}
            />
            </div>
                <div className="flex-grow p-3">
                <p class="text-gray-600 dark:text-gray-400">
                <ul>
                    <Step title="Subjects">
                      Studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.
                    </Step>
                    <Step title="Courses">
                    Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.
                    </Step>
                 </ul>
                </p>
                </div>
                </div>
              </div>
              <div class="min-w-0 p-4 text-white bg-purple-600 rounded-lg shadow-xs">
                <h4 class="mb-4 font-semibold">
                  Colored card
                </h4>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Fuga, cum commodi a omnis numquam quod? Totam exercitationem
                  quos hic ipsam at qui cum numquam, sed amet ratione! Ratione,
                  nihil dolorum.
                </p>
              </div>
            </div>
</div>
 
          </div>
  );
}