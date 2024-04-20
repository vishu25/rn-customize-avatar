import * as React from 'react';
import { StyleSheet, FlatList, Pressable } from 'react-native';

const ColorList = (props) => {
  const { colorList, flatListProps, onPressItem } = props;

  const renderItem = ({ item }) => {
    return (
      <Pressable
        onPress={() => onPressItem(item)}
        style={{ ...styles.item, backgroundColor: `#${item}` }}
      />
    );
  };

  return (
    <FlatList
      initialNumToRender={5}
      extraData={colorList}
      maxToRenderPerBatch={5}
      numColumns={2}
      data={colorList}
      renderItem={renderItem}
      keyExtractor={(_, index) => index.toString()}
      {...flatListProps}
    />
  );
};

export default ColorList;

const styles = StyleSheet.create({
  item: {
    padding: 10,
    backgroundColor: 'white',
    margin: 10,
    alignItems: 'center',
    borderRadius: 10,
    height: 130,
    flex: 1,
  },

  box: {
    width: 120,
    height: 130,
  },
  listContainer: { flex: 1, backgroundColor: 'grey' },
  canvasContainer: { width: 140, height: 100, flex: 1, resizeMode: 'contain' },
});
