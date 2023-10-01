"use client";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
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
          return (<Card className="col-span-12 sm:col-span-4 h-[300px]" key={index}>
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src={zdjecie1}
          />
        </Card>)
        }
        if(each.span===2){
          return (    <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-8" key={index} >
 
          <Image
            removeWrapper
            alt="Relaxing app background"
            className="z-0 w-full h-full object-cover"
            src={zdjecie1}
            style={{margin:"auto"}}
          />
    
        </Card>)
        }
        if(each.span===3){
          return (    <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-12" key={index}>
 
          <Image
            removeWrapper
            alt="Relaxing app background"
            className="z-0 w-full h-full object-cover"
            src={zdjecie1}
            style={{margin:"auto"}}
          />
    
        </Card>)
        }
      })}
      
        </div>
      </div>

     
    </>
  );
}
