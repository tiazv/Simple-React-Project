import React from "react";
import { IgralecInterface } from "../../App";

const initialState = {
    ime: "",
    priimek: "",
    krajRojstva: "",
    letoRojstva: 0,
    id: 0,
    visina: 0,
    teza: 0,
    poskodovan: false,
}

function DodajIgralca({dodajIgralca,}: //destructuring the dodajIgralca property from the props object!!!
  {dodajIgralca:
    (igralec: IgralecInterface) => void;
  }){
    const [igralec, setIgralec] = React.useState<IgralecInterface>(initialState);

    const handleChange = (e: { target: { value: any; name: any; checked: any } }) => {
        const { value, name, checked } = e.target;

        setIgralec((prevState: IgralecInterface) => {
            const nextState = {
              ...prevState,
              [name]: name === "poskodovan" ? checked : value,
            };
            return nextState; 
        });
    };

    const handleSubmit = (event: { preventDefault: () => void }) => {
        event.preventDefault();
        dodajIgralca(igralec);
        console.log("Dodajam");
        setIgralec(initialState);
    };

    return (
        <div>
          <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="ime">Ime:</label>
            <input type="text" id="ime" name="ime" onChange={handleChange} />
            <br />
            <label htmlFor="priimek">Priimek:</label>
            <input type="text" id="priimek" name="priimek" onChange={handleChange} />
            <br />
            <label htmlFor="krajRojstva">Kraj rojstva:</label>
            <input type="text" id="krajRojstva" name="krajRojstva" onChange={handleChange} />
            <br />
            <label htmlFor="letoRojstva">Leto rojstva:</label>
            <input type="number" id="letoRojstva" name="letoRojstva" onChange={handleChange} />
            <br />
            <label htmlFor="visina">Višina:</label>
            <input type="number" id="visina" name="visina" onChange={handleChange} />
            <br />
            <label htmlFor="teza">Teža:</label>
            <input type="number" id="teza" name="teza" onChange={handleChange} />
            <br />
            <label htmlFor="poskodovan">Poškodovan:</label>
            <input type="checkbox" id="poskodovan" name="poskodovan" onChange={handleChange} />
            <br />
            <button>Potrdi</button>
          </form>
          <br />
        </div>
      );
}

export default DodajIgralca;