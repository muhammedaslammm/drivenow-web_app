import Segment from "./Segment";
import getSegments from "../utils/getSegment";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

let CarSegment = () => {
  let [carSegments, setCarSegments] = useState([]);

  useEffect(() => {
    let getCarSegments = async () => {
      let segs = await getSegments();
      setCarSegments(segs);
    };
    getCarSegments();
  }, []);
  console.log(carSegments);

  return (
    <>
      <div className="segment__head">Our Garage</div>
      <div className="car__segments">
        {Object.values(carSegments).map((segment) => (
          <Segment data={segment} />
        ))}
      </div>
    </>
  );
};

export default CarSegment;
