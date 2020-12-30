import React, { FC, useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Button } from 'react-native';
import { HomeParamsList } from './HomeParamsList';
import { Feed } from './Screens';
import { addProductRoutes } from '@src/Helpers/addProductRoutes';
import { AuthContext } from '@src/AuthStack/AuthProvider';

interface HomeStackProps {}

const Stack = createStackNavigator<HomeParamsList>();
const HomeStack: FC<HomeStackProps> = () => {
  const { logout } = useContext(AuthContext);
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Feed"
        options={{
          headerRight: () => {
            return (
              <Button
                title="logout"
                onPress={() => {
                  logout();
                }}
              />
            );
          },
        }}
        component={Feed}
      />
      {addProductRoutes(Stack)}
    </Stack.Navigator>
  );
};

export default HomeStack;
