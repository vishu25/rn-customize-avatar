import {FlatListProps} from 'react-native';
import {SVG} from '@shopify/react-native-skia';

export interface Item {
  svg: SVG;
  value: string;
}

export interface ElementListProps {
  list: (Item | string)[];
  flatListProps?: FlatListProps<Item>;
  listBgColor?: string;
  onPressItem: (selectedStyle: Item | string) => void;
}

declare const ElementList: (props: ElementListProps) => JSX.Element;

export default ElementList;
