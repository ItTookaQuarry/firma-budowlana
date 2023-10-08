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


<div class="grid  h-screen w-screen  grid-cols-4 gap-y-1   relative border-b-2 border-neutral-500 bg-gradient-to-r from-stone-950  to-stone-50 px-10"

>

<Firstpagepopingimage source={"building-2762342_1280_pc4ocj"}/>


<ImgComp3
          src={"mikrocement/IMG-20230914-WA0090_ambwya"}
          class={
            "object-cover lg: h-full  lg:w-full lg:h-full absolute lg:block md:block "
          }
          width={"2600"}
          height="1200"
          gravity={"east"}
        />

<div className="grid max-w-lg justify-center m-auto  col-span-full  m-auto   row-span-full m-auto relative   text-lg lg:block ">
<Firstpageheader />


</div>

</div>





      <Aboutus />
    </>
  );
}
