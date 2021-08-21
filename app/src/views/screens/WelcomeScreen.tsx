import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Button, Caption, Text } from 'react-native-paper';
import { NavigationProp, RouteProp } from '@react-navigation/native';

import { ScreenParamList } from '../../core/configs/routes';
import { useAppSelector, useAppDispatch } from '../../core/hooks/storeApi';
import {
  decrement,
  increment,
  selectCount,
} from '../../store/features/counterSlice';
import { loadTodos, addTodo } from '../../store/features/todosSlice';

interface WelcomeScreenProps {
  route: RouteProp<ScreenParamList, 'WelcomeScreen'>;
  navigation: NavigationProp<ScreenParamList, 'WelcomeScreen'>;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ route, navigation }) => {
  const count = useAppSelector(state => selectCount(state.entities.counter));
  const dispatch = useAppDispatch();

  React.useEffect(() => {

    dispatch(loadTodos({ userId: 6 }));

    dispatch(
      addTodo({
        userId: 999,
        id: 123456,
        title: 'Watch anime',
        completed: false,
      })
    );

  }, []);

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: 'https://picsum.photos/1000' }}
      />

      <View style={styles.description}>
        <Text>Some intuitive title that'll pique customers interest</Text>
        <Caption>Counter: {count}</Caption>

        <View>
          <Button
            labelStyle={styles.button}
            mode="contained"
            onPress={() => dispatch(increment())}
          >
            Increment
          </Button>
          <Button
            labelStyle={styles.button}
            mode="text"
            onPress={() => dispatch(decrement())}
          >
            Decrement
          </Button>
        </View>
      </View>
    </View>
  );
};

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
    justifyContent: 'space-evenly',
  },
  image: {
    height: 350,
  },
});

export default WelcomeScreen;
