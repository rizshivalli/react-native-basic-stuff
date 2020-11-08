import React from 'react';
import { View, Text } from 'react-native';
import { AuthNavProps } from '@Screens/AuthScreens/AuthPropsList';

const Register = ({ navigation, route }: AuthNavProps<'Register'>) => {
  return (
    <View>
      <Text>Route Name {route.name}</Text>
    </View>
  );
};
export default Register;
