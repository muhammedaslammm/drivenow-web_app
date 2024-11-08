import getCars from "./carDetails";

let getSelectedSegment = async (segment) => {
  let cars = await getCars();
  let filteredCars = cars.filter((car) => car.segment === segment);
  return filteredCars;
};

export default getSelectedSegment;
