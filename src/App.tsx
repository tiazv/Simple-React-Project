import './App.css';
import { Noga } from './Components/Noga/Noga';
import Opozorilo from './Components/Opozorilo/Opozorilo';
import Info from './Components/Info/Info';
import Menu from './Components/Menu/Menu';
import Telo from './Components/Telo/Telo';
import { useState } from 'react';

export interface Igralcek {
  ime: string;
  priimek: string;
  letoRojstva: number;
  krajRojstva?: string;
  id: number;
  visina: number;
  teza: number;
  poskodovan: boolean;
}

export default function App() {

  const miha: Igralcek = {
    ime: "Miha",
      priimek: "Novak",
      letoRojstva: 2000,
      krajRojstva: "Maribor",
      id: 1,
      visina: 184,
      teza: 72,
      poskodovan: true
  }
  
  const nika: Igralcek = {
    ime: "Nika",
      priimek: "Horvat",
      letoRojstva: 2001,
      krajRojstva: "Ptuj",
      id: 2,
      visina: 171,
      teza: 58,
      poskodovan: false
  }
  
  const luka: Igralcek = {
    ime: "Luka",
      priimek: "Simonič",
      letoRojstva: 1999,
      krajRojstva: "Maribor",
      id: 3,
      visina: 180,
      teza: 78,
      poskodovan: false
  }
  
  const zan: Igralcek = {
    ime: "Žan",
      priimek: "Serčič",
      letoRojstva: 1998,
      krajRojstva: "Maribor",
      id: 4,
      visina: 178,
      teza: 71,
      poskodovan: true
  }
  
  const igralceki: Igralcek[] = [miha, nika, luka, zan];

  const ekipica = {

  }

  const [ekipca, setEkipca] = useState({
    ime: "Najboljši",
    letoUstanovitve: 1999,
    direktor: "Janez Krsnik",
    trener: "Jože Prešeren",
    igralci: igralceki
  });

  let informacija: JSX.Element | null = null;
  if(igralceki.length < 11){
    informacija = <Opozorilo />;
  } else {
    informacija = <Info />;
  }

  return (
  <div className='container'>
   <Menu ime = {ekipca.ime} />
   {informacija}
   <Telo igralci = {igralceki}/>
   <Noga />
  </div>
  )

} //function App