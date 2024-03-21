import * as React from 'react';
import {CommonProps} from '../../common/types';
import {NotionistsTypes} from '../utils/types';

interface NotionistsProps {
  defaultAvatar?: NotionistsTypes;
  backgroundColorList?: Array<string>;
}

declare const Notionists: React.FunctionComponent<NotionistsProps & CommonProps>;
export default Notionists;
