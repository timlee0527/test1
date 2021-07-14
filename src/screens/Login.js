import React, {useState, useRef, useEffect} from 'react';
import styled from 'styled-components/native';
import {Image, Input, Button} from '../components';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {validateEmail, removeWhitespace} from '../utils/common';
import {TouchableOpacity, Text} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {images} from '../utils/images';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({theme}) => theme.background};
  padding: 0 20px;
  padding-top: ${({insets: {top}}) => top}px;
  padding-bottom: ${({insets: {bottom}}) => bottom}px;
`;

const ErrorText = styled.Text`
  align-items: flex-start;
  width: 100%;
  height: 20px;
  margin-bottom: 10px;
  line-height: 20px;
  color: ${({theme}) => theme.errorText};
`;

// const Styles = StyleSheet.create({
//   container:{
//     flex: 1,
//     justifyContent: center,
//     alignItems: center,
//     backgroundColor: ${({theme})=> theme.background}
//   }
// })

const Login = ({navigation}) => {
  const insets = useSafeAreaInsets();
  const [disabled, setDisabled] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const passwordRef = useRef();
  useEffect(() => {
    setDisabled(!(email && password && !errorMessage));
  }, [email, password, errorMessage]);

  const [errorMessage, setErrorMessage] = useState('');
  const _handleLoginButtonPress = () => {};

  const _handleEmailChange = email => {
    const changedEmail = removeWhitespace(email);
    setEmail(changedEmail);
    setErrorMessage(
      validateEmail(changedEmail) ? '' : 'Please verify your email or password'
    );
  };
  const _handlePasswordChange = password => {
    const changedPassword = removeWhitespace(password);
    setPassword(changedPassword);
  };

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{flex: 1}}
      extraScrollheight={20}>
      <Container insets={insets}>
        <Image url={images.photo} />
        <Input
          label="Email"
          value={email}
          onChangeText={_handleEmailChange}
          onSubmitEditing={() => passwordRef.current.focus()}
          placeholder="Email"
          returnKeyType="next"
        />
        <Input
          ref={passwordRef}
          label="Password"
          value={password}
          onChangeText={_handlePasswordChange}
          onSubmitEditing={_handleLoginButtonPress}
          placeholder="Password"
          returnKeyType="done"
          isPassword
        />
        <ErrorText>{errorMessage}</ErrorText>
        <Button
          title="Login"
          onPress={_handleLoginButtonPress}
          disabled={disabled}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate('Signup')}
          style={{
            marginTop: 30,
          }}>
          <Text
            style={{
              fontSize: 18,
            }}>
            Sign up with email{' '}
          </Text>
        </TouchableOpacity>
      </Container>
    </KeyboardAwareScrollView>
  );
};

export default Login;
