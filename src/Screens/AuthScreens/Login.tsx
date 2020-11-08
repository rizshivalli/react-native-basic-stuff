import { Center } from '@src/Components';
import React from 'react';
import { Button, Text } from 'react-native';
import { AuthNavProps } from '@Screens/AuthScreens/AuthPropsList';

const Login = ({ navigation, route }: AuthNavProps<'Login'>) => {
  return (
    <Center>
      <Text>Login screen</Text>
      <Button
        onPress={() => {
          navigation.navigate('Register');
        }}
        title="Register"
      />
    </Center>
  );
};

export default Login;
