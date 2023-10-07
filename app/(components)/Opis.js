import React from 'react'
import Formatedtext from "@/app/(components)/Formatedtext";
import Link from 'next/link';
export default function Opis(props) {


    const onas =
    "jesteśmy firmą która istnieje na rynku już od 2015 roku. Współpracowaliśmy z najlepszymi architektami w Londynie. Zrealizowaliśmy wiele projektów mieszkaniowych i komercyjnychw Wielkiej Brytanii  i wielu innych miejscach  w Europie.";
  const oferta =
    "  Nasza oferta obejmuje szeroki zakres usług, dostosowanych do różnych potrzeb klientów, zarówno w zakresie mieszkań prywatnych, jak i obiektów komercyjnych.";

const todisplay= props.onas ? onas : oferta

const buttontext= props.onas ?  " Poznaj naszą historię" : "Zobacz naszą ofertę"
 
const linkk= props.onas ? "Onas" : "/"
  return (
    <div className="grid max-w-lg   col-span-full    row-span-full m-auto relative   text-lg lg:block p-10">
    {" "}
    <br></br>
    <strong>
      <div class="backdrop-brightness-50   rounded-lg grid">
        <Formatedtext
          text={todisplay}
          textclass={
            "lg:text-lg  p-8  row-span-full m-auto"
          }
        />
      </div>
    </strong>
    <div>
      <br></br>
    </div>
    <div class="text-center">
      <Link
        href={linkk}
        class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-black bg-black text-white rounded-lg hover:bg-white hover:text-black focus:ring-4 focus:ring-black relative"
      >
{buttontext}
        <svg
          class="w-3.5 h-3.5 ml-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </Link>
    </div>
  </div>
  )
}
