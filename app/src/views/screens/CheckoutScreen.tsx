import React from 'react';
import { FlatList, Pressable, StyleSheet, View } from 'react-native';
import { Appbar, Avatar, Button, IconButton, List, Text, Subheading, Title } from 'react-native-paper';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

import { ScreenParamList } from '../../core/configs/routes';
import { appTheme } from '../../core/configs/theme';
import { useAppDispatch, useAppSelector } from '../../core/hooks/storeApi';
import { decreaseQuantity, selectProductsFromCart } from '../../store/slices/cartSlice';

interface CheckoutProps {
  route: RouteProp<ScreenParamList, 'Checkout'>;
  navigation: StackNavigationProp<ScreenParamList, 'Checkout'>;
}

const CheckoutScreen: React.FC<CheckoutProps> = ({ route, navigation }) => {

  const dispatch = useAppDispatch();
  const cart = useAppSelector(state => selectProductsFromCart(state));

  const getTotalPrice = (): string => {
    return cart.reduce((acc, curr) => acc + curr.price, 0).toFixed(2);
  };

  return (
    <View style={styles.screen}>
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
          data={cart}
          keyExtractor={item => item.product.id.toString()}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item: cart }) => (
            <List.Item
              onPress={() => {}}
              title={`${cart.quantity > 0 && `${cart.quantity}* `}${cart.product.title}`}
              description={`$${cart.price}`}
              left={props => (
                <Avatar.Image {...props} source={{ uri: cart.product.image }} />
              )}
              right={props => (
                <IconButton
                  {...props}
                  icon="minus"
                  style={{
                    backgroundColor: appTheme.colors.primary,
                    borderRadius: 90,
                  }}
                  onPress={() => dispatch(decreaseQuantity(cart))}
                />
              )}
            />
          )}
        />
      </View>

      <View style={styles.footer}>
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
    backgroundColor: appTheme.colors.background,
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
