import React, {useState} from 'react';
import {SafeAreaView, TouchableOpacity, View} from 'react-native';
import {colors} from '../../styles';
import Button from '../Button';
import {validateEmail, validatePassword} from '../../utils';
import styles from './styles';
import {useValidator} from '../../hooks';
import AppText from '../AppText';
import {TextField} from '../TextInput';
import {useDispatch} from 'react-redux';
import {login} from '../../actions';

const Login = ({navigation}: any) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const {isValid: isValidEmail} = useValidator({
    data: email,
    validator: validateEmail,
  });
  const {isValid: isValidPassword} = useValidator({
    data: password,
    validator: validatePassword,
  });

  const handleLogin = () => {
    dispatch(login({email, password}));
    navigation.navigate('Welcome');
  };

  return (
    <SafeAreaView style={styles.safeView}>
      <View style={styles.viewContainer}>
        <View>
          <AppText style={styles.welcomeText}>Welcome Back!</AppText>
          <AppText style={styles.loginText}>
            Login to your Landit account
          </AppText>
        </View>
        <View>
          <TextField
            style={styles.emailInput}
            keyboardType="email-address"
            autoCapitalize="none"
            label="Email"
            value={email}
            onChangeText={(text: string) => setEmail(text)}
          />
          <TextField
            style={styles.passwordInput}
            label="Password"
            secureTextEntry
            value={password}
            onChangeText={(text: string) => setPassword(text)}
          />
        </View>
        <Button
          text="Log In"
          disabled={!(isValidEmail && isValidPassword)}
          color={colors.green.darkGreen}
          onPress={handleLogin}
        />
        <TouchableOpacity
          style={styles.forgotPasswordButton}
          onPress={() => navigation.navigate('ResetPassword')}>
          <AppText style={styles.forgotPasswordText}>
            Forgot your password?
          </AppText>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;
