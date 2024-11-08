import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useEffect } from "react";
import getSelectedSegment from "../utils/getSelectedSegement";
import SegmentCar from "./SegmentCars";

let SelectedSegment = () => {
  let { segment } = useParams();
  let [cars, setCars] = useState([]);

  useEffect(() => {
    let getcars = async () => {
      let segmentCars = await getSelectedSegment(segment);
      setCars(segmentCars);
      console.log(segmentCars);
    };
    getcars();
  }, []);

  return (
    <div className="selected__segment">
      <div className="selected__segment__head">{segment}</div>
      <div className="selected__segment__cars">
        {cars.length ? (
          cars.map((car) => <SegmentCar data={car} />)
        ) : (
          <span>loading...</span>
        )}
      </div>
    </div>
  );
};

export default SelectedSegment;
