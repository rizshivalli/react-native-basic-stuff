import React, { FC, useContext, useState } from 'react';
import {
  View,
  Alert,
  Image,
  StyleSheet,
  KeyboardAvoidingView,
  Text,
} from 'react-native';
import { Button } from 'react-native-paper';
import { PaperTextInput } from '@src/Components';
import { AuthNavProps } from '@src/AuthStack/AuthParamList';
import { AuthContext } from '@src/AuthStack/AuthProvider';

const styles = StyleSheet.create({
  tinyLogo: {
    width: 250,
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: { flex: 1, paddingHorizontal: 10 },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

const Login = ({ navigation }: AuthNavProps<'Login'>) => {
  const [email, setEmail] = useState(''),
    [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);

  const createAlert = () =>
    Alert.alert(
      'Username and Password Required',
      'Please enter username and password',
      [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
      { cancelable: false }
    );

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.titleText}>Login</Text>
        <Image
          style={styles.tinyLogo}
          source={require('../../assets/images/rizwan.png')}
        />
      </View>

      <PaperTextInput
        mode="outlined"
        label="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <PaperTextInput
        mode="outlined"
        label="Password"
        value={password}
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
      />
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
        <Button
          onPress={() => {
            if (email && password) {
              login({ email: email, password: password });
            } else {
              createAlert();
            }
          }}
        >
          Login
        </Button>
        <Button
          onPress={() => {
            navigation.navigate('Register');
          }}
        >
          Register
        </Button>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Login;
