import React from 'react'
import Balancer from "react-wrap-balancer";



export default function Formatedtext(props) {
  return (
    <>


        <p class={props.textclass}><Balancer>{props.text}    </Balancer></p>

    </>
  )
}
