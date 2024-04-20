import * as React from 'react';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';

export interface OptionsListProps {
  chipStyle?: StyleProp<ViewStyle>;
  chipTextStyle?: StyleProp<TextStyle>;
  onPress: (option: string) => void;
  listOfElements: Array<string>;
  bgColour?: string;
}

declare const OptionsList: React.MemoExoticComponent<
  React.FC<OptionsListProps>
>;

export default OptionsList;
