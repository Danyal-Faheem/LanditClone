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
  modalContainer: {
    flex: 1,
  },
  closeButton: {
    opacity: 0.5,
    marginLeft: 16,
  },
  contentContainer: {
    flex: 1,
    margin: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
    width: '100%',
  },
  transparentButton: {
    width: '100%',
    borderWidth: 1,
    borderColor: colors.transparentButtonBorder,
  },
});

export default styles;
