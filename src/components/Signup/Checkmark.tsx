import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors} from '../../styles';
import Icon from 'react-native-vector-icons/Ionicons';

interface ICheckmarkProps {
  valid: boolean;
  size: number;
}

const Checkmark = ({valid, size}: ICheckmarkProps) => {
  return (
    <View
      style={{
        ...styles.viewContainer,
        height: size,
        width: size,
        borderColor: valid ? colors.lightBackground : colors.darkText + '33',
      }}>
      <View style={styles.valid}>
        {valid && (
          <Icon
            name="checkmark-outline"
            color={colors.darkText}
            size={size}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    borderRadius: 100,
    borderWidth: 1,
  },
  valid: {
    borderRadius: 100,
    backgroundColor: colors.green.darkGreen,
  },
});

export default Checkmark;
