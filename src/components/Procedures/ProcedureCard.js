import './ProcedureCard.css';
export const ProcedureCard = ({ procedure }) => {
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
          <p>{procedure.description}</p>
        </div>
      </div>

      <button className="card-btn">
        <a href="#">More..</a>
      </button>
    </div>
  );
};
