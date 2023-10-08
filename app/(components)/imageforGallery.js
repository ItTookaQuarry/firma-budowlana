"use client"

import React from 'react'
import { CldImage } from 'next-cloudinary';
export default function imageforGallery(props) {

        return (
          <CldImage
      width={props.width}
      height={props.height}
      src={props.srcc}
      class="z-0 w-full h-full object-cover rounded-lg"
    
       
      sizes="(max-width: 768px) 100vw,
      (max-width: 1200px) 50vw,
      33vw"
      
      />
  )
}
