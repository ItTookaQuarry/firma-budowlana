"use client"
import React from 'react'
import { CldImage } from 'next-cloudinary';
export default function Imageaboutus(props) {
  return (
    <CldImage
    width={"2000"} 
    height="1400"
    class="  h-full   absolute object-cover"
    src={props.src}
    fillBackground
    
    alt="Zdjęcie z budowy"
    />
  )
}
