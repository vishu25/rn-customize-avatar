import {SkSVG} from '@shopify/react-native-skia';

interface SkSvgViewProps {
  svg: SkSVG;
  width: number;
  height: number;
  x: number;
}

declare const SkSvgView: (props: SkSvgViewProps) => JSX.Element;

export default SkSvgView;
