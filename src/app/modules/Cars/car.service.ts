import { TCarInfo } from './car.interface';
import { Cars } from './car.model';

const create_a_car_to_Db = async (carData: TCarInfo) => {
  const result = await Cars.create(carData);
  return result;
};

export const carServices = {
  create_a_car_to_Db,
};
