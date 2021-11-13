import React from 'react';
import { StyleSheet, View } from 'react-native';
import {
  IconButton,
  Surface,
  Subheading,
  Paragraph,
  Title,
  Menu,
} from 'react-native-paper';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

interface AddressCardProps {}

const AddressCard: React.FC<AddressCardProps> = ({}) => {
  const [showFilterMenu, setShowFilterMenu] = React.useState<boolean>(false);

  return (
    <Surface style={styles.surface}>
      <View style={styles.content}>
        <MaterialIcons style={styles.leftIcon} size={24} name="location-pin" />
        <View style={styles.contentCol}>
          <Title>Shipping Address (Home)</Title>
          <Subheading numberOfLines={1}>John Doe | +63 9204137550</Subheading>
          <Paragraph numberOfLines={3}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          </Paragraph>
        </View>

        <Menu
          visible={showFilterMenu}
          onDismiss={() => setShowFilterMenu(false)}
          anchor={
            <View style={styles.iconButton}>
              <IconButton
                onPress={() => setShowFilterMenu(true)}
                icon={() => <MaterialIcons size={24} name="more-vert" />}
              />
            </View>
          }
        >
          <Menu.Item
            icon={() => (
              <MaterialCommunityIcons name="home" size={24} color="black" />
            )}
            onPress={() => {}}
            title="Home Address"
          />
          <Menu.Item
            icon={() => (
              <MaterialCommunityIcons
                name="office-building"
                size={24}
                color="black"
              />
            )}
            onPress={() => {}}
            title="Work Address"
          />
        </Menu>
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
  leftIcon: {
    marginTop: 10,
  },
  iconButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
