"use client"

import { CldImage } from 'next-cloudinary';
import React from 'react'

export default function ImgComp(props) {
  return (
    <CldImage
width={"800"}
height="500"
src={props.src}
removeBackground
alt="Zdjęcie z budowsy"


gravity="north_west"

/>
  )
}