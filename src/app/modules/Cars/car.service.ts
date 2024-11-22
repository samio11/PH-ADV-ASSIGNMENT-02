import { TCarInfo } from './car.interface';
import { Cars } from './car.model';

const create_a_car_to_Db = async (carData: TCarInfo) => {
  const result = await Cars.create(carData);
  return result;
};

const get_all_car_info = async () => {
  const result = await Cars.find({});
  return result;
};
const get_a_car_info = async (id: string) => {
  const result = await Cars.findById(id);
  return result;
};
const update_a_car_info = async (id: string, carUpdatableData: TCarInfo) => {
  const result = await Cars.findByIdAndUpdate(id, carUpdatableData, {
    new: true,
  });
  return result;
};

const delete_a_car = async (id: string) => {
  const result = await Cars.findByIdAndDelete(id, { new: true });
  return result;
};

export const carServices = {
  create_a_car_to_Db,
  get_all_car_info,
  get_a_car_info,
  update_a_car_info,
  delete_a_car,
};
