import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Avatar, Title, List } from 'react-native-paper';
import { NavigationProp, useNavigation } from '@react-navigation/core';

import { ScreenParamList } from '../../core/configs/routes';
import MenuItem from '../../core/interfaces/ui/MenuItem';
import menuItem from '../../core/configs/menu';

type AccountContainerProps = NavigationProp<ScreenParamList, any>;

const AccountContainer: React.FC = () => {
  const navigation = useNavigation<AccountContainerProps>();

  const renderItem = ({ item }: { item: MenuItem }): JSX.Element => (
    <View>
      {item.header && <List.Subheader>{item.header}</List.Subheader>}

      <List.Item
        onPress={() =>
          item.targetScreen && navigation.navigate(item.targetScreen)
        }
        disabled={item.disabled}
        title={item.name}
        description={item.description}
        left={() => (
          <List.Icon
            icon={() => (
              <Avatar.Icon
                style={{ backgroundColor: item.icon.backgroundColor }}
                size={item.icon.size}
                icon={item.icon.src}
              />
            )}
          />
        )}
      />
    </View>
  );

  return (
    <>
      <List.Section>
        <List.Item
          style={styles.profile}
          title={<Title>Dennis Gonzales</Title>}
          titleStyle={styles.profileData}
          descriptionStyle={styles.profileData}
          description="17 owned NFT(s)"
          onPress={() => {}}
          left={() => (
            <List.Icon icon={() => <Avatar.Text size={60} label="DG" />} />
          )}
        />
      </List.Section>

      <FlatList
        data={menuItem}
        keyExtractor={menu => menu.name}
        renderItem={renderItem}
      />
    </>
  );
};

const styles = StyleSheet.create({
  profile: {
    marginHorizontal: 10,
  },
  profileData: {
    marginHorizontal: 10,
  },
});

export default AccountContainer;
