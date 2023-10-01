"use client"

import { CldImage } from 'next-cloudinary';
import React from 'react'

export default function ImgComp(props) {
  return (
    <CldImage
width={"2400"} 
height="1100"
class=" object-cover lg:object-scale-down h-full  lg:w-full lg:h-full absolute"
src={props.src}
fillBackground

alt="Zdjęcie z budowsy"
/>
  )
}
