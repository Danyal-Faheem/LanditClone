import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {colors} from '../../styles';
import Button from '../Button';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import BottomModal from '../BottomModal';
import AppText from '../AppText';

const ResetPasswordReminder = ({navigation}: any) => {
  return (
    <BottomModal>
      <View style={styles.modalContainer}>
        <View style={styles.closeButton}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon
              name="close-outline"
              size={25}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.contentContainer}>
          <AppText style={styles.headerTextReminder}>
            If an account exists for your email, we'll email you a link to reset
            your password
          </AppText>
          <Button
            text="Open mail app"
            color={colors.green.darkGreen}
            styles={styles.button}
          />
          <Button
            text="I haven't received an email"
            color={colors.whiteText}
            styles={styles.transparentButton}
            textColor={colors.darkText}
          />
        </View>
      </View>
    </BottomModal>
  );
};

export default ResetPasswordReminder;
