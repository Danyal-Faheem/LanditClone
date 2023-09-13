import React from 'react';
import {SafeAreaView, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import AppText from '../AppText';
import {colors} from '../../styles';

interface ILoginHeaderProps {
  navigation: any;
  route?: any;
  options?: any;
  back?: any;
  leftIcon?: string;
  rightText?: string;
  rightTextLink?: string;
}

const LoginHeader = ({
  navigation,
  route,
  options,
  back,
  leftIcon,
  rightText,
  rightTextLink,
}: ILoginHeaderProps) => {
  return (
    <SafeAreaView style={styles.safeViewHeader}>
      <View style={styles.headerView}>
        <View>
          {leftIcon && (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Icon
                name={leftIcon}
                size={30}
                color={colors.darkText}
              />
            </TouchableOpacity>
          )}
        </View>
        <View>
          {rightText && (
            <TouchableOpacity
              onPress={() => navigation.navigate(rightTextLink)}>
              <AppText style={styles.createAccountText}>{rightText}</AppText>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginHeader;
