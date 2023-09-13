import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../styles';

const preDefinedStyles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 10,
    height: 48,
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 16,
    fontFamily: fonts.bold,
  },
  disabled: {
    backgroundColor: colors.gray.defaultGray,
  },
});

export default preDefinedStyles;
