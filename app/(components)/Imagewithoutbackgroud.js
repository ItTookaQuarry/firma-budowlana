"use client"

import { CldImage } from 'next-cloudinary';
import React from 'react'

export default function ImgComp(props) {
  return (
    <CldImage
width={"1100"}
height="700"
src={props.src}
removeBackground
alt="Zdjęcie z budowsy"
class={props.clasnn}
 
crop=''
gravity="north_west"

/>
  )
}