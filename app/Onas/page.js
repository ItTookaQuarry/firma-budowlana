
import React from "react";

import cloudinary from "cloudinary";
import { v2 } from "cloudinary";
import Reason from "@/app/(components)/Reasons";
import ImgComp3 from "@/app/(components)/Imageaboutus";
import Firstpagepopingimage from "../(components)/Firstpagepopingimage";
export default async function Page() {

  const results = await cloudinary.v2.search
    .expression("folder=reasons", "resource_type:image")
    .with_field("context")
    .max_results(50)
    .execute()
    .then((result) => result.resources)





   

const Reasons = results.map((each,index)=>{
  return ( <Reason alt={each.context.alt} caption={each.context.caption} key={index} source={each.public_id}/>)
})


 
 
  const title2 =
    "font-extra bold leading-none tracking-tight md:text-5xl lg:text-6xl dark";


  return (
    <>
      <div class=" h-auto gap-x-5 gap-y-5 grid grid-cols-3 relative lg:gap-y-10 lg:gap-x-10 backdrop-brightness-50 lg:h-screen border-neutral-500 border-b-2 ">
        <Firstpagepopingimage source={"building-2762318_1280_ehrxmm"} /> 
        <ImgComp3
          src={"mikrocement/IMG-20230914-WA0090_ambwya"}
          class={
            " h-full w-screen lg:h-screen absolute lg:block md:block  position-left object-left"
          }
          width={"2600"}
          height="1200"
          gravity={"north_west"}
        />

        <br></br>
        <div class="col-span-full lg:col-start-1 lg:col-span-2 m-auto backdrop-brightness-50 relative z-20">
          <h1
            class={`${title2}  col-start-1 col-span-4 m-auto font-bold
mb-4 text-4xl relative backdrop-brightness-50 `}
          >
            Logo
          </h1>
        </div>

        <div class="col-span-full  lg:col-start-2 lg:col-span-2  p-10 relative backdrop-brightness-50 w-5/6 z-30 text-xl ">
          <h1 style={{ color: "white", fontWeight: "bold" }}>
            To firma która istnieje na rynku już od 2015 roku. Współpracowaliśmy
            z najlepszymi architektami w Londynie. Zrealizowaliśmy wiele
            projektów mieszkaniowych i komercyjnych w Wielkiej Brytanii i wielu
            innych miejscach w Europie.
          </h1>
        </div>

      </div>
    
      
      <br></br>

  

       <div className="grid h-auto w-auto  grid-cols-8 gap-y-12  col-span-full m-auto lg:col-start-2 lg:col-span-10 md:col-span-full ">


     
{Reasons}
     

  
      </div> 






    </>
  );
}
