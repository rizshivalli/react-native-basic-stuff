import React, { FC, useState, useEffect, useContext, useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Loader } from './Components';
import { AuthContext } from './AuthStack/AuthProvider';
import AppTabs from './AppTabs';
import AuthStack from './AuthStack/AuthStack';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-community/async-storage';
import 'react-native-gesture-handler';

interface RoutesProps {}

const Routes: FC<RoutesProps> = ({}) => {
  const { user, login } = useContext(AuthContext);
  console.log('🚀 ~ file: Routes.tsx ~ line 16 ~ user', user);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    //Check if the user is logged in or not
    getUserDetails();
  }, []);

  const getUserDetails = useCallback(async () => {
    await AsyncStorage.getItem('user')
      .then((userString) => {
        if (userString) {
          // decode it

          login();
        }
        setLoading(false);
        console.log(userString);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user]);

  if (loading) {
    return <Loader />;
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        {user ? <AppTabs /> : <AuthStack />}
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default Routes;
