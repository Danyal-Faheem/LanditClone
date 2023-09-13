import React, {useEffect, useRef, useState} from 'react';
import {
  Text,
  TextInput,
  View,
  Animated,
  TouchableWithoutFeedback,
} from 'react-native';
import {colors} from '../../styles';
import styles from './styles';

interface ITextFieldProps extends React.ComponentProps<typeof TextInput> {
  label: string;
}

const TextField: React.FC<ITextFieldProps> = ({
  label,
  value,
  style,
  onBlur,
  onFocus,
  ...restOfProps
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const inputRef = useRef<TextInput>(null);
  const focusAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(focusAnim, {
      toValue: isFocused || value ? 1 : 0,
      duration: 150,
      useNativeDriver: false,
    }).start();
  }, [focusAnim, isFocused, value]);

  return (
    <View style={style}>
      <TextInput
        style={[
          styles.input,
          {
            borderColor: isFocused
              ? colors.focusedInputBorder
              : colors.inputBorder,
          },
        ]}
        ref={inputRef}
        {...restOfProps}
        value={value}
        onBlur={event => {
          setIsFocused(false);
          onBlur?.(event);
        }}
        onFocus={event => {
          setIsFocused(true);
          onFocus?.(event);
        }}
      />
      <TouchableWithoutFeedback onPress={() => inputRef.current?.focus()}>
        <Animated.View
          style={[
            styles.labelContainer,
            {
              transform: [
                {
                  scale: focusAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [1, 1],
                  }),
                },
                {
                  translateY: focusAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [22, -4],
                  }),
                },
                {
                  translateX: focusAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [14, 8],
                  }),
                },
              ],
            },
          ]}>
          <Text
            style={[
              {
                color: isFocused ? colors.green.brightGreen : colors.inputText,
              },
              isFocused || value ? styles.labelFocused : styles.label,
            ]}>
            {isFocused || value ? label.toUpperCase() : label}
          </Text>
        </Animated.View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default TextField;
