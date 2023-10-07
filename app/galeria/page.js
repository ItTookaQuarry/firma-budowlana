
import React from "react";
import zdjecie1 from "public/zdjecie1.jpg";
import cloudinary from "cloudinary"
import { v2 } from "cloudinary";
import ImgComp from "@/app/(components)/imageforGallery";
import Image from "next/image";
import { image } from "@nextui-org/theme";
export default async function page() {
 const results = await cloudinary.v2.search
 .expression('folder=mikrocement',"resource_type:image")
 .with_field('tags')
 .max_results(50)
 .execute()
 .then(result=>result.resources);


const images= results.map((each,index)=>{

let columnsingrid="lg:col-span-4 md:col-span-4 "



if(each.tags[0]==="2"){
  columnsingrid="lg:col-span-8 md:col-span-8"
}



if(each.tags[0]==="3"){
  columnsingrid="lg:col-span-8 md:col-span-12"
}

if(each.tags[0]==="0.5"){
  columnsingrid="lg:col-span-2 md:col-span-2"
}


  return (





<div class={`col-span-12 ${columnsingrid} h-[300px] `} 
key={index}>
<ImgComp 

srcc={each.public_id}
width={each.width}
height={each.height}

/>
</div>


  )
})





  return (
    <>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 4fr 1fr",}}>
        <div
          className=" lg:m-auto lg:max-w-[1200px] gap-3 grid grid-cols-12 grid-rows-2 px-8 col-span-full
          "
   
        >


{images}
  </div>
      </div>

     
    </>
  );
}
