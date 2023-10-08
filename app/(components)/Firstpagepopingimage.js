"use client";

import React from "react";
import ImgComp from "@/app/(components)/Imagewithoutbackgroud";




export default function Firstpagepopingimage(props) {



  return ( 
    <>
  
  
  
  <ImgComp src={props.source}
  clasnn={" absolute h-full z-20  col-start-1 object-cover" } />

  
  


  </>
  
  )
}
