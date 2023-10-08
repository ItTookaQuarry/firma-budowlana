"use client";
import React from "react";
import { CldImage } from "next-cloudinary";
import ImgComp from "@/app/(components)/Imagecomponent";
import Balancer from "react-wrap-balancer";
import ImgComp2 from "@/app/(components)/Imagewithoutbackgroud";
import { AiFillCheckCircle } from "react-icons/ai";
import { motion, useAnimation } from "framer-motion";
import { InView, useInView } from "react-intersection-observer";
import ImgComp3 from "@/app/(components)/Imageaboutus";
import Firstpagepopingimage from "../(components)/Firstpagepopingimage";
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
    <>
      <div class=" h-auto gap-x-5 gap-y-5 grid grid-cols-4 relative lg:gap-y-10 lg:gap-x-10 backdrop-brightness-50 lg:h-screen">
        <Firstpagepopingimage source={"building-2762318_1280_ehrxmm"} />
        <ImgComp3
          src={"mikrocement/IMG-20230914-WA0090_ambwya"}
          class={
            " h-full w-screen lg:h-screen absolute lg:block md:block object-cover position-left object-left"
          }
          width={"2600"}
          height="1200"
          gravity={"north_west"}
        />

        <br></br>
        <div class="col-span-full lg:col-start-1 lg:col-span-2 m-auto backdrop-brightness-50 relative z-20">
          <h1
            class={`${title2}  col-start-1 col-span-4 m-auto font-bold
mb-4 text-4xl relative backdrop-brightness-50 `}
          >
            Logo
          </h1>
        </div>

        <div class="col-span-full  lg:col-start-2 lg:col-span-2  p-10 relative backdrop-brightness-50 w-5/6 z-30 text-xl">
          <h1 style={{ color: "white", fontWeight: "bold" }}>
            To firma która istnieje na rynku już od 2015 roku. Współpracowaliśmy
            z najlepszymi architektami w Londynie. Zrealizowaliśmy wiele
            projektów mieszkaniowych i komercyjnych w Wielkiej Brytanii i wielu
            innych miejscach w Europie.
          </h1>
        </div>

        {/* <div
        class={` col-span-full pl-4 
mb-4 text-4xl  font-bold  lg:m-auto  ${title2}`}
      >
        Dlaczego my?
      </div> */}

        {/* <div class=" col-span-full    relative backdrop-brightness-50 ">
        <h1 style={{ color: "white", fontWeight: "bold" }}>
          <Balancer>
            To co nas wyróżnia, to nie tylko długoletnie doświadczenie, ale
            także nasza zdolność do dostarczania niezwykłych rozwiązań dla
            klientów na całym kontynencie. Współpracując z renomowanymi markami,
            takimi jak Pokemon i Starbucks, dostarczyliśmy nie tylko produkty
            wysokiej jakości, ale także tworzyliśmy unikalne przestrzenie, które
            zachwycają zarówno klientów, jak i ich gości. Nasze wykończenia
            mikrocementem i żywicą poliuretanową są nie tylko trwałe, ale także
            kreatywne, co pozwala nam tworzyć dzieła sztuki na każdej
            powierzchni. Choć nasza historia rozpoczęła się w Londynie, nasza
            działalność rozprzestrzeniła się na teren całej Europy. Pracowaliśmy
            w różnych krajach, takich jak Austria, malownicze tereny Walii,
            pełne energii Anglii oraz magiczna Szkocja. To doświadczenie
            pozwoliło nam zrozumieć różnorodność kulturową i spełniać różnorodne
            potrzeby naszych klientów. Nasz zespół to grupa pasjonatów, którzy
            nieustannie dążą do doskonałości. Śledzimy najnowsze trendy w branży
            i rozwijamy nasze umiejętności, aby zawsze oferować rozwiązania,
            które są trwałe i modne. Naszą misją jest tworzenie trwałych i
            unikalnych przestrzeni, a każda powierzchnia jest dla nas płótnem,
            na którym tworzymy dzieła sztuki. Jeśli jesteś zainteresowany
            współpracą z nami lub chciałbyś dowiedzieć się więcej o naszych
            usługach, serdecznie zapraszamy do kontaktu. Razem możemy stworzyć
            przestrzenie, które zachwycą i będą trwałe przez wiele lat.
            Dziękujemy za zaufanie, które nam oferujesz, i zapraszamy do
            poznania nas bliżej!
          </Balancer>
        </h1>
      </div> */}
      </div>
      {/* <ImgComp3
          src={"mikrocement/IMG-20230914-WA0090_ambwya"}
          class={
            " lg:h-screen  lg:w-screen lg:h-screen absolute lg:block md:block z-1"
          }
          width={"2600"}
          height="1200"
          gravity={"north_west"}
        />
   */}
      {/* <br></br>
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
            class={`${classs} "bg-white relative w-[250px] m-auto  text-gray-800 font-semibold py-2 px-4 border  border-solid rounded shadow z-30"`}
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

      <br></br>
      <div
        class={` col-span-full pl-4 
mb-4 text-4xl m-auto font-bold  lg:m-auto  ${title2}`}
      >
        O nas
      </div> */}
      <br></br>
      <div className="grid h-auto w-auto w-screen grid-cols-6 gap-y-2.5">
        <div class="grid h-[300px] w-[300px] rounded-full col-span-full m-auto lg:col-start-1 lg:col-span-2 lg:h-[400px] lg:w-[400px]">
          <p class="m-auto text-white text-center justify-center col-span-full row-span-full z-20 p-10">
            {" "}
            Doskonałość i pasja w każdym projekcie.
            <AiFillCheckCircle class="m-auto text-6xl text-white " />
          </p>

          <CldImage
            src="IMG-20230914-WA0090_ambwya_Circle_ycluok "
            height={300}
            width={300}
            class=" bg-brightness-100 h-full w-full rounded-full col-span-full row-span-full z-10"
          />
        </div>

        <div class="grid h-[300px] w-[300px] rounded-full col-span-full m-auto lg:col-start-3 lg:col-span-2 lg:h-[400px] lg:w-[400px]">
          <p class="m-auto text-white text-center justify-center col-span-full row-span-full z-20 p-10">
            {" "}
            Doskonałość i pasja w każdym projekcie.
            <AiFillCheckCircle class="m-auto text-6xl text-white " />
          </p>

          <CldImage
            src="IMG-20230914-WA0090_ambwya_Circle_ycluok "
            height={300}
            width={300}
            class=" bg-brightness-100 h-full w-full rounded-full col-span-full row-span-full z-10"
          />
        </div>
      </div>
    </>
  );
}
