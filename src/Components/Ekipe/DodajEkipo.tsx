import React, { useState } from "react";
import { EkipaInterface, useEkipe } from "../../App";

const initialState = {
    id: 0,
    ime: "",
    letoUstanovitve: 0,
    direktor: "",
    trener: "",
    igralci: [],
};

interface DodajEkipoProps {
    ekipe: EkipaInterface[];
  }

function DodajEkipo(props: DodajEkipoProps) {
    const [ekipa, setEkipa] = useState<EkipaInterface>(initialState);
    const { ekipe, setEkipe } = useEkipe();

    const handleChange = (e: { target: { value: any; name: any } }) => {
        const { value, name } = e.target;

        setEkipa((prevState: EkipaInterface) => {
            const nextState = {
              ...prevState,
              [name]: value,
            };
            return nextState;
        });
    };

    const handleSubmit = (event: { preventDefault: () => void }) => {
        event.preventDefault();
        ekipa.id = ekipe[ekipe.length - 1].id + 1;
        ekipa.igralci = [];
        console.log(ekipa);
        setEkipe((prevState: EkipaInterface[]) => [...prevState, ekipa]);
    };

    return (
        <div>
          <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="ime">Ime:</label>
            <input type="text" id="ime" name="ime" onChange={handleChange} />
            <br />
            <label htmlFor="letoUstanovitve">Leto ustanovitve:</label>
            <input
              type="number"
              id="letoUstanovitve"
              name="letoUstanovitve"
              onChange={handleChange}
            />
            <br />
            <label htmlFor="direktor">Direktor:</label>
            <input type="text" id="direktor" name="direktor" onChange={handleChange} />
            <br />
            <label htmlFor="trener">Trener:</label>
            <input type="text" id="trener" name="trener" onChange={handleChange} />
            <br />
            <button>Potrdi</button>
          </form>
        </div>
      );

}

export default DodajEkipo;