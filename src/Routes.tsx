import React from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { LoginScreen, RegisterScreen } from '@Screens/AuthScreens';
import { AuthPropsList } from '@Screens/AuthScreens/AuthPropsList';

interface RoutesProps {}

const Stack = createStackNavigator<AuthPropsList>();

const Routes: React.FC<RoutesProps> = ({}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerTitle: 'Sign In' }}
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen
          options={{ headerTitle: 'Sign Up' }}
          name="Register"
          component={RegisterScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
