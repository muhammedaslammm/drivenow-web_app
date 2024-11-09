import Segment from "./Segment";
import getSegments from "../utils/getSegment";
import Shimmer_card from "../shimmerUI/shimmer_card";
import { useEffect, useState } from "react";

let CarSegment = () => {
  let [carSegments, setCarSegments] = useState(null);

  console.log(carSegments);

  useEffect(() => {
    let getCarSegments = async () => {
      let segs = await getSegments();
      setCarSegments(segs);
    };
    getCarSegments();
  }, []);

  let shimmerArray = new Array(4).fill(undefined);

  return (
    <>
      {carSegments ? (
        <>
          <div className="segment__head">Our Garage</div>
          <div className="car__segments">
            {Object.values(carSegments).map((segment, index) => (
              <Segment key={index} data={segment} />
            ))}
          </div>
        </>
      ) : (
        <div className="shimmer__section">
          <div className="shimmer__head"></div>
          <div className="shimmer__container">
            {shimmerArray.map((_, index) => (
              <Shimmer_card key={index} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default CarSegment;
