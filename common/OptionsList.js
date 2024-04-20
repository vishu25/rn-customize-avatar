import * as React from 'react';
import { Text, View, StyleSheet, ScrollView, Pressable } from 'react-native';
import { isColorDark } from '../constants/helperfunctions';

const OptionsList = (props) => {
  const { chipStyle, chipTextStyle, onPress, listOfElements, bgColour } = props;
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const isDark = React.useMemo(() => isColorDark(bgColour), [bgColour]);

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
              style={[
                styles.chip,
                { backgroundColor: `#${bgColour}` },
                chipStyle,
                isSelected ? { borderWidth: 2, borderColor: 'red' } : {},
              ]}
            >
              <Text
                style={[
                  styles.textStyle,
                  { color: isDark ? 'white' : 'black' },
                  chipTextStyle,
                ]}
              >
                {option}
              </Text>
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
  textStyle: { color: 'black', fontWeight: '400', fontSize: 16 },
});
