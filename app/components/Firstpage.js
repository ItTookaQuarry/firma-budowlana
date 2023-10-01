
import Aboutus from "@/app/components/aboutus";
import React from "react";
import ImgComp from "@/app/components/Imagecomponent";

export default function Firstpage() {









  return (
    <>
<div class="grid grid h-screen w-sreen overflow-hidden relative border-b-2 border-neutral-200" >

<ImgComp src={'IMG-20230914-WA0142_shxzzf'}/>
<div
                className="inline-block   m-auto relative max-w-lg text-center justify-center p-5 lg:p-10 backdrop-brightness-50"
                style={{
                  display: "grid",
                
                  margin: "auto",
                
                }}
              > 
                <br></br>
                <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight  md:text-5xl lg:text-6xl text-white relative col-span-full m-auto">    Wyjątkowe wykończenia z Mikrocementu i Żywicy.</h1>

                <a href="#aboutus" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300  relative">
Zobacz więcej
    <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
  </svg>
</a>
               </div>


               
              




</div>
   <Aboutus />

 
      
       
    </>
  );
}
