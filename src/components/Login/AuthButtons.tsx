import React from 'react';
import {Image, View} from 'react-native';
import {colors} from '../../styles';
import Button from '../Button';
import styles from './styles';

const AuthButtons = ({navigation}: any) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../assets/AuthButtonsScreen.png')}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonsView}>
          <Button
            styles={styles.LoginButton}
            text="Log in"
            color={colors.green.brightGreen}
            onPress={() => navigation.navigate('Login')}
          />
          <Button
            styles={styles.SignupButton}
            text="Sign up"
            color={colors.green.brightGreen}
            onPress={() => navigation.navigate('Email')}
          />
        </View>
      </View>
    </View>
  );
};

export default AuthButtons;
