"use client"

import { CldImage } from 'next-cloudinary';
import React from 'react'

export default function ImgComp(props) {
  return (
    <CldImage
width={"2100"}
height="1200"
class=" object-cover h-full  lg:w-full lg:h-full absolute"
src={props.src}
fillBackground

alt="Zdjęcie z budowsy"
/>
  )
}
