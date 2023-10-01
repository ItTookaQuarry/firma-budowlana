"use client"

import { CldImage } from 'next-cloudinary';
import React from 'react'

export default function ImgComp() {
  return (
    <CldImage
width={"2100"}
height="1200"
class=" object-cover h-full  lg:w-full lg:h-full absolute"
src='IMG-20230914-WA0142_shxzzf'
fillBackground

alt="Zdjęcie z budowsy"
/>
  )
}
