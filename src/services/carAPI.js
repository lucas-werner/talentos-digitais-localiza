import data from './carData';

localStorage.setItem('cars', JSON.stringify(data));

const readCars = () => JSON.parse(localStorage.getItem('cars'));

const saveCars = (cars) => localStorage.setItem('cars', JSON.stringify(cars));

export const getCars = () => (
  new Promise((resolve) => {
    setTimeout(() => {
      const cars = readCars();
      resolve(cars);
    }, 1000);
  })
);

export const getCar = (carId) => {
  const car = readCars().find((mov) => mov.id === parseInt(carId, 10));

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(car);
    }, 1000);
  });
};

export const updateCar = (updatedCar) => {
  const cars = readCars().map((car) => {
    if (car.id === parseInt(updatedCar.id, 10)) {
      return { ...car, ...updatedCar };
    }
    return car;
  });
  saveCars(cars);

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('OK');
    }, 2000);
  });
};

export const createCar = (carData) => {
  let cars = readCars();
  const nextId = cars[cars.length - 1].id + 1;
  const newCar = { ...carData, id: nextId };
  cars = [...cars, newCar];
  saveCars(cars);

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('OK');
    }, 3000);
  });
};

export const deleteCar = (carId) => {
  let cars = readCars();
  cars = cars.filter((car) => car.id !== parseInt(carId, 10));
  saveCars(cars);

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ status: 'OK' });
    }, 1000);
  });
};
