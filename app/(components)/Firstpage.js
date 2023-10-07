import Aboutus from "@/app/(components)/aboutus";
import React from "react";
import ImgComp from "@/app/(components)/Imagecomponent";
import ImgComp3 from "@/app/(components)/Imageaboutus";
import ImgComp2 from "@/app/(components)/Imagewithoutbackgroud";
import Formatedtext from "@/app/(components)/Formatedtext";
import Firstpagepopingimage from "@/app/(components)/Firstpagepopingimage";
import Firstpageheader from "./Firstpageheader";
export default function Firstpage() {
  return (
    <>


<div class="hidden lg:grid md:grid h-auto w-auto  lg:h-screen lg:w-screen  grid-cols-4 gap-y-1   relative border-b-2 border-neutral-500 bg-gradient-to-r from-stone-50 to-stone-950 px-10"

>

<Firstpagepopingimage/>

<div className="grid max-w-lg justify-center m-auto  col-span-full  m-auto   row-span-full m-auto relative   text-lg lg:block ">
<Firstpageheader />


</div>

</div>




      <div class="grid grid h-screen w-sreen relative border-b-2 border-neutral-200 lg:hidden md:hidden">


<Firstpageheader />





<ImgComp
          src={"IMG-20230914-WA0142_1_twbfne"}
          class={
            "object-cover lg:hidden md:hidden h-full w-full absolute object-left"
            
          }

          width={"2300"} 
          height="1040"
       
          
        />

    
      </div>
      <Aboutus />
    </>
  );
}
