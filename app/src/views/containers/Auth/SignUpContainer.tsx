import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';
import {
  Avatar,
  Button,
  IconButton,
  Paragraph,
  Text,
  TextInput,
  Title,
  TouchableRipple,
} from 'react-native-paper';
import validator from 'validator';


import { ScreenParamList } from '../../../core/configs/routes';
import { useAppDispatch, useAppSelector } from '../../../core/hooks/storeApi';
import SafeView from '../../common/SafeView';
import colors from '../../../core/constants/colors';

const minPasswordLength = 6;

type SignUpContainerProps = NavigationProp<ScreenParamList, any>;

const SignUpContainer: React.FC = () => {
  const navigation = useNavigation<SignUpContainerProps>();
  const dispatch = useAppDispatch();

  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const [secureTextEntry, setSecureTextEntry] = React.useState<boolean>(true);

  return (
    <SafeView style={styles.screen}>
      <View style={styles.headerContainer}>
        <Avatar.Text label="FP" size={96} />
        <View style={styles.centered}>
          <Title style={styles.title}>Register to Foodplus</Title>
          <View style={styles.dontHaveAnAccount}>
            <Paragraph>Already have an account? </Paragraph>
            <TouchableRipple onPress={() => navigation.goBack()}>
              <Text style={styles.signUp}>Log Up</Text>
            </TouchableRipple>
          </View>
        </View>

        <View style={styles.socialMediaContainer}>
          <IconButton
            disabled={true}
            size={32}
            icon={() => (
              <Entypo name="facebook-with-circle" size={42} color="#4267B2" />
            )}
          />
          <IconButton
            disabled={true}
            size={32}
            icon={() => (
              <Entypo name="twitter-with-circle" size={42} color="#1DA1F2" />
            )}
          />
          <IconButton
            disabled={true}
            size={32}
            icon={() => (
              <Entypo name="google--with-circle" size={42} color="#db4a39" />
            )}
          />
        </View>
      </View>

      <View style={styles.orContainer}>
        <View style={styles.orLine} />
        <View>
          <Text style={styles.orText}>OR</Text>
        </View>
        <View style={styles.orLine} />
      </View>

      <View style={styles.contentContainer}>
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          error={email.length > 0 && !validator.isEmail(email)}
          label={
            email.length > 0 && !validator.isEmail(email)
              ? 'Invalid Email'
              : 'Email Address'
          }
          left={
            <TextInput.Icon
              name="email"
              color={colors.colorPrimaryYellowDark}
            />
          }
          mode="outlined"
          outlineColor="lightgray"
          theme={{ roundness: 20 }}
          keyboardType="email-address"
          style={styles.input}
          textContentType="emailAddress"
          onChangeText={text => setEmail(text)}
          value={email}
        />

        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          error={password.length > 0 && password.length < minPasswordLength}
          label={
            password.length > 0 && password.length < minPasswordLength
              ? `Password must be at least ${minPasswordLength} characters`
              : 'New Password'
          }
          left={
            <TextInput.Icon name="lock" color={colors.colorPrimaryYellowDark} />
          }
          right={
            <TextInput.Icon
              name={secureTextEntry ? 'eye-off' : 'eye'}
              onPress={() => setSecureTextEntry(!secureTextEntry)}
            />
          }
          mode="outlined"
          outlineColor="lightgray"
          theme={{ roundness: 20 }}
          style={styles.input}
          secureTextEntry={secureTextEntry}
          textContentType="password"
          onChangeText={text => setPassword(text)}
          value={password}
        />
      </View>
      <Button
        onPress={() => {}}
        contentStyle={styles.buttonContent}
        disabled={
          !validator.isEmail(email) || password.length < minPasswordLength
        }
        style={styles.button}
        mode="contained"
      >
        Register
      </Button>
    </SafeView>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 15,
    marginHorizontal: 20,
  },
  buttonContent: {
    paddingVertical: 10,
  },
  centered: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    justifyContent: 'center',
    margin: 10,
  },
  contentText: {
    fontWeight: 'bold',
    marginLeft: 20,
  },
  dontHaveAnAccount: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerContainer: {
    height: 300,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  input: {
    backgroundColor: 'whitesmoke',
    margin: 10,
    alignSelf: 'stretch',
    fontSize: 16,
  },
  orContainer: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  orLine: {
    flex: 1,
    height: 1,
    backgroundColor: 'gray',
    marginHorizontal: 16,
  },
  orText: {
    width: 40,
    textAlign: 'center',
  },
  screen: {},
  signUp: {
    color: 'tomato',
    fontWeight: 'bold',
  },
  socialMediaContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
  },
});

export default SignUpContainer;
