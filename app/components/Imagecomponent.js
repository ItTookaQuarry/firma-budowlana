"use client"

import { CldImage } from 'next-cloudinary';
import React from 'react'

export default function ImgComp(props) {
  return (
    <CldImage
width={props.width} 
height={props.height}
class={props.class}
src={props.src}
fillBackground={{gravity:"west"}}

alt="Zdjęcie z budowsy"
/>
  )
}
