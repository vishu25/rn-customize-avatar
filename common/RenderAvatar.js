import * as React from 'react';
import {View, StyleSheet, Dimensions, StatusBar} from 'react-native';
import {Canvas} from '@shopify/react-native-skia';
import {ElementsList, OptionsList, PressableContainer} from './index';
import SkSvgView from './SkSvgView';
const width = Dimensions.get('window').width;

const RenderAvatar = props => {
  const SVG_WIDTH = props?.svgWidth ? props?.svgWidth : 280;
  const SVG_HEIGHT = props?.svgHeight ? props?.svgHeight : 280;
  const canvasRef = React.useRef();

  const onPressPressableDone = () => {
    props?.onDone && props?.onDone(canvasRef.current?.makeImageSnapshot().encodeToBase64());
  };

  const onPressPressableCancel = () => {
    props?.onCancel && props?.onCancel();
  };

  return (
    <View style={[styles.container]}>
      <StatusBar translucent backgroundColor={props?.backgroundColor} />
      <Canvas ref={canvasRef} style={[styles.imageDefaultSize, {backgroundColor: props?.backgroundColor ?? 'red'}]}>
        {props?.createdAvatar && <SkSvgView svg={props?.createdAvatar} width={SVG_WIDTH} height={SVG_HEIGHT} x={(width - SVG_WIDTH) / 2} />}
      </Canvas>
      <OptionsList chipStyle={props?.chipStyle} chipTextStyle={props?.chipTextStyle} listOfElements={props?.getListOfOptions} onPress={props?.onPressOption} />
      {props?.selectedOption && <ElementsList listBgColor={props?.listBgColor} flatListProps={props?.flatListProps} onPressItem={props?.setStyle} list={props?.selectedOption} />}
      <PressableContainer cancelBtnStyle={props?.cancelBtnStyle} doneBtnStyle={props?.doneBtnStyle} onPressCancel={onPressPressableCancel} onPressDone={onPressPressableDone} />
    </View>
  );
};
export default RenderAvatar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  canvasDefaultContainer: {width: 100, height: 100},
  imageDefaultSize: {
    width: width,
    height: 300,
    alignItems: 'center',
    backgroundColor: 'red',
    justifyContent: 'center',
  },
});
