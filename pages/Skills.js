import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJsSquare, faReact, faGoogle, faBootstrap, faCuttlefish, faGit, faAws, faDocker } from "@fortawesome/free-brands-svg-icons";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCloud, faFire,faTerminal } from '@fortawesome/free-solid-svg-icons';
library.add(
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faReact
);
export default function IconFromLibrary() {
  return (
    <div class=" bg-white">
  
      <div class="mt-10">
        <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-5">
          <div class="flex">
            <div class="flex-shrink-0">
              <div class="flex items-center justify-center h-12 w-12 rounded-md bg-black text-white">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
            </div>
            <div class="ml-4">
              <dt class="text-lg leading-6 font-medium text-gray-900">
                Web Dev
              </dt>
              <dd class="mt-2 text-base text-gray-500 ">
              <div
    class="text-xs inline-flex items-center font-medium leading-sm uppercase px-3 py-2 bg-gray-100 text-gray-700 rounded-full"
                >
                                  <FontAwesomeIcon
  icon={faHtml5}
  mask={['fas', 'circle']}
  transform="grow-7 left-1.5 "
  fixedWidth
/>
                  HTML
  </div>
  <div
    class="text-xs inline-flex items-center font-medium leading-sm uppercase px-3 m-1 py-1 bg-gray-100 text-gray-700 rounded-full"
  ><FontAwesomeIcon
  icon={faCss3Alt}
  mask={['fas', 'circle']}
  transform="grow-7 left-1.5 "
  fixedWidth
/>
                  CSS
  </div>
  <div
    class="text-xs inline-flex items-center font-medium leading-sm uppercase px-3 m-1 py-1 bg-gray-100 text-gray-700 rounded-full"
                >
  <FontAwesomeIcon
  icon={faJsSquare}
  mask={['fas', 'circle']}
  transform="grow-7 left-1.5 "
  fixedWidth
/>
                  JS
  </div>
  <div
    class="text-xs inline-flex items-center font-medium leading-sm uppercase px-3 m-1 py-1 bg-gray-100 text-gray-700 rounded-full"
                >
                  <FontAwesomeIcon
  icon={faReact}
  mask={['fas', 'circle']}
  transform="grow-7 left-1.5 "
  fixedWidth
/>
  React
  </div>
  <div
    class="text-xs inline-flex items-center font-medium leading-sm uppercase px-3 m-1 py-1 bg-gray-100 text-gray-700 rounded-full"
                >
                  <FontAwesomeIcon
  icon={faFire}
  mask={['fas', 'circle']}
  transform="grow-7 left-1.5 "
  fixedWidth
/>
  Firebase
  </div>

  <div
    class="text-xs inline-flex items-center font-medium leading-sm uppercase px-3 m-1 py-1 bg-gray-100 text-gray-700 rounded-full"
                >
<FontAwesomeIcon
  icon={faGoogle}
  mask={['fas', 'circle']}
  transform="grow-2 left-1.5 "
  fixedWidth
/>
  Materializecss
  </div>
  <div
    class="text-xs inline-flex items-center font-medium leading-sm uppercase px-3 m-1 py-1 bg-gray-100 text-gray-700 rounded-full"
                >
<FontAwesomeIcon
  icon={faBootstrap}
  mask={['fas', 'circle']}
  transform="grow-7 left-1.5 "
  fixedWidth
/>
  Bootstrap
  </div>
                
              </dd>
            </div>
          </div>
  
          <div class="flex">
            <div class="flex-shrink-0">
              <div class="flex items-center justify-center h-12 w-12 rounded-md bg-black text-white">
              <FontAwesomeIcon
  icon={faTerminal}
  mask={['fas', 'circle']}
  transform="grow-1 left-1.5 "
  fixedWidth
/>
              </div>
            </div>
            <div class="ml-4">
              <dt class="text-lg leading-6 font-medium text-gray-900">
                Coding
              </dt>
              <dd class="mt-2 text-base text-gray-500">
              <div
    class="text-xs inline-flex items-center font-medium leading-sm uppercase px-3 m-1 py-1 bg-gray-100 text-gray-700 rounded-full"
                >
<FontAwesomeIcon
  icon={faCuttlefish}
  mask={['fas', 'circle']}
  transform="grow-7 left-1.5 "
  fixedWidth
/>
  C
  </div> 
  <div
    class="text-xs inline-flex items-center font-medium leading-sm uppercase px-3 m-1 py-1 bg-gray-100 text-gray-700 rounded-full"
                >
  Cpp
  </div> 
              </dd>
            </div>
          </div>
  
          <div class="flex">
            <div class="flex-shrink-0">
              <div class="flex items-center justify-center h-12 w-12 rounded-md bg-black text-white">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
            <div class="ml-4">
              <dt class="text-lg leading-6 font-medium text-gray-900">
                Deployment
              </dt>
              <dd class="mt-2 text-base text-gray-500">
              <div
    class="text-xs inline-flex items-center font-medium leading-sm uppercase px-3 m-1 py-1 bg-gray-100 text-gray-700 rounded-full"
                >
<FontAwesomeIcon
  icon={faGit}
  mask={['fas', 'circle']}
  transform="grow-7 left-1.5 "
  fixedWidth
/>
                </div> 
                <div
    class="text-xs inline-flex items-center font-medium leading-sm uppercase px-3 m-1 py-1 bg-gray-100 text-gray-700 rounded-full"
                >
<FontAwesomeIcon
  icon={faCloud}
  mask={['fas', 'circle']}
  transform="grow-7 left-6 "
  fixedWidth
/>GCP
  </div> 
  <div
    class="text-xs inline-flex items-center font-medium leading-sm uppercase px-3 m-1 py-1 bg-gray-100 text-gray-700 rounded-full"
                >
<FontAwesomeIcon
  icon={faAws}
  mask={['fas', 'circle']}
  transform="grow-7 left-6 "
  fixedWidth
/>AWS
  </div> 
  <div
    class="text-xs inline-flex items-center font-medium leading-sm uppercase px-3 m-1 py-1 bg-gray-100 text-gray-700 rounded-full"
                >
<FontAwesomeIcon
  icon={faDocker}
  mask={['fas', 'circle']}
  transform="grow-7 left-6 "
  fixedWidth
/>Docker
  </div> 
              </dd>
            </div>
          </div>
        </dl>
      </div>
    </div>
    )
  }