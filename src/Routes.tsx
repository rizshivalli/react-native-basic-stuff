import React from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from '@Screens/Login';

interface RoutesProps {}

const Stack = createStackNavigator();

const Routes: React.FC<RoutesProps> = ({}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Stack" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
