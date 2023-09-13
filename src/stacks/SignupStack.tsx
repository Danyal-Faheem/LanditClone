import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Email from '../components/Signup/Email';

const SignupStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Email"
        component={Email}
      />
    </Stack.Navigator>
  );
};

export default SignupStack;
