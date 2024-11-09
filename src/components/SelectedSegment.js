import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import getSelectedSegment from "../utils/getSelectedSegement";
import SegmentCar from "./SegmentCars";

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

  return (
    <div className="selected__segment">
      <div className="selected__segment__head">{segment}</div>
      <div className="selected__segment__cars">
        {cars.length != 0 ? (
          cars.map((car, index) => {
            return (
              <Link key={index} to={`/segment/${segment}/${car.id}`}>
                <SegmentCar data={car} />
              </Link>
            );
          })
        ) : (
          <span>loading...</span>
        )}
      </div>
    </div>
  );
};

export default SelectedSegment;
