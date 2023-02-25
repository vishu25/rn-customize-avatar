import * as React from 'react';
import {CommonProps} from '../../common/types';
import {LoreleiTypes} from '../utils/types';

interface LoreleiProps {
  defaultAvatar?: LoreleiTypes;
  skinTonColorList?: Array<string>;
  hairColorList?: Array<string>;
  backgroundColorList?: Array<string>;
}

declare const Lorelei: React.FunctionComponent<LoreleiProps & CommonProps>;
export default Lorelei;
