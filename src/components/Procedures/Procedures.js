import './Procedures.css';
import { ProcedureCard } from './ProcedureCard.js';
import { useEffect, useState } from 'react';
import { getAll } from '../../services/beautyZoneService.js';


let initialData = undefined; //for cached procedures
export const Procedures = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getAll().then((data) => {
      setData(data)
      initialData = data
    });
  }, []);

  function searchDataHandler(e) {
    e.preventDefault();
    if (e.target.tagName == 'BUTTON') {
      const searchedText = e.currentTarget.searchedText.value;
      if(searchedText.trim() == ''){
        setData(initialData);
      }else {
        setData(initialData.filter(x => x.name.toLowerCase().includes(searchedText.toLowerCase()) || x.type.toLowerCase().includes(searchedText.toLowerCase())))
      }
    }
  }

  return (
    <>
      <form onClick={searchDataHandler} className="search-item">
          <input type="text" placeholder="Search...." id='searchedText'/>
          <button>Search</button>
      </form>
      <section className="all-cards-section">
        {data.map((x) => (
          <ProcedureCard procedure={x} key={x.id} />
        ))}
      </section>
    </>
  );
};
