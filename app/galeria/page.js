
import React from "react";
import zdjecie1 from "public/zdjecie1.jpg";
import cloudinary from "cloudinary"
import { v2 } from "cloudinary";
import ImgComp from "@/app/(components)/imageforGallery";
import Image from "next/image";
import { image } from "@nextui-org/theme";
export default async function page() {
 const results = await cloudinary.v2.search
 .expression('	folder=mikrocement')
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





<div class={`col-span-12 ${columnsingrid} h-[300px]`} >
<ImgComp 
key={index}
srcc={each.public_id}
width={each.width}
height={each.height}

/>
<div>{each.tags[0]}</div>
</div>


  )
})





  return (
    <>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 4fr 1fr",}}>
        <div
          className="max-x-[900px] lg:max-w-[1200px] gap-3 grid grid-cols-12 grid-rows-2 px-8 col-span-full
          "
   
        >


{images}



      {/* {table.map((each,index)=>{
        if(each.span===1){
          return (<div class="col-span-12 sm:col-span-4 h-[300px]" key={index}>
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover rounded-lg"
            src={zdjecie1}
          />
        </div>)
        }
        if(each.span===2){
          return (    <div  class="w-full h-[300px] col-span-12 sm:col-span-8" key={index} >
 
    
        </div>)
        }
        if(each.span===3){
          return (    <div  class="w-full h-[300px] col-span-12 sm:col-span-12 rounded-lg" key={index}>
 
          <Image
            removeWrapper
            alt="Relaxing app background"
            class="z-0 w-full h-full object-cover rounded-lg"
            src={zdjecie1}
            style={{margin:"auto"}}
          />
    
        </div>)
        }
      })} */}
      






        </div>
      </div>

     
    </>
  );
}
