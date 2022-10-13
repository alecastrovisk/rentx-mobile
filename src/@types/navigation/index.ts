import { CarDTO, UserDTO } from "../../dtos/CarDTO";

export type RootStackParamList = {
  Home: undefined;
  CarDetails: {car: CarDTO};
  Scheduling: {car: CarDTO};
  SchedulingDetails: {car: CarDTO, dates: string[]};
  SchedulingComplete: undefined;
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
