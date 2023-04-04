import React, { useEffect, useState } from 'react';
import { EkipaInterface, IgralecInterface, useEkipe } from '../../App';
import Igralec from '../Igralec/Igralec';
import DodajIgralca from '../Igralec/DodajIgralca';


interface TeloProps {
  ekipa: EkipaInterface;
}

function Telo(props: TeloProps) {
  //const [igralci, setIgralci] = useState<IgralecInterface[]>([]);
  const { ekipe, setEkipe } = useEkipe();

  /*slaba praksa
  useEffect(() => {
    setIgralci(props.ekipa.igralci);
  }, [props.ekipa.igralci]);
   */
  /* dobra praksa
  if(igralci !== props.ekipa.igralci){
    setIgralci(props.ekipa.igralci);
  }
  */

  const dodajIgralca = (igralec: IgralecInterface) => {
    const updatedEkipe = [...ekipe];
    const ekipaUpdateIndex = updatedEkipe.findIndex((updatedEkipe) => updatedEkipe.id === props.ekipa.id);
    const ekipaUpdate = {...updatedEkipe[ekipaUpdateIndex]};
    ekipaUpdate.igralci.push(igralec);
    console.log("Pusham igralca");
    console.log(igralec);
    console.log(ekipaUpdate);

    const newItems = updatedEkipe.map((item) => {
      if (item.id === props.ekipa.id) {
        return ekipaUpdate;
      } else {
        return item;
      }
    });
    setEkipe(newItems);
  }

  return (
    <>
      <br />
      <b>Število igralcev: </b>
      {props.ekipa.igralci.length}
      <br />
      <b>Leto ustanovitve: </b>
      {props.ekipa.letoUstanovitve}
      <br />
      <b>Direktor: </b>
      {props.ekipa.direktor}
      <br />
      <b>Trener: </b>
      {props.ekipa.trener}
      <br />
      <ul>
        {props.ekipa.igralci.map((igralec, index) => (
          <Igralec key={index} igralec={igralec} />
        ))}
      </ul>
      <DodajIgralca dodajIgralca={dodajIgralca} />
      <br />
    </>
  );
}

export default Telo;