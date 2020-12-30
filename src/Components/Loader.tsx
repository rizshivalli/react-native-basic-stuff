import React from 'react';
import { ActivityIndicator } from 'react-native-paper';
import Center from './Center';

const Loader = () => {
  return (
    <Center>
      <ActivityIndicator size="large" />
    </Center>
  );
};

export default Loader;
