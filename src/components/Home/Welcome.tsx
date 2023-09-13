import React from 'react';
import {View} from 'react-native';
import Button from '../Button';
import {colors} from '../../styles';
import styles from './styles';
import AppText from '../AppText';
import {useDispatch} from 'react-redux';
import {logout} from '../../actions';

const Welcome = ({navigation}: any) => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
    navigation.navigate('AuthButtons');
  };
  return (
    <View style={styles.viewContainer}>
      <AppText style={styles.headerText}>Welcome to Landit!</AppText>
      <Button
        text="Log out"
        color={colors.green.brightGreen}
        onPress={handleLogout}
      />
    </View>
  );
};

export default Welcome;
