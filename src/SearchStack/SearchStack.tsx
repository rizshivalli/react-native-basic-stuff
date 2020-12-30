import React, { FC, useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Button } from 'react-native';
import { SearchParamsList } from './SearchParamsList';
import { Search } from './Screens';
import { AuthContext } from '@src/AuthStack/AuthProvider';
import { addProductRoutes } from '@src/Helpers/addProductRoutes';
interface SearchStackProps {}

const Stack = createStackNavigator<SearchParamsList>();
const SearchStack: FC<SearchStackProps> = () => {
  const { logout } = useContext(AuthContext);
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Search"
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
        component={Search}
      />
      {addProductRoutes(Stack)}
    </Stack.Navigator>
  );
};

export default SearchStack;
