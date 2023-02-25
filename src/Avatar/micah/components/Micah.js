import * as React from 'react';
import {View, StyleSheet, Dimensions, StatusBar} from 'react-native';
import {Canvas, ImageSVG, Skia} from '@shopify/react-native-skia';
import {ElementsList, OptionsList, PressableContainer} from '@/Avatar/common';
import {getDefaultAvatar, getSkinTon, createOwnAvatar, getListOfOptions, OPTIONS, getBaseColor} from '../utils/utils';
const width = Dimensions.get('window').width;
const Micah = props => {
  const black = '000000';
  const {
    svgWidth,
    svgHeight,
    onDone,
    onCancel,
    backgroundColorList,
    earringColorList,
    eyeShadowColorList,
    eyebrowsColorList,
    eyesColorList,
    glassesColorList,
    hairColorList,
    mouthColorList,
    shirtColorList,
    defaultAvatar,
    flatListProps,
    chipStyle,
    chipTextStyle,
    cancelBtnStyle,
    doneBtnStyle,
    listBgColor,
    backgroundColor,
    baseColorList,
  } = props;
  const SVG_WIDTH = svgWidth ? svgWidth : 280;
  const SVG_HEIGHT = svgHeight ? svgHeight : 280;
  const [createdAvatar, setCreatedAvatar] = React.useState(Skia.SVG.MakeFromString(getDefaultAvatar(defaultAvatar)));
  const [selectedOption, setSelectedOption] = React.useState();
  const [selectedState, setSelectedState] = React.useState({
    hair: [defaultAvatar?.hair ? [...defaultAvatar?.hair] : 'fonze'],
    head: [defaultAvatar?.head ? [...defaultAvatar?.head] : 'variant04'],
    mouth: [defaultAvatar?.mouth ? [...defaultAvatar?.mouth] : 'smile'],
    eyes: [defaultAvatar?.eyes ? [...defaultAvatar?.eyes] : 'round'],
    eyebrows: [defaultAvatar?.eyebrows ? [...defaultAvatar?.eyebrows] : 'eyelashesUp'],
    ears: [defaultAvatar?.ears ? [...defaultAvatar?.ears] : 'attached'],
    nose: [defaultAvatar?.nose ? [...defaultAvatar?.nose] : 'pointed'],
    shirt: [defaultAvatar?.shirt ? [...defaultAvatar?.shirt] : 'open'],
    earrings: [defaultAvatar?.earrings && [...defaultAvatar?.earrings]],
    glasses: [defaultAvatar?.glasses && [...defaultAvatar?.glasses]],
    facialHair: [defaultAvatar?.facialHair && [...defaultAvatar?.facialHair]],
    earringColor: [defaultAvatar?.earringColor ? [...defaultAvatar?.earringColor] : black],
    hairColor: [defaultAvatar?.hairColor ? [...defaultAvatar?.hairColor] : black],
    mouthColor: [defaultAvatar?.mouthColor ? [...defaultAvatar?.mouthColor] : black],
    shirtColor: [defaultAvatar?.shirtColor ? [...defaultAvatar?.shirtColor] : 'ff8002'],
    eyesColor: [defaultAvatar?.shirtColor ? [...defaultAvatar?.shirtColor] : black],
    eyeShadowColor: [defaultAvatar?.eyebrowsColor && [...defaultAvatar?.eyebrowsColor]],
    eyebrowsColor: [defaultAvatar?.eyebrowsColor ? [...defaultAvatar?.eyebrowsColor] : black],
    glassesColor: [defaultAvatar?.glassesColor ? [...defaultAvatar?.glassesColor] : black],
    baseColor: [defaultAvatar?.baseColor ? [...defaultAvatar?.baseColor] : 'f9c9b6'],
    glassesProbability: 100,
    facialHairProbability: 100,
    earringsProbability: 100,
    backgroundColor: [defaultAvatar?.backgroundColor && [...defaultAvatar?.backgroundColor]],
  });
  const canvasRef = React.useRef();
  const selectedOptionRef = React.useRef('Skin Color');
  const updateState = data => setSelectedState({...selectedState, ...data});
  React.useEffect(() => {
    setSelectedOption(getBaseColor(baseColorList));
  }, [baseColorList]);

  const onPressOption = React.useCallback(
    optionSelect => {
      selectedOptionRef.current = optionSelect;
      if (optionSelect.includes('Color')) {
        if (optionSelect.includes('Earring')) {
          setSelectedOption(OPTIONS[optionSelect](earringColorList));
        } else if (optionSelect.includes('Hair')) {
          setSelectedOption(OPTIONS[optionSelect](hairColorList));
        } else if (optionSelect.includes('Background')) {
          setSelectedOption(OPTIONS[optionSelect](backgroundColorList));
        } else if (optionSelect.includes('EyeShadow')) {
          setSelectedOption(OPTIONS[optionSelect](eyeShadowColorList));
        } else if (optionSelect.includes('Eyebrows')) {
          setSelectedOption(OPTIONS[optionSelect](eyebrowsColorList));
        } else if (optionSelect.includes('Eye')) {
          setSelectedOption(OPTIONS[optionSelect](eyesColorList));
        } else if (optionSelect.includes('Glasses')) {
          setSelectedOption(OPTIONS[optionSelect](glassesColorList));
        } else if (optionSelect.includes('Mouth')) {
          setSelectedOption(OPTIONS[optionSelect](mouthColorList));
        } else if (optionSelect.includes('Shirt')) {
          setSelectedOption(OPTIONS[optionSelect](shirtColorList));
        } else if (optionSelect.includes('Base')) {
          setSelectedOption(OPTIONS[optionSelect](baseColorList));
        }
        return;
      }
      setSelectedOption(OPTIONS[optionSelect](selectedState));
    },
    [
      selectedState,
      earringColorList,
      hairColorList,
      backgroundColorList,
      eyeShadowColorList,
      eyebrowsColorList,
      glassesColorList,
      mouthColorList,
      shirtColorList,
      eyesColorList,
      baseColorList,
    ],
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

export default Micah;

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
