import React, {useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import {colors} from '../../styles';
import Button from '../Button';
import {validateEmail} from '../../utils';
import styles from './styles';
import {useValidator} from '../../hooks';
import AppText from '../AppText';
import {TextField} from '../TextInput';

const Email = ({navigation}: any) => {
  const [email, setEmail] = useState<string>('');
  const {isValid} = useValidator({
    data: email,
    validator: validateEmail,
  });

  return (
    <SafeAreaView style={styles.safeView}>
      <View style={styles.viewContainer}>
        <AppText style={styles.headerText}>
          Welcome to Landit, let's create your account
        </AppText>
        <TextField
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          label="Email Address"
          value={email}
          onChangeText={(text: string) => setEmail(text)}
        />
        <Button
          text="Continue"
          disabled={!isValid}
          color={colors.green.darkGreen}
          onPress={() => navigation.navigate('Password', {email})}
        />
      </View>
    </SafeAreaView>
  );
};

export default Email;
