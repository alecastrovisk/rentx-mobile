import { CarDTO } from "../../dtos/CarDTO";

export type RootStackParamList = {
  Home: undefined;
  CarDetails: {car: CarDTO};
  Scheduling: {car: CarDTO};
  SchedulingDetails: {car: CarDTO, dates: string[]};
  SchedulingComplete: undefined;
  MyCars: undefined;
}

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {
    }
  }
}
