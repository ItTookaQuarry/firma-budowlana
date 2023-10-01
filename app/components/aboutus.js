import React from "react";
import Image from "next/image";
import zdjecie9 from "public/zdjecie1.jpg";
import { subtitle, title } from "./primitives";
import ImgComp from "@/app/components/Imagecomponent";
import Link from "next/link";
import ImgComp2 from "@/app/components/Imagewithoutbackgroud";
export default function Aboutus() {
  return (
    <>
      <div
        class=" grid grid-cols-4 gap-y-1 h-screen w-sreen  md:h-screen md:w-screen relative"
        id="aboutus"
      >
        <ImgComp src={"IMG-20230914-WA0125_2_w18mrg"} />

        <div className="px-10 max-w-lg text-center justify-center m-auto  col-span-full  lg:col-start-1 lg:col-span-2  row-span-full m-auto relative  backdrop-brightness-50 text-lg lg:px-20">
          {" "}
          <section>
            <div>
              <div>
                <br></br>
              </div>
              <strong>
                <p style={{ color: "white" }} class="lg:text-lg col">
                  To firma, która istnieje na rynku już od 2015 roku.
                  Współpracowaliśmy z najlepszymi architektami w Londynie.
                  Zrealizowaliśmy wiele projektów mieszkaniowych i komercyjnych
                  zarówno w Wielkiej Brytanii, jak i za granicą i jesteśmy dumni
                  z zadowolenia klientów
                </p>
              </strong>
              <div>
                <br></br>
              </div>
              <Link
                href="Onas"
                class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300  relative"
              >
                Poznaj naszą historię
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
          </section>{" "}
        </div>

        <div className="hidden  max-w-lg text-center justify-center m-auto  col-span-full  lg:col-start-3 lg:col-span-2  row-span-full m-auto relative  backdrop-brightness-50 text-lg lg:block px-20">
          {" "}
          <section>
            <div>
              <div>
                <br></br>
              </div>
              <strong>
                <p style={{ color: "white" }} class="lg:text-lg col">
                  Nasza oferta obejmuje szeroki zakres usług, dostosowanych do
                  różnych potrzeb klientów, zarówno w zakresie mieszkań
                  prywatnych, jak i obiektów komercyjnych.
                </p>
              </strong>
              <div>
                <br></br>
              </div>
              <Link
                href="/"
                class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300  relative"
              >
                Poznaj naszą ofertę
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
          </section>{" "}
        </div>
      </div>

      <div class="grid lg:hidden h-auto w-auto grid-cols-4 gap-y-1   relative">
        <div class="col-span-full  row-span-full justify-self-end">
          <ImgComp2 src={"building-2762318_1280_tex4lo"} />
        </div>

        <div className=" max-w-lg text-center justify-center m-auto  col-span-full  lg:col-start-3 lg:col-span-2  row-span-full m-auto relative  backdrop-brightness-50 text-lg lg:block px-20">
          {" "}
          <section>
            <div>
              <div>
                <br></br>
              </div>
              <strong>
                <p style={{ color: "white" }} class="lg:text-lg col">
                  Nasza oferta obejmuje szeroki zakres usług, dostosowanych do
                  różnych potrzeb klientów, zarówno w zakresie mieszkań
                  prywatnych, jak i obiektów komercyjnych.
                </p>
              </strong>
              <div>
                <br></br>
              </div>
              <Link
                href="/"
                class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300  relative"
              >
                Poznaj naszą ofertę
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
          </section>{" "}
        </div>
      </div>
    </>
  );
}
