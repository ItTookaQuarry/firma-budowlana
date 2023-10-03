"use client"
import React from 'react'
import { CldImage } from 'next-cloudinary';
export default function Imageaboutus(props) {
  return (
    <CldImage
    width={props.width} 
    height={props.height}
    class={props.class}
    src={props.src}
    fillBackground={{gravity:`${props.gravity}`}}
    
    alt="Zdjęcie z budowy"
    />
  ) 
}
