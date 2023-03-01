import {FlatListProps} from 'react-native';

interface ColorListProps {
  colorList: string[];
  flatListProps?: FlatListProps<string>;
  onPressItem: (selectedStyle: string) => void;
}

declare const ColorList: (props: ColorListProps) => JSX.Element;

export default ColorList;
