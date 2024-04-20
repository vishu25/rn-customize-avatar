import * as React from 'react';
import { View, StyleSheet, Dimensions, StatusBar } from 'react-native';
import { Canvas } from '@shopify/react-native-skia';
import { ElementsList, OptionsList, PressableContainer } from './index';
import SkSvgView from './SkSvgView';
import { THEME_COLOUR } from '../constants/colors';
const width = Dimensions.get('window').width;

const RenderAvatar = (props) => {
  const SVG_WIDTH = props?.svgWidth ? props?.svgWidth : 280;
  const SVG_HEIGHT = props?.svgHeight ? props?.svgHeight : 280;
  const canvasRef = React.useRef();
  const themeColour = props?.backgroundColor ? props?.backgroundColor : THEME_COLOUR;
  const [onChangeBackgroundColor, setOnChangeBackgroundColor] = React.useState({
    isBackgroundSelect: false,
    setColour: themeColour,
  });

  const onPressPressableDone = () => {
    props?.onDone && props?.onDone(canvasRef.current?.makeImageSnapshot().encodeToBase64());
  };

  const onPressPressableCancel = () => {
    props?.onCancel && props?.onCancel();
  };

  const onPressOption = (option) => {
    props?.onPressOption(option);
    if (option === 'Background Color') {
      setOnChangeBackgroundColor({
        ...onChangeBackgroundColor,
        isBackgroundSelect: true,
      });
    } else if (onChangeBackgroundColor.isBackgroundSelect === true) {
      setOnChangeBackgroundColor({
        ...onChangeBackgroundColor,
        isBackgroundSelect: false,
      });
    }
  };
  const onChnageStyle = (style) => {
    props?.setStyle(style);

    if (onChangeBackgroundColor.isBackgroundSelect) {
      /**
       * wait for react to update the svg and we will change the background of the view
       *
       */
      setTimeout(() => {
        setOnChangeBackgroundColor({
          ...onChangeBackgroundColor,
          setColour: style,
        });
      }, 50);
    }
  };

  return (
    <View style={[styles.container]}>
      <StatusBar translucent backgroundColor={props?.backgroundColor} />
      <Canvas ref={canvasRef} style={[styles.imageDefaultSize, { backgroundColor: props?.backgroundColor ?? 'red' }]}>
        {props?.createdAvatar && <SkSvgView svg={props?.createdAvatar} width={SVG_WIDTH} height={SVG_HEIGHT} x={(width - SVG_WIDTH) / 2} />}
      </Canvas>
      <OptionsList bgColour={onChangeBackgroundColor.setColour} chipStyle={props?.chipStyle} chipTextStyle={props?.chipTextStyle} listOfElements={props?.getListOfOptions} onPress={onPressOption} />
      {props?.selectedOption && (
        <ElementsList bgColour={onChangeBackgroundColor.setColour} listBgColor={props?.listBgColor} flatListProps={props?.flatListProps} onPressItem={onChnageStyle} list={props?.selectedOption} />
      )}
      <PressableContainer cancelBtnStyle={props?.cancelBtnStyle} doneBtnStyle={props?.doneBtnStyle} onPressCancel={onPressPressableCancel} onPressDone={onPressPressableDone} />
    </View>
  );
};
export default RenderAvatar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  canvasDefaultContainer: { width: 100, height: 100 },
  imageDefaultSize: {
    width: width,
    height: 300,
    alignItems: 'center',
    backgroundColor: 'red',
    justifyContent: 'center',
  },
});
