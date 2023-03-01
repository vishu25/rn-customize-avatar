import * as React from 'react';
import {Text, View, StyleSheet, ScrollView, ViewStyle, StyleProp, TextStyle, Pressable} from 'react-native';

const OptionsList = props => {
  const {chipStyle, chipTextStyle, onPress, listOfElements} = props;
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        {listOfElements?.map((option, index) => {
          const isSelected = selectedIndex === index;
          return (
            <Pressable
              onPress={() => {
                onPress(option);
                setSelectedIndex(index);
              }}
              key={index}
              style={[styles.chip, chipStyle, isSelected ? {borderWidth: 2, borderColor: 'red'} : {}]}>
              <Text style={[styles.textStyle, chipTextStyle]}>{option}</Text>
            </Pressable>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default React.memo(OptionsList);

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    backgroundColor: 'grey',
  },
  chip: {
    backgroundColor: 'skyblue',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  textStyle: {color: 'black', fontWeight: '400', fontSize: 16},
});
