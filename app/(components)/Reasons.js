"use client"
import { AiFillCheckCircle } from "react-icons/ai";
import { CldImage } from 'next-cloudinary';


import React from 'react'

export default function Reasons(props) {
  return (




    
    <div class="grid  h-[300px] w-[300px] lg:h-[500px] lg:w-[500px]  xl:h-[600px] xl:w-[600px]  col-span-2 lg:col-span-4 m-auto col-span-full md:col-span-4 md:h-[400px] md:w-[400px]">



      <div class="m-auto text-white text-center justify-center col-span-full row-span-full z-20 p-10 text-xs lg:text-lg backdrop-brightness-50 px-10">
      <strong> <h1 class="text-xl">{props.caption}</h1></strong> 
        <br></br>
          <p >
            {" "}
        
            {props.alt}
            <AiFillCheckCircle class="m-auto text-6xl text-white " />
          </p>
          </div>
          <CldImage
            src={props.source}
            height={700}
            width={700}
        
            class="xl:h-[600px] xl:w-[600px]   text-sm h-[300px] w-[300px] lg:h-[500px] lg:w-[500px] rounded-full col-span-full row-span-full z-10  object-fill md:h-[400px] md:w-[400px]"
          />

        </div> 
  )
}
