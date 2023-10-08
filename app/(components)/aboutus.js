import React from "react";
import Image from "next/image";
import Opis from "@/app/(components)/Opis";
import ImgComp from "@/app/(components)/Imagecomponent";
import Link from "next/link";
import ImgComp2 from "@/app/(components)/Imagewithoutbackgroud";
import ImgComp3 from "@/app/(components)/Imageaboutus";
import Formatedtext from "@/app/(components)/Formatedtext";
import Firstpageheader from "@/app/(components)/Firstpageheader";
export default function Aboutus() {
 
  return (
    <>
      <div
        class=" grid grid-cols-4 gap-y-1 lg:h-screen lg:w-sreen  relative border-b-2 border-neutral-200"
        id="aboutus"
      > 
        <ImgComp3
          src={"IMG-20230914-WA0125_3_maolg9"}
          class={
            "object-cover lg: h-full  lg:w-full lg:h-full absolute lg:block md:block "
          }
          width={"2600"}
          height="1200"
          gravity={"north"}
        />
 <Opis onas={true}/>
       
     
      </div>

      <div class="grid  h-screen w-screen lg:hidden  md:hidden grid-cols-4 gap-y-1   relative border-b-2 border-neutral-500 bg-gradient-to-r from-zinc-100 to-zinc-900 ">

      <ImgComp
          src={"IMG-20230914-WA0142_1_twbfne"}
          class={
            "object-cover lg:hidden md:hidden h-full w-full absolute object-left"
            
          }

          width={"2300"} 
          height="1040"
       
          
        />
        
   <Opis/>
     
        
          
      

      </div>

      <div class="hidden grid h-screen w-screen lg:grid md:block grid-cols-4 gap-y-1   relative border-b-2 border-neutral-500 bg-gradient-to-r from-zinc-100 to-zinc-900 ">

      
 <ImgComp
          src={"IMG-20230914-WA0075_2_yulrxa"}
          class={
            "hidden  object-cover lg: h-full  lg:w-full lg:h-full absolute lg:block md:block object-left"
            
          }
       
          width={"2600"} 
height="1200"
        /> 

 
<div className="grid justify-center m-auto  col-span-full  m-auto   row-span-full m-auto relative   text-lg lg:block ">
        <Opis/>
        </div>
          
      

      </div>
    </>
  );
}
