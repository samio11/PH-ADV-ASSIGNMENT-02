import { Request, Response } from 'express';
import carValidateData from './car.validation';
import { carServices } from './car.service';

const create_a_car = async (req: Request, res: Response) => {
  try {
    const car_data = req.body;
    //Validate
    const carValidateInfo = carValidateData.parse(car_data);
    // services => Db
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
export const carController = {
  create_a_car,
};
