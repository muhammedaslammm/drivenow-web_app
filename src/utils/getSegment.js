import getCars from "./carDetails";
import segDetails from "./segmentDetails";

let getSegments = async () => {
  let allCars = await getCars();
  let segments = allCars.reduce((obj, car) => {
    let segment = car.segment;

    if (!obj[segment]) {
      obj[segment] = {
        segment: segment,
        tagline: segDetails[segment].description,
        count: 0,
      };
    }
    obj[segment].count += 1;
    return obj;
  }, {});

  return segments;
};

export default getSegments;
