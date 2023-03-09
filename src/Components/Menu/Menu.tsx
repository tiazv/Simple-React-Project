import * as React from 'react';
import { Ekipa } from "../../Modules/Primer";
import './Menu.css';

{/*
export function Menu() {
    return (
    <div>
        <h1>Ekipa {ekipca.ime}</h1>
    </div>
    )
}
*/}

const Menu = (props: {ime: string}) => {
    const { ime } = props;
    return (
        <div className='menu'>
            <h1>Ekipa {ime}</h1>
        </div>
    );
};

export default Menu;