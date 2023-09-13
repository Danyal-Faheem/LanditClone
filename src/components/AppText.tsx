import React from 'react';
import {Text} from 'react-native';
import {fonts} from '../styles';

const AppText = (props: any) => {
  return (
    <Text
      {...props}
      // eslint-disable-next-line react-native/no-inline-styles
      style={{fontFamily: fonts.regular, ...props.style}}>
      {props.children}
    </Text>
  );
};

export default AppText;
