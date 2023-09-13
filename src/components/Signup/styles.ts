import {StyleSheet} from 'react-native';
import {colors} from '../../styles';

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
  },
  viewContainer: {
    marginHorizontal: 20,
    flex: 0.3,
    justifyContent: 'space-between',
  },
  headerText: {
    color: colors.darkText,
    fontWeight: '700',
    fontSize: 24,
    paddingVertical: 4,
  },
  headerTextReminder: {
    color: colors.darkText,
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 32,
    textAlign: 'center',
  },
  checkView: {
    flexDirection: 'row',
    marginVertical: 10,
    alignItems: 'center',
  },
  checkTitle: {
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 20,
    color: colors.lightText,
    marginHorizontal: 8,
  },
});

export default styles;
