import data from './carData';

localStorage.setItem('cars', JSON.stringify(data));

const readCars = () => JSON.parse(localStorage.getItem('cars'));

const saveCars = (cars) => localStorage.setItem('cars', JSON.stringify(cars));

function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export async function getCars() {
  await timeout(1000);  
  return readCars()  
}


export async function getCar(carId) {
  await timeout(1000);
  return readCars().find((mov) => mov.id === parseInt(carId, 10)); 
};

export function updateCar(updatedCar){
  readCars().map((car) => {
    if (car.id === parseInt(updatedCar.id, 10)) {
      return { ...car, ...updatedCar };
    }
    return car;
  }); 
};

export const createCar = (carData) => {
  let cars = readCars();
  const nextId = cars[cars.length - 1].id + 1;
  const newCar = { ...carData, id: nextId };
  cars = [...cars, newCar];
  saveCars(cars);  
};

export const deleteCar = (carId) => {
  let cars = readCars();
  cars = cars.filter((car) => car.id !== parseInt(carId, 10));
  saveCars(cars);  
};
