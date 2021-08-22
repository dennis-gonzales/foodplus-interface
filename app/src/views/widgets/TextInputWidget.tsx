import React from 'react';
import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';

type TextInputProps = React.ComponentProps<typeof TextInput>;

const TextInputWidget: React.FC<TextInputProps> = ({ ...otherProps }) => {

  return (
    <TextInput
      style={styles.textInput}
      {...otherProps}
    />
  )
}

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: 'whitesmoke',
  },
});

export default TextInputWidget;
