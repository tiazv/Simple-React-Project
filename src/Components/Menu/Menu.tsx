import * as React from 'react';
import Ekipa from '../Ekipe/Ekipa';
import './Menu.css';

interface MenuProps {
    ime: string;
};

const Menu = (props: MenuProps) => {
    return (
        <div className='menu'>
            <h1>Ekipa {props.ime}</h1>
        </div>
    );
};

export default Menu;