import './Procedures.css';
import { ProcedureCard } from "./ProcedureCard.js";
import { useEffect, useState } from 'react';
import { getAll } from '../../services/beautyZoneService.js';

export const Procedures = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getAll().then(data =>  setData(data))
  },
  [])

  return( 
    <>
      <section className="search-item">
        <input type="text" placeholder="Search...." />
        <button>Search</button>
      </section>
      <section className="all-cards-section">
        {Object.values(data).map(x => <ProcedureCard procedure={x} key={x.id}/>)}
      </section>
    </>);
};
