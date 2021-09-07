import React from 'react';
import { FlatList, Pressable, StyleSheet, View } from 'react-native';
import { Appbar, Avatar, Button, IconButton, List, Text, Subheading, Title } from 'react-native-paper';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

import { useAppSelector } from '../../core/hooks/storeApi';
import { ScreenParamList } from '../../core/configs/routes';
import Product from '../../core/interfaces/Product';

import { selectAppTheme } from '../../store/slices/themeSlice';

interface CheckoutProps {
  route: RouteProp<ScreenParamList, 'Checkout'>;
  navigation: StackNavigationProp<ScreenParamList, 'Checkout'>;
}

// TODO: for testing purposes
export const checkout: Product[] = [
  {
    id: 1,
    title: 'Product A',
    priceBeforeDiscount: 2.99,
    price: 1.99,
    image: 'https://picsum.photos/400',
  },
  {
    id: 3,
    title: 'Product C',
    priceBeforeDiscount: 1.5,
    price: 1.25,
    image: 'https://picsum.photos/600',
  },
  {
    id: 4,
    title: 'Product D',
    priceBeforeDiscount: 1.25,
    price: 1.0,
    image: 'https://picsum.photos/700',
  },
];

const CheckoutScreen: React.FC<CheckoutProps> = ({ route, navigation }) => {
  const appTheme = useAppSelector(state => selectAppTheme(state));

  const getTotalPrice = (): number => {
    return checkout.reduce((acc, curr) => acc + curr.price, 0);
  };

  return (
    <View style={[styles.screen, { backgroundColor: appTheme.colors.background }]}>
      <Appbar.Header style={styles.appbarHeader}>
        <Pressable
          onPress={() => navigation.pop()}
          style={({ pressed }) => [
            {
              backgroundColor: pressed
                ? appTheme.colors.primary
                : appTheme.colors.background,
              borderColor: pressed ? appTheme.colors.background : 'transparent',
            },
            styles.goBack,
          ]}
        >
          {({ pressed }) => (
            <>
              <MaterialIcons name="arrow-back-ios" size={24} />
              <Text>Go back</Text>
            </>
          )}
        </Pressable>

        <Appbar.Content titleStyle={styles.titleStyle} title="My Basket" />
      </Appbar.Header>

      <View style={{ paddingHorizontal: 20, marginVertical: 20 }}>
        <FlatList
          data={checkout}
          keyExtractor={item => item.id.toString()}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <List.Item
              onPress={() => {}}
              title={item.title}
              description={`$${item.price}`}
              left={props => (
                <Avatar.Image {...props} source={{ uri: item.image }} />
              )}
              right={props => (
                <IconButton
                  {...props}
                  icon="minus"
                  style={{
                    backgroundColor: appTheme.colors.primary,
                    borderRadius: 90,
                  }}
                  onPress={() => {}}
                />
              )}
            />
          )}
        />
      </View>

      <View
        style={[styles.footer, { backgroundColor: appTheme.colors.background }]}
      >
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <Subheading>Total</Subheading>
          <Title>${getTotalPrice()}</Title>
        </View>

        <Button
          mode="contained"
          style={{
            borderRadius: 20,
            flex: 1,
            marginHorizontal: 20,
          }}
          contentStyle={{
            paddingVertical: 10,
            paddingHorizontal: 15,
          }}
          onPress={() => {}}
        >
          Checkout
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  appbarHeader: {
    paddingVertical: 50,
  },
  goBack: {
    alignItems: 'center',
    borderRadius: 20,
    borderWidth: 2,
    elevation: 2,
    flexDirection: 'row',
    marginLeft: 10,
    padding: 8,
    width: 100,
  },
  titleStyle: {
    textAlign: 'center',
  },
  screen: {
    flex: 1,
    paddingBottom: 100,
  },
  footer: {
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 100,
    left: 0,
    position: 'absolute',
    right: 0,

  },
});

export default CheckoutScreen;
