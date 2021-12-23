import './ProcedureCard.css';
import { Link } from 'react-router-dom';


export const ProcedureCard = ({ procedure }) => {
  let previewDescription = procedure.description;

  return (
    <div className="card-container">
      <div className="image-container">
        <img src={procedure.imageUrl} alt="" />
      </div>
      <div className="card-content">
        <div className="card-title">
          <h3> {procedure.name}</h3>
        </div>
        <div className="card-body">
          <p>{procedure.type}</p>
        </div>
        <div className='card-description'>
          <p>{previewDescription.slice(0,33) + '....'}</p>
        </div>
      </div>

      <button className="card-btn">
        <Link to={`${procedure._id}`}>More..</Link>
      </button>

    </div>
  );
};
