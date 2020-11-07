import React from 'react';
import { View, StyleSheet } from 'react-native';

interface CenterProps {
  children: JSX.Element | JSX.Element[];
}

const Center: React.FC<CenterProps> = ({ children }) => {
  return <View style={styles.root}>{children}</View>;
};
export default Center;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
