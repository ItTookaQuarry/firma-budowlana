import React from "react";
import Image from "next/image";
import zdjecie9 from "public/zdjecie1.jpg";
import { subtitle, title } from "./primitives";

import Link from "next/link";

export default function Aboutus() {
  return (
    <>
    <br id="aboutus"></br>
      <div className=" max-w-lg text-center justify-center m-auto  col-span-full lg:col-start-1 lg:col-span-2 m-auto">
        {" "}
        <section>
          <div>
            <h1 className={title()}> Nazwa</h1>
            <div>
              <br></br>
            </div>
            <strong>
              <p style={{ color: "white" }} class="lg:text-lg col">
                To firma, która istnieje na rynku już od 2015 roku.
                Współpracowaliśmy z najlepszymi architektami w Londynie.
                Zrealizowaliśmy wiele projektów mieszkaniowych i komercyjnych
                zarówno w Wielkiej Brytanii, jak i za granicą i jesteśmy dumni z
                zadowolenia klientów
              </p>
            </strong>
            <div>
              <br></br>
            </div>
            <button class="bg-white relative w-[150px] m-auto hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
              <Link href={"Onas"}> Czytaj więcej</Link>
            </button>
          </div>
        </section>{" "}
      </div>

      <div
        className="max-w-[600px] 
      
      
      col-span-full
      
      gap-3 grid col-span-full relative  px-8 m-auto lg:col-start-3 lg:col-span-2"
      >
        <div class="h-[300px] col-span-12  md:h-[400px]  lg:h-[600px] flex relative">
          <div
            className="inline-block max-w-lg text-center justify-center p-2 lg:p-10 relative z-20"
            style={{
              display: "grid",
              gridColumn: "2/3",
              gridRow: "1/2",
              margin: "auto",
            }}
          >
            <h1 className={title({})} style={{ position: "relative" }}>
              Solidność i Skuteczność
            </h1>
            <br></br>
            <h1
              className={title({})}
              style={{ position: "relative" }}
            ></h1>{" "}
            <br></br>
            <h1 className={title({})} style={{ position: "relative" }}>
              Zaufanie i Wydajność
            </h1>{" "}
            <br></br>
            <br></br>
          </div>
          <Image src={zdjecie9} fill class="z-0 brightness-50" />
          <button class="bg-white relative  hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            Zobacz naszą ofertę
          </button>
        </div>{" "}
        <br class="lg:hidden"></br>
      </div>
    </>
  );
}
