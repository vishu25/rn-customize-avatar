import {SkSVG} from '@shopify/react-native-skia';
import {CommonProps} from './types';

export interface RenderAvatarProps {
  createdAvatar: SkSVG;
  selectedOption: any;
  getListOfOptions: Array<string>;
  setStyle: any;
  onPressOption: (optionSelect: string) => void;
}

declare const RenderAvatar: React.FC<RenderAvatarProps & CommonProps>;
export default RenderAvatar;
