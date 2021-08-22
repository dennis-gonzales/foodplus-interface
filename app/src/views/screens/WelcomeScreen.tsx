import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Button, Caption, Text } from 'react-native-paper';
import { NavigationProp, RouteProp } from '@react-navigation/native';

import { ScreenParamList } from '../../core/configs/routes';
import TextInputWidget from '../widgets/TextInputWidget';

interface WelcomeScreenProps {
  route: RouteProp<ScreenParamList, 'WelcomeScreen'>;
  navigation: NavigationProp<ScreenParamList, 'WelcomeScreen'>;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ route, navigation }) => {
  const [name, setName] = React.useState<string>('');
  const [nameError, setNameError] = React.useState<boolean>(false);
  const [step, setStep] = React.useState<number>(1);

  const step_1 = (): JSX.Element => (
    <View style={styles.description}>
      <View>
        <Text style={styles.gutterBottom}>
          The only app where you can enjoy closing discounts and more!
        </Text>
        <Caption>
          Order with our curated list of restaurants and save money by ordering
          at certain period of time.
        </Caption>
      </View>

      <Button
        labelStyle={styles.button}
        mode="contained"
        onPress={() => setStep(2)}
      >
        Let's Continue
      </Button>
    </View>
  );

  const step_2 = (): JSX.Element => (
    <View style={styles.description}>
      <View>
        <Text style={styles.description}>What is your first name?</Text>

        <TextInputWidget
          error={nameError}
          label={nameError ? 'Please enter your first name' : 'First name'}
          value={name}
          onChangeText={text => {
            setNameError(text.length === 0);
            setName(text);
          }}
        />
      </View>

      <View>
        <Button
          labelStyle={styles.button}
          mode="contained"
          onPress={onStartPressed}
        >
          Start Ordering
        </Button>
        <Button
          labelStyle={styles.button}
          mode="text"
          onPress={() => {
            setStep(1);
            setName('');
            setNameError(false);
          }}
        >
          Return
        </Button>
      </View>
    </View>
  );

  const onStartPressed = () => {
    setNameError(name.length === 0);

    if (name.length > 0) {
      console.log({ name });
    }
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: 'https://picsum.photos/1000' }}
      />

      {step === 1 && step_1()}
      {step === 2 && step_2()}
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
    justifyContent: 'space-around',
  },
  gutterBottom: {
    marginBottom: 10,
  },
  image: {
    height: 350,
  },
});

export default WelcomeScreen;
