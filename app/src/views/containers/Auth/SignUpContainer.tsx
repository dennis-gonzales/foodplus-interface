import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';
import {
  Avatar,
  Button,
  IconButton,
  Paragraph,
  Text,
  Title,
  TouchableRipple,
} from 'react-native-paper';


import { ScreenParamList } from '../../../core/configs/routes';
import { useAppDispatch, useAppSelector } from '../../../core/hooks/storeApi';
import SafeView from '../../common/SafeView';


type SignUpContainerProps = NavigationProp<ScreenParamList, any>;

const SignUpContainer: React.FC = () => {
  const navigation = useNavigation<SignUpContainerProps>();
  const dispatch = useAppDispatch();

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
        <View>
          <Text style={styles.contentText}>Email:</Text>
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            style={styles.input}
            textContentType="emailAddress"
          />
        </View>

        <View>
          <Text style={styles.contentText}>Password:</Text>
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.input}
            secureTextEntry
            textContentType="password"
          />
        </View>

        <View>
          <Text style={styles.contentText}>Confirm Password:</Text>
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.input}
            secureTextEntry
            textContentType="password"
          />
        </View>
      </View>
      <Button
        onPress={() => {}}
        contentStyle={styles.buttonContent}
        style={styles.button}
        mode="contained"
      >
        Login
      </Button>
    </SafeView>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 15,
  },
  buttonContent: {
    paddingVertical: 10,
  },
  centered: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    height: 350,
    justifyContent: 'center',
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
    padding: 20,
    margin: 16,
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
  screen: {
    padding: 16,
  },
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
