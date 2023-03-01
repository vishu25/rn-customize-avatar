// import * as React from 'react';
import {CommonProps} from '../../common/types';
import {AvatarsTypes} from '../utils/types';

interface AvatarProps {
  defaultAvatar?: AvatarsTypes;
  skinTonColorList?: Array<string>;
  hairColorList?: Array<string>;
  backgroundColorList?: Array<string>;
  accessoriesColorList?: Array<string>;
  facialHairColorList?: Array<string>;
  hatColorList?: Array<string>;
  clothColorList?: Array<string>;
}

declare const Avataars: (props: AvatarProps & CommonProps) => JSX.Element;
export default Avataars;
