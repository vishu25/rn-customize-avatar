import * as React from 'react';
import {Text, View, StyleSheet, Pressable} from 'react-native';

const PressableContainer = props => {
  const {onPressDone, onPressCancel, cancelBtnStyle, doneBtnStyle} = props;
  return (
    <View style={styles.mainContainer}>
      <View style={styles.mainInnerContainer}>
        <Pressable onPress={onPressCancel} style={[styles.pressableContainer, {marginStart: 20}, cancelBtnStyle]}>
          <Text style={styles.cancelBtn}>{'Cancel'}</Text>
        </Pressable>
        <Pressable onPress={onPressDone} style={[styles.pressableContainer, {marginEnd: 20}, doneBtnStyle]}>
          <Text style={styles.doneBtn}>{'Done'}</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default PressableContainer;

const styles = StyleSheet.create({
  mainInnerContainer: {flexDirection: 'row', justifyContent: 'space-between'},
  mainContainer: {position: 'absolute', width: '100%', height: 100},
  cancelBtn: {color: 'black', fontSize: 16, fontWeight: '600', alignSelf: 'center'},
  doneBtn: {color: 'black', fontSize: 16, fontWeight: '600', alignSelf: 'center'},
  pressableContainer: {marginTop: 50, backgroundColor: 'white', width: 80, padding: 10, alignSelf: 'flex-end', borderRadius: 10},
});
