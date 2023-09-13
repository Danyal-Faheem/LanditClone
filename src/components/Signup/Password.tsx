import React, {useState} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {colors} from '../../styles';
import Button from '../Button';
import {
  validateEmail,
  validatePassword,
  validatePasswordLength,
  validatePasswordSpecialCharacter,
  validatePasswordUppercase,
} from '../../utils';
import styles from './styles';
import {useValidator} from '../../hooks';
import AppText from '../AppText';
import {TextField} from '../TextInput';
import Checkmark from './Checkmark';
import {useDispatch} from 'react-redux';
import {addUser} from '../../actions';
import {user} from '../../interfaces';

const Password = ({navigation, route}: any) => {
  const email = route.params.email;
  const dispatch = useDispatch();
  const [password, setPassword] = useState<string>('');
  const {isValid} = useValidator({
    data: password,
    validator: validatePassword,
  });
  const {isValid: isValidLength} = useValidator({
    data: password,
    validator: validatePasswordLength,
  });
  const {isValid: isValidSpecialCharacter} = useValidator({
    data: password,
    validator: validatePasswordSpecialCharacter,
  });
  const {isValid: isValidUppercase} = useValidator({
    data: password,
    validator: validatePasswordUppercase,
  });

  const validChecks = [
    {title: 'Minimum of 8 characters', flag: isValidLength},
    {title: '1 uppercase letter', flag: isValidUppercase},
    {title: '1 symbol', flag: isValidSpecialCharacter},
  ];
  const handlePress = () => {
    dispatch(addUser({email, password} as user));
    navigation.navigate('Welcome');
  };
  return (
    <SafeAreaView style={styles.safeView}>
      <View style={styles.viewContainer}>
        <AppText style={styles.headerText}>
          Secure your account with a secure password
        </AppText>
        <TextField
          label="Password"
          secureTextEntry
          value={password}
          onChangeText={(text: string) => setPassword(text)}
        />
        {validChecks.map(check => {
          return (
            <View
              key={check.title}
              style={styles.checkView}>
              <Checkmark
                valid={check.flag}
                size={16}
              />
              <Text style={styles.checkTitle}>{check.title}</Text>
            </View>
          );
        })}
        <Button
          text="Create Account"
          disabled={!isValid}
          color={colors.green.darkGreen}
          onPress={handlePress}
        />
      </View>
    </SafeAreaView>
  );
};

export default Password;
