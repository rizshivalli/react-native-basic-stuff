import React, { FC } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabsParamsList } from './TabsParamsList';
import HomeStack from './HomeStack/HomeStack';
import SearchStack from './SearchStack/SearchStack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useTheme } from 'react-native-paper';

interface AppTabsProps {}

const Tabs = createBottomTabNavigator<TabsParamsList>();

const AppTabs: FC<AppTabsProps> = () => {
  const { colors } = useTheme();
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            return (
              <MaterialCommunityIcons
                name="home-variant"
                size={size}
                // @ts-ignore
                color={focused ? colors.primary : colors.accent}
              />
            );
          } else if (route.name === 'Search') {
            return (
              <FontAwesome
                name="search"
                size={size}
                // @ts-ignore
                color={focused ? colors.primary : colors.accent}
              />
            );
          }
          // You can return any component that you like here!
          return (
            // @ts-ignore
            <Ionicons name={iconName} size={size} color={color} />
          );
        },
      })}
      tabBarOptions={{
        showLabel: false,
      }}
    >
      <Tabs.Screen name="Home" component={HomeStack} />
      <Tabs.Screen name="Search" component={SearchStack} />
    </Tabs.Navigator>
  );
};

export default AppTabs;
