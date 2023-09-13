import React, {Children, useMemo, useRef} from 'react';
import BottomSheet from '@gorhom/bottom-sheet';
import {StyleSheet, View} from 'react-native';
import {colors} from '../styles';

const BottomModal = ({children}: any) => {
  const bottomSheetRef = useRef<BottomSheet>(null);

  const snapPoints = useMemo(() => ['35%'], []);

  return (
    <View style={styles.container}>
      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        bottomInset={46}
        detached={true}
        style={styles.sheetContainer}>
        {Children.map(children, child => child)}
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: colors.darkText,
  },
  sheetContainer: {
    marginHorizontal: 8,
  },
});

export default BottomModal;
