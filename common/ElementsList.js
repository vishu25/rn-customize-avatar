import * as React from 'react';
import {View, StyleSheet, FlatList, FlatListProps, Pressable} from 'react-native';
import {Canvas, ImageSVG, Skia} from '@shopify/react-native-skia';
import {ColorList} from './index';

const ElementList = props => {
  const {list, flatListProps, onPressItem, listBgColor} = props;

  const isArrayOfString = Array.isArray(list) && list.every(item => typeof item === 'string');

  const addEmptyItem = [...list];

  if (!isArrayOfString) {
    addEmptyItem.unshift({
      svg: Skia.SVG.MakeFromString(
        '<svg width="50px" height="50px" viewBox="-200 -200 320 1" y="200" xmlns="http://www.w3.org/2000/svg"><path d="M256 8C119.034 8 8 119.033 8 256s111.034 248 248 248 248-111.034 248-248S392.967 8 256 8zm130.108 117.892c65.448 65.448 70 165.481 20.677 235.637L150.47 105.216c70.204-49.356 170.226-44.735 235.638 20.676zM125.892 386.108c-65.448-65.448-70-165.481-20.677-235.637L361.53 406.784c-70.203 49.356-170.226 44.736-235.638-20.676z"/></svg>',
      ),
      value: '',
    });
  }

  const renderItem = ({item}) => {
    return (
      <Pressable onPress={() => onPressItem(item)} style={styles.item}>
        <Canvas style={styles.canvasContainer}>
          <ImageSVG strokeWidth={100} color={'red'} blendMode={'clear'} svg={item?.svg} y={-40} width={140} height={200} />
        </Canvas>
      </Pressable>
    );
  };

  if (isArrayOfString) {
    return (
      <View style={{...styles.listContainer, backgroundColor: listBgColor ?? 'grey'}}>
        <ColorList colorList={list} onPressItem={onPressItem} />
      </View>
    );
  }

  return (
    <View style={[styles.listContainer, {backgroundColor: listBgColor ?? 'grey'}]}>
      <FlatList
        initialNumToRender={5}
        maxToRenderPerBatch={5}
        {...flatListProps}
        extraData={addEmptyItem}
        data={addEmptyItem}
        numColumns={2}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
      />
    </View>
  );
};

export default ElementList;

const styles = StyleSheet.create({
  item: {
    padding: 10,
    backgroundColor: 'white',
    margin: 10,
    alignItems: 'center',
    borderRadius: 10,
    height: 130,
  },

  box: {
    width: 120,
    height: 130,
  },
  listContainer: {flex: 1, backgroundColor: 'grey'},
  canvasContainer: {width: 140, height: 100, flex: 1, resizeMode: 'contain'},
});
