//import { Igralec } from "../../Modules/Oseba";
import { IgralecInterface } from "../../App";
import './Igralec.css';
import React from "react";

interface IgralecProps {
    igralec: IgralecInterface;
};

const Igralec = (props: IgralecProps) => {
    const igralec = props.igralec;
    return (
        <div className="igralec">
            <b>{igralec.ime} {igralec.priimek}</b>
            <ul>
                <li>Kraj in leto rojstva: {igralec.krajRojstva}, {igralec.letoRojstva}</li>
                <li>Višina: {igralec.visina} cm</li>
                <li>Teža: {igralec.teza} kg</li>
                <li>Poškodovan: {igralec.poskodovan ? "Da" : "Ne"}</li>
            </ul>
        </div>
    );
};

export default Igralec;