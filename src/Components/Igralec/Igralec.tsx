import { Igralec } from "../../Modules/Oseba";
import { Igralcek } from "../../App";
import './Igralec.css';
import React from "react";


const Igralec1 = (props: {igralec: Igralcek}) => {
    const { igralec } = props;
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

export default Igralec1;