import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import {AdventureNeutral} from '.';
interface DiceBearAvatarProps {}
const DiceBearAvatar = (_: DiceBearAvatarProps) => {
  return (
    <View style={styles.container}>
      <AdventureNeutral />
      {/* <AdventureNeutral backgroundColorList={['000000']} /> */}
      {/* <Lorelei /> */}
      {/* <Micah /> */}
    </View>
  );
};

export default DiceBearAvatar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  imageBackgroundContainer: {
    backgroundColor: 'white',
    alignItems: 'center',
    flex: 0.8,
  },
});
