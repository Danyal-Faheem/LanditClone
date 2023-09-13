/* eslint-disable react/no-unstable-nested-components */
import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login, AuthButtons, LoginHeader} from '../components/Login';
import {Welcome} from '../components/Home';
import {asyncStorage} from '../utils';
import {useNavigation} from '@react-navigation/native';
import {
  ResetPassword,
  ResetPasswordReminder,
} from '../components/ResetPassword';
import Email from '../components/Signup/Email';
import Password from '../components/Signup/Password';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  const navigation = useNavigation();
  const [initialRoute, setInitialRoute] = useState<string>('Welcome');
  useEffect(() => {
    asyncStorage.get('user').then(val => {
      setInitialRoute(val === 'logged_out' ? 'AuthButtons' : 'Welcome');
      navigation.navigate(initialRoute as never);
    });
  }, [initialRoute]);
  return (
    <Stack.Navigator initialRouteName={initialRoute}>
      <Stack.Group screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="AuthButtons"
          component={AuthButtons}
        />
        <Stack.Screen
          name="ResetPasswordReminder"
          component={ResetPasswordReminder}
        />
        <Stack.Screen
          name="Welcome"
          component={Welcome}
        />
      </Stack.Group>

      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          header: props => {
            return (
              <LoginHeader
                leftIcon={'close-outline'}
                rightText={'Create an account'}
                rightTextLink={'Email'}
                {...props}
              />
            );
          },
        }}
      />
      <Stack.Screen
        options={{
          header: props => {
            return (
              <LoginHeader
                leftIcon={'chevron-back-outline'}
                {...props}
              />
            );
          },
        }}
        name="ResetPassword"
        component={ResetPassword}
      />
      <Stack.Screen
        name="Email"
        component={Email}
        options={{
          header: props => {
            return (
              <LoginHeader
                leftIcon={'close-outline'}
                rightText={'Log in'}
                rightTextLink={'Login'}
                {...props}
              />
            );
          },
        }}
      />
      <Stack.Screen
        name="Password"
        component={Password}
        options={{
          header: props => {
            return (
              <LoginHeader
                leftIcon={'chevron-back-outline'}
                rightText={'Log in'}
                rightTextLink={'Login'}
                {...props}
              />
            );
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
