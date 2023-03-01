import {CommonProps} from '../../common/types';
import * as React from 'react';
import {AdventurerNeutralType} from '../utils/types';

interface AdventureNeutralProps {
  defaultAvatar?: AdventurerNeutralType;
  backgroundColorList?: Array<string>;
}

declare const AdventureNeutral: React.FunctionComponent<AdventureNeutralProps & CommonProps>;
export default AdventureNeutral;
