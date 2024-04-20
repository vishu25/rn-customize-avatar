import { FlatListProps } from 'react-native';
import { SkSVG } from '@shopify/react-native-skia';

export interface Item {
  svg: SkSVG;
  value: string;
}

export interface ElementListProps {
  list: (Item | string)[];
  flatListProps?: FlatListProps<Item>;
  listBgColor?: string;
  onPressItem: (selectedStyle: Item | string) => void;
  bgColour?: string;
}

declare const ElementList: (props: ElementListProps) => JSX.Element;

export default ElementList;
