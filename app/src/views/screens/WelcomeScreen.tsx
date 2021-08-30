import React from 'react';
import { StyleSheet, View, Image, useWindowDimensions, ScrollView, KeyboardAvoidingView } from 'react-native';
import { Button, Caption, Subheading } from 'react-native-paper';
import { NavigationProp, RouteProp } from '@react-navigation/native';

import { ScreenParamList } from '../../core/configs/routes';
import { useAppDispatch } from '../../core/hooks/storeApi';

import { setFirstname } from '../../store/features/userSlice';

import TextInputWidget from '../widgets/TextInputWidget';

interface WelcomeProps {
  route: RouteProp<ScreenParamList, 'Welcome'>;
  navigation: NavigationProp<ScreenParamList, 'Welcome'>;
}

const WelcomeScreen: React.FC<WelcomeProps> = ({ route, navigation }) => {
  const { height } = useWindowDimensions();

  const dispatch = useAppDispatch();

  const [name, setName] = React.useState<string>('');
  const [nameError, setNameError] = React.useState<boolean>(false);
  const [step, setStep] = React.useState<number>(1);  

  const step_1 = (): JSX.Element => (
    <View style={styles.stepContainer}>
      <View>
        <Subheading style={styles.gutterBottom}>
          The only app where you can enjoy closing discounts and more!
        </Subheading>
        <Caption style={styles.gutterBottom}>
          Order with our curated list of restaurants and save money by ordering
          at certain period of time.
        </Caption>
      </View>

      <Button
        uppercase={false}
        mode="contained"
        onPress={() => setStep(2)}
      >
        Let's Continue
      </Button>
    </View>
  );

  const step_2 = (): JSX.Element => (
    <KeyboardAvoidingView style={styles.stepContainer}>
      <View>
        <Subheading style={styles.gutterBottom}>What is your first name?</Subheading>

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

      <View style={{ marginTop: 15, }}>
        <Button
          uppercase={false}
          mode="contained"
          onPress={onStartPressed}
        >
          Start Ordering
        </Button>
        <Button
          uppercase={false}
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
    </KeyboardAvoidingView>
  );

  const onStartPressed = () => {
    setNameError(name.length === 0);

    if (name.length > 0) {
      dispatch(setFirstname(name));
      navigation.reset({
        index: 0,
        routes: [{ name: 'Listings' }],
      });
    }
  };

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <Image
        style={{ height: height * 0.65 }}
        source={{ uri: 'https://picsum.photos/1000' }}
      />

      {step === 1 && step_1()}
      {step === 2 && step_2()}

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
