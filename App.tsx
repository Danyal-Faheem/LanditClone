/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import AuthStack from './src/stacks/AuthStack';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {colors} from './src/styles';
import {Provider} from 'react-redux';
import store from './src/store/store';
// import { SafeAreaView } from 'react-native';

function App(): JSX.Element {
  useEffect(() => {
    setTimeout(() => SplashScreen.hide(), 1000);
  }, []);

  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: colors.lightBackground,
    },
  };

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Provider store={store}>
        <NavigationContainer theme={MyTheme}>
          <AuthStack />
        </NavigationContainer>
      </Provider>
    </GestureHandlerRootView>
  );
}

export default App;
