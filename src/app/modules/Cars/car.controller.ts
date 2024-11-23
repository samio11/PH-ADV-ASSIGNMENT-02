import { Request, Response } from 'express';
import carValidateData from './car.validation';
import { carServices } from './car.service';

const create_a_car = async (req: Request, res: Response) => {
  try {
    const car_data = req.body;
    //Validate
    const carValidateInfo = carValidateData.parse(car_data);
    // services => DB
    const result = await carServices.create_a_car_to_Db(carValidateInfo);
    res.status(200).json({
      message: 'Car created successfully',
      success: true,
      data: result,
    });
  } catch (err) {
    res
      .status(500)
      .json({ message: 'Car created Failed', success: false, error: err });
  }
};

const get_all_car_info = async (req: Request, res: Response) => {
  try {
    // services => DB
    const result = await carServices.get_all_car_info();
    res.status(200).json({
      message: 'Car retrieved successfully',
      success: true,
      data: result,
    });
  } catch (err) {
    res
      .status(500)
      .json({ message: 'Car retrieved Failed', success: false, error: err });
  }
};
const get_a_car_info = async (req: Request, res: Response) => {
  try {
    const { carId } = req.params;
    // services => DB
    const result = await carServices.get_a_car_info(carId);
    res.status(200).json({
      message: 'Car retrieved successfully',
      success: true,
      data: result,
    });
  } catch (err) {
    res
      .status(500)
      .json({ message: 'Car retrieved Failed', success: false, error: err });
  }
};

const update_a_car_info = async (req: Request, res: Response) => {
  try {
    const { carId } = req.params;
    const car_data = req.body;
    // services => DB
    const result = await carServices.update_a_car_info(carId, car_data);
    res.status(200).json({
      message: 'Car updated successfully',
      success: true,
      data: result,
    });
  } catch (err) {
    res
      .status(500)
      .json({ message: 'Car updated Failed', success: false, error: err });
  }
};

const delete_a_car_info = async (req: Request, res: Response) => {
  try {
    const { carId } = req.params;
    // services => DB
    const result = await carServices.delete_a_car(carId);
    res.status(200).json({
      message: 'Car deleted successfully',
      success: true,
      data: {},
    });
  } catch (err) {
    res
      .status(500)
      .json({ message: 'Car deleted Failed', success: false, error: err });
  }
};
export const carController = {
  create_a_car,
  get_all_car_info,
  get_a_car_info,
  update_a_car_info,
  delete_a_car_info,
};
