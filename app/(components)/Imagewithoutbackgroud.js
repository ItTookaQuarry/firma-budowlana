"use client"

import { CldImage } from 'next-cloudinary';
import React from 'react'

export default function ImgComp(props) {
  return (
    <CldImage
width={"1200"}
height="700"
src={props.src}
removeBackground
alt="Zdjęcie z budowsy"
class="absolute h-full "
 

gravity="north_west"

/>
  )
}