import React, { FC } from 'react';
import { AuthProvider } from './AuthStack/AuthProvider';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import Routes from './Routes';

interface ProvidersProps {}

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(8, 120, 160)',
    primaryX: 'rgb(8, 120, 160)',
    secondary: '#000000',
    secondaryX: 'rgb(2, 153, 178)',
    accent: 'yellow',
    error: 'rgb(242,0,0)',
    background: '#E6E6E6',
    white: '#FFFFFF',
    grey: '#DBDCDE',
    primaryXTransparent: 'rgba(8, 120, 160,0.5)',
  },
};

const Providers: FC<ProvidersProps> = () => {
  return (
    <AuthProvider>
      <PaperProvider theme={theme}>
        <Routes />
      </PaperProvider>
    </AuthProvider>
  );
};

export default Providers;
