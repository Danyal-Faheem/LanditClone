import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../styles';

const styles = StyleSheet.create({
  input: {
    padding: 22,
    borderWidth: 2,
    borderRadius: 10,
    fontSize: 16,
    color: colors.inputText,
    fontWeight: '400',
    fontFamily: fonts.regular,
    maxHeight: 64,
  },
  labelContainer: {
    position: 'absolute',
    paddingHorizontal: 8,
    marginHorizontal: 8,
    backgroundColor: colors.lightBackground,
  },
  labelFocused: {
    fontSize: 10,
    fontWeight: '700',
    fontFamily: fonts.regular,
    lineHeight: 12,
    letterSpacing: 0.83,
  },
  label: {
    fontSize: 16,
    fontWeight: '400',
    fontFamily: fonts.regular,
    lineHeight: 24,
  },
});

export default styles;
