import {ImageSVG} from '@shopify/react-native-skia';
import * as React from 'react';
import {Dimensions} from 'react-native';
const width = Dimensions.get('window').width;

const SkSvgView = props => {
  return <ImageSVG svg={props.svg} width={props?.width} height={props.height} x={(width - props.width) / 2} y={30} />;
};

export default SkSvgView;
