import Formatedtext from './Formatedtext'
import React from 'react'

export default function Firstpageheader() {
  return (
    <div
    className=" col-span-full row-span-full m-auto relative max-w-lg text-center justify-center p-5 lg:p-10  rounded-lg relative z-20  p-8"
    style={{
      display: "grid",
    }}
  >
    <br></br>
    <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight  md:text-5xl lg:text-6xl text-white relative col-span-full m-auto backdrop-brightness-50 lg:backdrop-brightness-50 
    md:backdrop-brightness-100
    
    rounded-lg">
      {" "}
     <Formatedtext text={" Wyjątkowe wykończenia z Mikrocementu i Żywicy."}/>
    </h1>

    <a
      href="#aboutus"
      class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-black bg-black text-white rounded-lg hover:bg-white hover:text-black focus:ring-4 focus:ring-black relative"
    >
      Zobacz więcej
      <svg
        class="w-3.5 h-3.5 ml-2"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 14 10"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M1 5h12m0 0L9 1m4 4L9 9"
        />
      </svg>
    </a>
  </div>
  )
}
