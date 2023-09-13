import {StyleSheet} from 'react-native';
import {colors, dimensions} from '../../styles';

const styles = StyleSheet.create({
  welcomeText: {
    color: colors.darkText,
    fontWeight: '700',
    fontSize: 24,
    paddingVertical: 4,
  },
  loginText: {
    fontSize: 16,
    color: colors.lightText,
    paddingVertical: 4,
  },
  viewContainer: {
    marginHorizontal: 20,
    flex: 0.5,
    justifyContent: 'space-between',
  },
  emailInput: {
    marginBottom: 9,
  },
  passwordInput: {
    marginTop: 9,
  },
  safeView: {
    flex: 1,
  },
  forgotPasswordButton: {
    alignSelf: 'center',
  },
  forgotPasswordText: {
    color: colors.lightText,
    textAlign: 'center',
  },
  safeViewHeader: {
    height: 80,
    backgroundColor: colors.lightBackground,
  },
  headerView: {
    flex: 1,
    marginHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  createAccountText: {
    color: colors.green.headerText,
    fontSize: 14,
    fontWeight: '400',
    textAlign: 'right',
    lineHeight: 24,
  },
  container: {
    flexDirection: 'column',
    flex: 1,
  },
  buttonsContainer: {
    flex: 0.18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    flex: 0.82,
    width: dimensions.fullWidth,
    resizeMode: 'cover',
  },
  buttonsView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 10,
  },
  LoginButton: {
    flex: 0.5,
    marginLeft: 20,
    marginRight: 7.5,
  },
  SignupButton: {
    flex: 0.5,
    marginLeft: 7.5,
    marginRight: 20,
  },
});

export default styles;
