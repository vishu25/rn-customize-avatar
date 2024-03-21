import * as React from 'react';
import {CommonProps} from '../../common/types';
import {CroodlesTypes} from '../utils/types';

interface CroodlesProps {
  defaultAvatar?: CroodlesTypes;
  backgroundColorList?: Array<string>;
}

declare const Croodles: React.FunctionComponent<CroodlesProps & CommonProps>;
export default Croodles;
