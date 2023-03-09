import * as React from 'react';
import { Igralcek } from '../../App';
import Igralec from '../Igralec/Igralec';

interface TeloProps {
  igralci: Igralcek[];
}

function Telo(props: TeloProps) {
  const { igralci } = props;

  return (
    <div>
      {igralci.map((igralec) => (
        <Igralec key={igralec.id} igralec={igralec} />
      ))}
    </div>
  );
}

export default Telo;