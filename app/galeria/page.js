
import React from "react";
import zdjecie1 from "public/zdjecie1.jpg";



import Image from "next/image";
export default function page() {
 
  let table = [
   { span:2},
   { span:1},
   { span:1},
   { span:1},
   { span:1},
   { span:1},
   { span:2},
   { span:3},
   { span:2},
   {span:1},
   { span:1},
   { span:1},
   { span:1},
   {span:1},
   { span:1},
   {span:1}
  ];

  return (
    <>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr",}}>
        <div
          className="max-w-[900px] gap-3 grid grid-cols-12 grid-rows-2 px-8"
          style={{ gridColumn: "1/4", margin: "auto" }}
        >
      {table.map((each,index)=>{
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
 
          <Image
            removeWrapper
            alt="Relaxing app background"
            className="z-0 w-full h-full object-cover rounded-lg"
            src={zdjecie1}
            style={{margin:"auto"}}
          />
    
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
      })}
      
        </div>
      </div>

     
    </>
  );
}
