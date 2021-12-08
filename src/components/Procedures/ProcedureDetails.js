import { useParams } from 'react-router-dom';

export const ProcedureDetails = () => {
  let { procedureId } = useParams();
  return (
    <>
      <h1>  ID: {procedureId}</h1>
      <h5>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
        provident quaerat corrupti. Laboriosam asperiores tenetur deleniti ipsam
        dolorem praesentium. Sunt assumenda eum fuga similique ad non ullam
        adipisci laborum quo.
      </h5>
    </>
  );
};
