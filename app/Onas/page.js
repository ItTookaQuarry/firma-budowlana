import React from "react";
import ImgComp from "@/app/components/Imageaboutus";
import { subtitle, title } from "../components/primitives";
import {AiFillCheckCircle} from "react-icons/ai";

export default function Page() {
  
  const title2 =
    "font-extra bold leading-none tracking-tight md:text-5xl lg:text-6xl dark";

  const div1clas =
    "h-auto col-start-1 font-bold col-span-4 lg:col-start-2 lg:col-span-1 backdrop-brightness-50";

  const div2clas =
    "h-auto  col-start-1 font-bold col-span-4 rounded   lg:col-start-3 lg:col-span-1 backdrop-brightness-50 ";

  const tableofreasons = [
    "Doskonałość i pasja w każdym projekcie.",
    "Renomowane współprace, m.in. z Pokemon i Starbucks.",
    "Międzynarodowy zasięg w całej Europie.",
    "Tworzymy trwałe dzieła sztuki na powierzchniach.",
    "Zespół pasjonatów, gotowy na wyzwania.",
    "Ciągłe śledzenie najnowszych trendów w branży.",
  ];

  return (
    <div class="gap-x-5 gap-y-5 grid grid-cols-4 relative lg:gap-y-10 lg:gap-x-10 backdrop-brightness-50" >
  

<ImgComp src={"IMG-20230914-WA0146_1_r1erkj"}/>

      <br></br>
      <div class="col-start-1 col-span-4  m-auto backdrop-brightness-50">
        <h1 class={`${title2}  col-start-1 col-span-4 m-auto font-bold
mb-4 text-4xl relative backdrop-brightness-50`}>Logo</h1>
      </div>

      <div class="col-span-full col-start-1 lg:col-start-2 lg:col-span-2  m-auto px-14 text-center  relative backdrop-brightness-50 w-5/6">
        <h1
          className={subtitle({ class: "mt-4 lg:mt-8" })}
          style={{ color: "white",fontWeight:"bold" }}
        >
          To firma, która istnieje na rynku już od 2015 roku. Współpracowaliśmy
          z najlepszymi architektami w Londynie. Zrealizowaliśmy wiele projektów
          mieszkaniowych i komercyjnych zarówno w Wielkiej Brytanii, jak i za
          granicą i jesteśmy dumni z zadowolenia klientów
        </h1>
      </div>

      <div
        class={`lg:col-start2 lg:col-span2 col-start-1 col-span-4 m-auto
mb-4 text-4xl  font-bold ${title2}`}
      >
        Dlaczego my?
      </div>

      {tableofreasons.map((each, index) => {
        const classs = (index + 1) % 2 == 0 ? div2clas : div1clas;

        return (
          <div
    
          
            class={`${classs} "bg-white relative w-[250px] m-auto  text-gray-800 font-semibold py-2 px-4 border  border-solid rounded shadow "`}
            key={index}
          >
            {" "}
            <p 
              class="m-auto text-white text-center justify-center "
   
            >
              {" "}
              {each}
            </p>
            <AiFillCheckCircle class="m-auto text-6xl text-white" />
          </div>
        );
      })}

      
    </div>
  );
}
