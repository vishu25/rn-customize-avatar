import * as React from 'react';
import {CommonProps} from '../../common/types';
import {BigEarsType} from '../utils/types';

interface BigEarsProps {
  defaultAvatar?: BigEarsType;
  skinTonColorList?: Array<string>;
  hairColorList?: Array<string>;
  backgroundColorList?: Array<string>;
}

declare const BigEars: React.FunctionComponent<BigEarsProps & CommonProps>;
export default BigEars;
