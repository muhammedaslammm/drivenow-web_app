const usedCars = [
  {
    id: 1,
    name: "Skoda Rapid",
    km: 55000,
    year: 2018,
    segment: "Sedan",
    price: 600000,
  },
  {
    id: 2,
    name: "Volkswagen Polo",
    km: 40000,
    year: 2019,
    segment: "Hatchback",
    price: 500000,
  },
  {
    id: 3,
    name: "Volkswagen Vento",
    km: 62000,
    year: 2017,
    segment: "Sedan",
    price: 450000,
  },
  {
    id: 4,
    name: "Toyota Fortuner",
    km: 80000,
    year: 2016,
    segment: "SUV",
    price: 1400000,
  },
  {
    id: 5,
    name: "Fiat Punto",
    km: 45000,
    year: 2015,
    segment: "Hatchback",
    price: 350000,
  },
  {
    id: 6,
    name: "Toyota Innova Crysta",
    km: 70000,
    year: 2018,
    segment: "MPV",
    price: 1000000,
  },
  {
    id: 7,
    name: "Ford Figo",
    km: 30000,
    year: 2020,
    segment: "Hatchback",
    price: 580000,
  },
  {
    id: 8,
    name: "Skoda Rapid",
    km: 61000,
    year: 2015,
    segment: "Sedan",
    price: 410000,
  },
  {
    id: 9,
    name: "Volkswagen Polo",
    km: 52000,
    year: 2017,
    segment: "Hatchback",
    price: 380000,
  },
  {
    id: 10,
    name: "Toyota Fortuner",
    km: 90000,
    year: 2015,
    segment: "SUV",
    price: 900000,
  },
];

let getCars = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(usedCars);
    }, 200);
  });
};

export default getCars;
