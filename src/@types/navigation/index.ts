import { CarDTO, UserDTO } from "../../dtos/CarDTO";
import {Car as CarModel } from '../../database/model/Car';

export type RootStackParamList = {
  Home: undefined;
  CarDetails: {car: CarModel};
  Scheduling: {car: CarModel};
  SchedulingDetails: {car: CarDTO, dates: string[]};
  Confirmation: {title: string, message: string, nextScreenRoute: string};
  MyCars: undefined;
  SignUpFirstStep: undefined;
  SignUpSecondStep: {user: UserDTO };
}

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {
    }
  }
}
