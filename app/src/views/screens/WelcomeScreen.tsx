import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Button, Caption, Headline, Subheading, Text } from 'react-native-paper';
import { NavigationProp, RouteProp } from '@react-navigation/native';

import { ScreenParamList } from '../../core/configs/routes';

interface WelcomeScreenProps {
  route: RouteProp<ScreenParamList, "WelcomeScreen">;
  navigation: NavigationProp<ScreenParamList, "WelcomeScreen">;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ route, navigation }) => {

  return (
    <View style={styles.container}>

      <Image
        style={styles.image}
        source={{ uri: 'https://picsum.photos/1000' }}
      />

      <View style={styles.description}>
        <Text>
          Some intuitive title that'll pique customers interest
        </Text>
        <Caption>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
          doloribus aliquid aliquam, necessitatibus minima ipsum mollitia fugit
          maxime porro ratione eius. Laboriosam, ex iusto corrupti dolorum
          tempore ut voluptates error?
        </Caption>

        <Button
          labelStyle={styles.button}
          mode="contained"
          onPress={() => {}}
        >
            Let's Continue
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    textTransform: 'none',
  },
  description: {
    flex: 1,
    margin: 10,
    justifyContent: "space-evenly",
  },
  image: {
    height: 350,
  },
});

export default WelcomeScreen;
