"use client";
import React from "react";
import { CldImage } from "next-cloudinary";
import ImgComp from "@/app/components/Imagecomponent";
import { subtitle, title } from "../components/primitives";
import {AiFillCheckCircle} from "react-icons/ai";
import { motion, useAnimation } from "framer-motion";
import { InView, useInView } from "react-intersection-observer";
import Image from "next/image";
export default function Page() {
  const [ref, inView] = useInView();
  const [ref2, inView2] = useInView();
  const [ref3, inView3] = useInView();
  const [ref4, inView4] = useInView();
  const [ref5, inView5] = useInView();
  const [ref6, inView6] = useInView();
  const control = useAnimation();
  const control2 = useAnimation();
  const control3 = useAnimation();
  const control4 = useAnimation();
  const control5 = useAnimation();
  const control6 = useAnimation();

  React.useEffect(() => {
    inView ? control.start("visible") : control.start("hidden");
  }, [control, inView]);

  React.useEffect(() => {
    inView2 ? control2.start("visible") : control2.start("hidden");
  }, [control2, inView2]);

  React.useEffect(() => {
    inView3 ? control3.start("visible") : control3.start("hidden");
  }, [control3, inView3]);

  React.useEffect(() => {
    inView4 ? control4.start("visible") : control4.start("hidden");
  }, [control4, inView4]);



  React.useEffect(() => {
    inView5 ? control5.start("visible") : control5.start("hidden");
  }, [control5, inView5]);


  React.useEffect(() => {
    inView5 ? control5.start("visible") : control5.start("hidden");
  }, [control5, inView5]);

  React.useEffect(() => {
    inView6 ? control6.start("visible") : control6.start("hidden");
  }, [control6, inView6]);

  let refs = [ref, ref2, ref3, ref4, ref5, ref6];

  let controls = [control, control2, control3, control4, control5, control6];

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
  


      <CldImage
width={"2000"} 
height="2000"
class=" object-cover h-full  lg:w-full lg:h-full absolute"
src={"IMG-20230914-WA0141_1_niazwg"}
fillBackground

alt="Zdjęcie z budowsy"
/>
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
          <motion.div
    
            initial="hidden"
            animate={controls[index]}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
            class={`${classs} "bg-white relative w-[250px] m-auto  text-gray-800 font-semibold py-2 px-4 border  border-solid rounded shadow "`}
            key={index}
          >
            {" "}
            <p 
              class="m-auto text-white text-center justify-center "
              ref={refs[index]}
            >
              {" "}
              {each}
            </p>
            <AiFillCheckCircle class="m-auto text-6xl text-white" />
          </motion.div>
        );
      })}
    </div>
  );
}
