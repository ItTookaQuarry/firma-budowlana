"use client"

import { CldImage } from 'next-cloudinary';
import React from 'react'

export default function ImgComp(props) {
  return (
    <CldImage
width={"2200"} 
height="1000"
class={props.class}
src={props.src}
fillBackground={{gravity:"north_west"}}

alt="Zdjęcie z budowsy"
/>
  )
}
