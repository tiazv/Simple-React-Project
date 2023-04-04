import React from "react";
import { EkipaInterface } from "../../App";
import { Link } from "react-router-dom";
import "./Seznam.css";

interface SeznamEkipProps {
    ekipe: EkipaInterface[]; 
}

function SeznamEkip(props: SeznamEkipProps) {
    console.log(props.ekipe);
    return (
        <div className="list">
            <ul className="list-items">
                <li className="list-item">
                    <Link className="list-link" to={"/dodajEkipo"}>
                        Dodaj ekipo
                    </Link>
                </li>
                {props.ekipe.map((ekipa) => (
          <li key={ekipa.id} className="list-item">
            <Link to={`/ekipa/${ekipa.id}`} className="list-link">
              {ekipa.ime}
            </Link>
          </li>
        ))}
            </ul>
        </div>
    );
};

export default SeznamEkip;