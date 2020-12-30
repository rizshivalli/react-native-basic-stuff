import React, { FC } from 'react';
import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';

interface PaperTextInputProps {
  mode: 'flat' | 'outlined';
  label: string;
  value: string;
  onChangeText: (value: string) => void;
  [rest: string]: any;
}

const PaperTextInput: FC<PaperTextInputProps> = ({
  mode,
  label,
  value,
  onChangeText,
  ...rest
}) => {
  return (
    <TextInput
      style={styles.textInput}
      mode={mode}
      label={label}
      value={value}
      onChangeText={(value) => onChangeText(value)}
      {...rest}
    />
  );
};

export default PaperTextInput;

const styles = StyleSheet.create({
  textInput: {
    padding: 5,
  },
});
