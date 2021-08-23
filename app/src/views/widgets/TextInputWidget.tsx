import React from 'react';
import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';

type TextInputProps = React.ComponentProps<typeof TextInput>;

const TextInputWidget: React.FC<TextInputProps> = ({ ...otherProps }) => {

  return <TextInput {...otherProps} />;
}

const styles = StyleSheet.create({});

export default TextInputWidget;
