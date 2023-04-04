import React from "react";
import { useParams } from "react-router-dom";
import { EkipaInterface, useEkipe } from "../../App";
import Info from "../Info/Info";
import Menu from "../Menu/Menu";
import Opozorilo from "../Opozorilo/Opozorilo";
import Telo from "../Telo/Telo";

interface PropsEkipa {
    ekipe: EkipaInterface[];
}

function Ekipa(props: PropsEkipa) {
    const { ekipaId } = useParams();
    console.log(ekipaId);

    const { ekipe, setEkipe } = useEkipe();
    //const ekipe = props.ekipe;
    console.log(ekipe);
    const ekipa: EkipaInterface | undefined = ekipe.find(
        (ekipa: EkipaInterface) => ekipa.id === parseInt(ekipaId || "")
    )

    console.log(ekipa);
    console.log(ekipa?.igralci);

    return (
        <div>
          {ekipa ? (
            <>
              <Menu ime={ekipa.ime} />
            </>
          ) : (
            <h1>Ni ekipe s tem id</h1>
          )}
          {ekipa ? ekipa.igralci.length < 5 ? <Opozorilo /> : <Info /> : ""}
          {ekipa && <Telo ekipa={ekipa} />}
        </div>
      );
}

export default Ekipa;