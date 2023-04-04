import React, { useEffect, useState } from "react";
import './App.css';
import { Noga } from './Components/Noga/Noga';
import { Outlet, Route, Routes, useOutletContext } from "react-router-dom";
import SeznamEkip from "./Components/Ekipe/SeznamEkip";
import Ekipa from "./Components/Ekipe/Ekipa";
import DodajEkipo from "./Components/Ekipe/DodajEkipo";
//import { ekipa1, ekipa2 } from "./Modules/Primer";

export interface IgralecInterface {
  ime: string;
  priimek: string;
  letoRojstva: number;
  krajRojstva?: string;
  id: number;
  visina: number;
  teza: number;
  poskodovan: boolean;
}

export interface EkipaInterface {
  ime: string;
  letoUstanovitve: number;
  direktor: string;
  trener: string;
  id: number;
  igralci: IgralecInterface[];
}

const miha: IgralecInterface = {
  ime: "Miha",
    priimek: "Novak",
    letoRojstva: 2000,
    krajRojstva: "Maribor",
    id: 1,
    visina: 184,
    teza: 72,
    poskodovan: true
}

const nika: IgralecInterface = {
  ime: "Nika",
    priimek: "Horvat",
    letoRojstva: 2001,
    krajRojstva: "Ptuj",
    id: 2,
    visina: 171,
    teza: 58,
    poskodovan: false
}

const luka: IgralecInterface = {
  ime: "Luka",
    priimek: "Simonič",
    letoRojstva: 1999,
    krajRojstva: "Maribor",
    id: 3,
    visina: 180,
    teza: 78,
    poskodovan: false
}

const zan: IgralecInterface = {
  ime: "Žan",
    priimek: "Serčič",
    letoRojstva: 1998,
    krajRojstva: "Maribor",
    id: 4,
    visina: 178,
    teza: 71,
    poskodovan: true
}

const ziga: IgralecInterface = {
    ime: "Žiga",
    priimek: "Krepek",
    letoRojstva: 2000,
    krajRojstva: "Maribor",
    id: 5,
    visina: 171,
    teza: 70,
    poskodovan: false
}

const klara: IgralecInterface = {
  ime: "Klara",
  priimek: "Bobek",
  letoRojstva: 1999,
  krajRojstva: "Ptuj",
  id: 6,
  visina: 171,
  teza: 55,
  poskodovan: false
}

const maja: IgralecInterface = {
  ime: "Maja",
  priimek: "Marčič",
  letoRojstva: 2001,
  krajRojstva: "Maribor",
  id: 7,
  visina: 166,
  teza: 59,
  poskodovan: false
}

const marko: IgralecInterface = {
  ime: "Marko",
  priimek: "Ugwoegbulam",
  letoRojstva: 2000,
  krajRojstva: "Maribor",
  id: 8,
  visina: 171,
  teza: 98,
  poskodovan: true
}

const igralci1: IgralecInterface[] = [miha, nika, luka, zan];
const igralci2: IgralecInterface[] = [marko, maja, klara, ziga];

const ekipa10: EkipaInterface = {
  id: 1,
  ime: "Najboljši",
  letoUstanovitve: 1999,
  direktor: "Janez Krsnik",
  trener: "Jože Prešeren",
  igralci: igralci1
};

const ekipa20: EkipaInterface = {
  id: 2,
  ime: "FERI",
  letoUstanovitve: 2001,
  direktor: "Matija Klepec",
  trener: "Matej Matjažič",
  igralci: igralci2
};

export const ekipe1: EkipaInterface[] = [ekipa10, ekipa20];

export function useEkipe(){
  return useOutletContext<any>();
  {/*
    const [ekipe, setEkipe] = useState<EkipaInterface[]>(ekipe1);
  
    useEffect(() => {
      fetch("/ekipe.json")
        .then((response) => response.json())
        .then((data) => setEkipe(data));
    }, []);
  
    return [ekipe || [], setEkipe];
  */}
  };

function App() {
  const [ekipe, setEkipe] = useState<EkipaInterface[]>(ekipe1);
  useEffect(() => {
    document.title = "Ekipa";
  }, []);

  return (
    <div className="App">
      <br />
      <SeznamEkip ekipe={ekipe} />
      <Outlet context={{ ekipe, setEkipe }} />
      <br />
      <br />
      <Noga />
    </div>
  )

} //function App

export default App;