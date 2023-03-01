import * as React from 'react';
import {CommonProps} from '../../common/types';
import {MicahType} from '../utils/types';

interface MicahProps {
  defaultAvatar?: MicahType;
  skinTonColorList?: Array<string>;
  hairColorList?: Array<string>;
  backgroundColorList?: Array<string>;
  baseColorList?: Array<string>;
}

declare const Micah: React.FunctionComponent<MicahProps & CommonProps>;
export default Micah;
