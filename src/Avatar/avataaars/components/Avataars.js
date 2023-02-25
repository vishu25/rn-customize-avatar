import * as React from 'react';
import {View, StyleSheet, Dimensions, StatusBar} from 'react-native';
import {Canvas, ImageSVG, Skia} from '@shopify/react-native-skia';
import {getDefaultAvatar, getSkinTon, OPTIONS} from '../utils/utils';
import {createOwnAvatar, getListOfOptions} from '../utils/utils';
import {ElementsList, OptionsList, PressableContainer} from '@/Avatar/common';
const width = Dimensions.get('window').width;

const Avataars = props => {
  const {
    svgWidth,
    svgHeight,
    backgroundColor,
    skinTonColorList,
    facialHairColorList,
    accessoriesColorList,
    hairColorList,
    backgroundColorList,
    onDone,
    onCancel,
    hatColorList,
    clothColorList,
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
    flip: true,
    radius: 5,
    clothing: [defaultAvatar?.clothing ? [...defaultAvatar?.clothing] : 'blazerAndShirt'],
    mouth: [defaultAvatar?.eyes ? [...defaultAvatar?.mouth] : 'smile'],
    eyes: [defaultAvatar?.eyes ? [...defaultAvatar?.eyes] : 'eyeRoll'],
    eyebrows: [defaultAvatar?.eyebrows ? [...defaultAvatar?.eyebrows] : 'defaultNatural'],
    top: [defaultAvatar?.top ? [...defaultAvatar?.top] : 'shortCurly'],
    facialHair: [defaultAvatar?.facialHair && [...defaultAvatar?.facialHair]],
    accessories: [defaultAvatar?.accessories && [...defaultAvatar?.accessories]],
    clothingGraphic: [defaultAvatar?.clothingGraphic && [...defaultAvatar?.clothingGraphic]],
    accessoriesColor: [defaultAvatar?.accessoriesColor && [...defaultAvatar?.accessoriesColor]],
    clothesColor: [defaultAvatar?.eyes ? [...defaultAvatar?.clothesColor] : 'ff488e'],
    hatColor: [defaultAvatar?.hatColor ? [...defaultAvatar?.hatColor] : 'c93305'],
    hairColor: [defaultAvatar?.hairColor ? [...defaultAvatar?.hairColor] : 'c93305'],
    skinColor: [defaultAvatar?.skinColor && [...defaultAvatar?.skinColor]],
    facialHairColor: [defaultAvatar?.facialHairColor ? [...defaultAvatar?.facialHairColor] : '000000'],
    backgroundColor: [defaultAvatar?.backgroundColor ? [...defaultAvatar?.backgroundColor] : '65c9ff', 'ffd5dc'],
    facialHairProbability: 100,
    accessoriesProbability: 100,
  });
  const canvasRef = React.useRef();

  const selectedOptionRef = React.useRef('Skin Color');

  const updateState = data => setSelectedState({...selectedState, ...data});

  React.useEffect(() => {
    setSelectedOption(getSkinTon(skinTonColorList));
  }, [skinTonColorList]);

  /**
   * When use click on option Slider
   */
  const onPressOption = React.useCallback(
    optionSelect => {
      selectedOptionRef.current = optionSelect;
      if (optionSelect.includes('Color')) {
        if (optionSelect.includes('Skin')) {
          setSelectedOption(OPTIONS[optionSelect](skinTonColorList));
        } else if (optionSelect.includes('Hair')) {
          setSelectedOption(OPTIONS[optionSelect](hairColorList));
        } else if (optionSelect.includes('Background')) {
          setSelectedOption(OPTIONS[optionSelect](backgroundColorList));
        } else if (optionSelect.includes('Facial')) {
          setSelectedOption(OPTIONS[optionSelect](facialHairColorList));
        } else if (optionSelect.includes('Accessories')) {
          setSelectedOption(OPTIONS[optionSelect](accessoriesColorList));
        } else if (optionSelect.includes('Hat')) {
          setSelectedOption(OPTIONS[optionSelect](hatColorList));
        } else if (optionSelect.includes('Clothes')) {
          setSelectedOption(OPTIONS[optionSelect](clothColorList));
        }
        return;
      }
      console.log('selectedState', selectedState);
      setSelectedOption(OPTIONS[optionSelect](selectedState));
    },
    [selectedState, skinTonColorList, hairColorList, backgroundColorList, facialHairColorList, accessoriesColorList, hatColorList, clothColorList],
  );

  const setStyle = selectedStyle => {
    const dynamicId = selectedOptionRef.current
      .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
        return index === 0 ? word.toLowerCase() : word.toUpperCase();
      })
      .replace(/\s+/g, '');
    if (typeof selectedStyle !== 'string') {
      console.log('selectedStyle', selectedStyle);
      console.log('dynamicId', dynamicId);
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
    onDone && onDone(canvasRef.current?.makeImageSnapshot().encodeToBase64() ?? '');
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

export default Avataars;

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
