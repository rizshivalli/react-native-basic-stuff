import { AuthNavProps } from '@src/AuthStack/AuthParamList';
import React, { useState } from 'react';
import {
  View,
  Alert,
  Image,
  StyleSheet,
  KeyboardAvoidingView,
  Text,
} from 'react-native';
import { TextInput, Button } from 'react-native-paper';

const Register = ({ navigation }: AuthNavProps<'Register'>) => {
  const [email, setEmail] = useState(''),
    [password, setPassword] = useState(''),
    [confirmPassword, setConfirmPassword] = useState('');
  const createAlert = () =>
    Alert.alert(
      'All Fields Required',
      '',
      [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
      { cancelable: false }
    );

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.titleText}>Register</Text>
        <Image
          style={styles.tinyLogo}
          source={require('../../assets/images/rizwan.png')}
        />
      </View>

      <TextInput
        mode="outlined"
        label="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        mode="outlined"
        label="Password"
        value={password}
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
      />
      <TextInput
        mode="outlined"
        label="Confirm Password"
        value={confirmPassword}
        secureTextEntry={true}
        onChangeText={(text) => setConfirmPassword(text)}
      />
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
        <Button
          onPress={() => {
            if (email && password && confirmPassword) {
              navigation.navigate('Login');
            } else {
              createAlert();
            }
          }}
        >
          Register
        </Button>
        <Button
          onPress={() => {
            navigation.navigate('Login');
          }}
        >
          Back to Login
        </Button>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Register;

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
