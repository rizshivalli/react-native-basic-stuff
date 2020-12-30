import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export type SearchParamsList = {
  Search: undefined;
  Product: {
    name: string;
  };
};
export type SearchStackNavProps<T extends keyof SearchParamsList> = {
  navigation: StackNavigationProp<SearchParamsList, T>;
  route: RouteProp<SearchParamsList, T>;
};
