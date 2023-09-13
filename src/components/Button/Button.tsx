import React from 'react';
import {TouchableOpacity} from 'react-native';
import preDefinedStyles from './styles';
import {colors} from '../../styles';
import AppText from '../AppText';

interface IButtonProps {
  text: string;
  onPress?: any;
  color?: string;
  styles?: any;
  disabled?: boolean;
  textColor?: string;
}

const Button = ({
  text,
  onPress,
  color,
  styles,
  disabled,
  textColor = colors.whiteText,
}: IButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={{
        ...styles,
        ...preDefinedStyles.buttonContainer,
        backgroundColor: disabled
          ? preDefinedStyles.disabled.backgroundColor
          : color,
      }}>
      <AppText style={{...preDefinedStyles.text, color: textColor}}>
        {text}
      </AppText>
    </TouchableOpacity>
  );
};

export default Button;
