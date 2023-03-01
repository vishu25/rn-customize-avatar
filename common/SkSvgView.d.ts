import {SkSVG} from '@shopify/react-native-skia';

interface SkSvgViewProps {
  svg: SkSVG;
  width: number;
  height: number;
}

declare const SkSvgView: React.FC<SkSvgViewProps>;
export default SkSvgView;

