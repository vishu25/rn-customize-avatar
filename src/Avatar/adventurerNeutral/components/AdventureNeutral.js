import * as React from 'react';
import {View, StyleSheet, Dimensions, StatusBar} from 'react-native';
import {Canvas, ImageSVG, Skia} from '@shopify/react-native-skia';
import {getDefaultAvatar, getMouthSvg, OPTIONS} from '../utils/utils';
import {createOwnAvatar, getListOfOptions} from '../utils/utils';
import {ElementsList, OptionsList, PressableContainer} from '@/Avatar/common';
const width = Dimensions.get('window').width;

const AdventureNeutral = props => {
  const {
    svgWidth,
    svgHeight,
    onDone,
    onCancel,
    backgroundColor,
    backgroundColorList,
    defaultAvatar,
    flatListProps,
    chipStyle,
    chipTextStyle,
    cancelBtnStyle,
    doneBtnStyle,
    listBgColor,
  } = props;
  const SVG_WIDTH = svgWidth ? svgWidth : 280;
  const SVG_HEIGHT = svgHeight ? svgHeight : 280;
  const [createdAvatar, setCreatedAvatar] = React.useState(Skia.SVG.MakeFromString(getDefaultAvatar(defaultAvatar)));
  const [selectedOption, setSelectedOption] = React.useState();
  const [selectedState, setSelectedState] = React.useState({
    mouth: [defaultAvatar?.mouth ? [...defaultAvatar?.mouth] : 'variant30'],
    eyes: [defaultAvatar?.eyes ? [...defaultAvatar?.eyes] : 'variant26'],
    eyebrows: [defaultAvatar?.eyebrows ? [...defaultAvatar?.eyebrows] : 'variant10'],
    backgroundColor: [defaultAvatar?.backgroundColor ? [...defaultAvatar?.backgroundColor] : '65c9ff'],
    glasses: [defaultAvatar?.glasses && [...defaultAvatar?.glasses]],
    glassesProbability: 100,
  });
  const canvasRef = React.useRef();
  const selectedOptionRef = React.useRef('Skin Color');
  const updateState = data => setSelectedState({...selectedState, ...data});

  React.useEffect(() => {
    setSelectedOption(getMouthSvg());
  }, []);

  const onPressOption = React.useCallback(
    optionSelect => {
      selectedOptionRef.current = optionSelect;
      if (optionSelect.includes('Color')) {
        if (optionSelect.includes('Background')) {
          setSelectedOption(OPTIONS[optionSelect](backgroundColorList));
        }
        return;
      }
      setSelectedOption(OPTIONS[optionSelect](selectedState));
    },
    [selectedState, backgroundColorList],
  );

  const setStyle = selectedStyle => {
    const dynamicId = selectedOptionRef.current
      .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
        return index === 0 ? word.toLowerCase() : word.toUpperCase();
      })
      .replace(/\s+/g, '');
    if (typeof selectedStyle !== 'string') {
      if (selectedStyle.value) {
        updateState({[dynamicId]: [selectedStyle.value]});
        setCreatedAvatar(selectedStyle.svg);
      } else {
        updateState({[dynamicId]: []});
        setCreatedAvatar(createOwnAvatar({...selectedState, [dynamicId]: []}));
      }
    } else {
      updateState({[dynamicId]: [selectedStyle]});
      setCreatedAvatar(createOwnAvatar({...selectedState, [dynamicId]: [selectedStyle]}));
    }
  };

  const onPressPressableDone = () => {
    onDone && onDone(canvasRef.current?.makeImageSnapshot().encodeToBase64());
  };

  const onPressPressableCancel = () => {
    onCancel && onCancel();
  };

  return (
    <View style={[styles.container]}>
      <StatusBar translucent backgroundColor={backgroundColor} />
      <Canvas ref={canvasRef} style={[styles.imageDefaultSize, {backgroundColor: backgroundColor ?? 'red'}]}>
        {createdAvatar && <ImageSVG svg={createdAvatar} width={SVG_WIDTH} height={SVG_HEIGHT} x={(width - SVG_WIDTH) / 2} y={30} />}
      </Canvas>
      <OptionsList chipStyle={chipStyle} chipTextStyle={chipTextStyle} listOfElements={getListOfOptions()} onPress={onPressOption} />
      {selectedOption && <ElementsList listBgColor={listBgColor} flatListProps={flatListProps} onPressItem={setStyle} list={selectedOption} />}
      <PressableContainer cancelBtnStyle={cancelBtnStyle} doneBtnStyle={doneBtnStyle} onPressCancel={onPressPressableCancel} onPressDone={onPressPressableDone} />
    </View>
  );
};

export default AdventureNeutral;

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
