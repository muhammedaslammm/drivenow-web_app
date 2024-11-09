import { useParams } from "react-router-dom";

let CarPage = () => {
  return (
    <div className="details__conatainer">
      <div className="details__top">
        <div className="details__top-left">image comes here</div>
        <div className="details__top-right">
          <div className="car__name">car name</div>
          <div className="car__distance&year">
            <div className="car__distance">distance</div>
            <div className="car__year">year</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarPage;
