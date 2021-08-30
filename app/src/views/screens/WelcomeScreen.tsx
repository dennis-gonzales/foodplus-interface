import React from 'react';
import { StyleSheet, View, Image, useWindowDimensions, ScrollView } from 'react-native';
import { Button, Caption, Text } from 'react-native-paper';
import { NavigationProp, RouteProp } from '@react-navigation/native';

import { ScreenParamList } from '../../core/configs/routes';
import TextInputWidget from '../widgets/TextInputWidget';

interface WelcomeProps {
  route: RouteProp<ScreenParamList, 'Welcome'>;
  navigation: NavigationProp<ScreenParamList, 'Welcome'>;
}

const WelcomeScreen: React.FC<WelcomeProps> = ({ route, navigation }) => {
  const { height } = useWindowDimensions();

  const [name, setName] = React.useState<string>('');
  const [nameError, setNameError] = React.useState<boolean>(false);
  const [step, setStep] = React.useState<number>(1);  

  const step_1 = (): JSX.Element => (
    <View style={styles.stepContainer}>
      <View>
        <Text style={styles.gutterBottom}>
          The only app where you can enjoy closing discounts and more!
        </Text>
        <Caption style={styles.gutterBottom}>
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
    <View style={styles.stepContainer}>
      <View>
        <Text style={styles.gutterBottom}>What is your first name?</Text>

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
      navigation.reset({
        index: 0,
        routes: [{ name: 'Listings' }],
      });
    }
  };

  return (
    <View style={styles.container}>
      <Image
        style={{ height: height * 0.65 }}
        source={{ uri: 'https://picsum.photos/1000' }}
      />

      <ScrollView contentContainerStyle={{ flex: 1, }}>
        {step === 1 && step_1()}
        {step === 2 && step_2()}
      </ScrollView>
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
  gutterBottom: {
    marginBottom: 20,
  },
  stepContainer: {
    padding: 20,
    flex: 1,
    justifyContent: 'space-around',
  },
});

export default WelcomeScreen;
