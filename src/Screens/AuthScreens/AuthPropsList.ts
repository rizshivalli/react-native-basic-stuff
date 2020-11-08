import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type AuthPropsList = {
  Login: undefined;
  Register: undefined;
};

export type AuthNavProps<T extends keyof AuthPropsList> = {
  navigation: StackNavigationProp<AuthPropsList, T>;
  route: RouteProp<AuthPropsList, T>;
};
