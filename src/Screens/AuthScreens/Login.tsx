import { Center } from '@src/Components';
import React from 'react';
import { Button, Text, View } from 'react-native';

interface LoginProps {
  navigation: any;
}

const Login: React.FC<LoginProps> = ({ navigation }) => {
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
