import React, { FC, createContext, useState, useCallback } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

type user = null | { username: string };
type loginValues = { email: string; password: string };

export const AuthContext = createContext<{
  user: user;
  login: ({ email, password }: loginValues) => void;
  logout: () => void;
  updateUserDetails: (values: any) => void;
}>({
  user: null,
  login: () => {},
  logout: () => {},
  updateUserDetails: async () => {},
});
interface AuthProviderProps {}
export const AuthProvider: FC = ({ children }) => {
  const [user, setUser] = useState<null | { username: string }>(null);

  const updateUserDetails = async (values: any) => {
    console.log(
      '🚀 ~ file: AuthProvider.tsx ~ line 21 ~ updateUserDetails ~ values',
      values
    );
    await AsyncStorage.setItem('user', JSON.stringify(values));
    setUser(values);
  };

  console.log('🚀 ~ file: AuthProvider.tsx ~ line 17 ~ user', user);
  return (
    <AuthContext.Provider
      value={{
        user,
        login: (values) => {
          console.log(
            '🚀 ~ file: AuthProvider.tsx ~ line 40 ~ login: ~ values',
            values
          );
          const fakeUser = { username: 'rizwan' };
          updateUserDetails(fakeUser);
        },

        logout: () => {
          setUser(null);
          AsyncStorage.removeItem('user');
        },
        updateUserDetails: useCallback(
          (values) => {
            console.log(
              '🚀 ~ file: AuthProvider.tsx ~ line 46 ~ values',
              values
            );
            if (values) {
              updateUserDetails(values);
            }
          },
          [user]
        ),
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
