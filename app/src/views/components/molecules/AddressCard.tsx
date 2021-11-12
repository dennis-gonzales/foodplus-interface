import React from 'react';
import { StyleSheet, View } from 'react-native';
import {
  IconButton,
  Surface,
  Subheading,
  Paragraph,
  Title,
} from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';

interface AddressCardProps {}

const AddressCard: React.FC<AddressCardProps> = ({}) => {
  return (
    <Surface style={styles.surface}>
      <View style={styles.content}>
        <MaterialIcons style={styles.leftIcon} size={24} name="location-pin" />
        <View style={styles.contentCol}>
          <Title>Shipping Address</Title>
          <Subheading numberOfLines={1}>John Doe | +63 9204137550</Subheading>
          <Paragraph numberOfLines={3}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          </Paragraph>
        </View>
        <IconButton
          onPress={() => {}}
          icon={() => <MaterialIcons size={24} name="more-vert" />}
          size={24}
          style={styles.iconButton}
        />
      </View>
    </Surface>
  );
};

const styles = StyleSheet.create({
  content: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  contentCol: {
    marginLeft: 10,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 1,
    alignItems: 'flex-start',
  },
  iconButton: {
    alignSelf: 'center',
  },
  leftIcon: {
    marginTop: 10,
  },
  surface: {
    alignItems: 'center',
    borderRadius: 10,
    elevation: 4,
    justifyContent: 'center',
    padding: 8,
  },
});

export default AddressCard;
