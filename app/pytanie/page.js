
import React from "react";
import { Button } from "@nextui-org/button";
import { Textarea, Input } from "@nextui-org/input";
import { myAction } from "../(components)/actions";
import { subtitle} from "../(components)/primitives";

export default function App() {
  return (
    <>
      <div
        class="grid-1 grid gap-8 md:grid-cols-1 lg:grid-cols-2"
        style={{
          gap: "3px",
        }}
      >
        <div
          style={{
            margin: "auto",
            display: "grid",
            position: "relative",
            gap: "10px",
          }}
          class="row-start-2 row-span-2"
        >   <br></br>
          <h1 className={subtitle()} >Własciciel Łukasz Pastuszka</h1>
          <h2 className={subtitle()} style={{textAlign:"center"}}>536888195</h2>
          <h3 className={subtitle()} style={{textAlign:"center"}}>email</h3>
          <h4 className={subtitle()} style={{textAlign:"center"}}>adres</h4>
          <br></br>
        </div>

         <div
          style={{
            margin: "auto",
            display: "grid",
            position: "relative",
            gap: "10px",
          }}
          class="md:row-start-2 row-span-2 "
        >
          <h1 style={{ margin: "auto" }}>Napisz do nas wiadomość</h1>
          <form style={{ margin: "auto", display: "grid" }} action={myAction}>
            <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
              <Input type="email" label="Email" name="email" />
              <Input type="phonenumber" label="Numer Telefonu" name="number" />
            </div>
            <br></br>
            <Textarea
              labelPlacement="outside"
              placeholder="wiadomość"
              name="text"
            />
            <br></br>
            <Button color="default" type="submit" style={{ margin: "auto" }}>
              Wyślij
            </Button>
          </form>
        </div>

      </div>
    </>
  );
}
