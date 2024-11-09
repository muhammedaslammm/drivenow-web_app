import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import getSelectedSegment from "../utils/getSelectedSegement";
import SegmentCar from "./SegmentCars";
import Shimmer_card from "../shimmerUI/shimmer_card";

let SelectedSegment = () => {
  let { segment } = useParams();
  let [cars, setCars] = useState([]);
  console.log(cars);

  useEffect(() => {
    let getcars = async () => {
      let segmentCars = await getSelectedSegment(segment);
      setCars(segmentCars);
    };
    getcars();
  }, []);

  let shimmerArray = new Array(12).fill(undefined);

  return (
    <div className="selected__segment">
      {cars.length ? (
        <>
          <div className="selected__segment__head">{segment}</div>
          <div className="selected__segment__cars">
            {cars.map((car, index) => {
              return (
                <Link key={index} to={`/segment/${segment}/${car.id}`}>
                  <SegmentCar data={car} />
                </Link>
              );
            })}
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
    </div>
  );
};

export default SelectedSegment;
