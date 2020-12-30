import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export type HomeParamsList = {
  Feed: undefined;
  Product: {
    name: string;
  };
};
export type HomeStackNavProps<T extends keyof HomeParamsList> = {
  navigation: StackNavigationProp<HomeParamsList, T>;
  route: RouteProp<HomeParamsList, T>;
};
