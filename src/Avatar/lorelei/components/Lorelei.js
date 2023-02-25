import * as React from 'react';
import {View, StyleSheet, Dimensions, StatusBar} from 'react-native';
import {Canvas, ImageSVG, Skia} from '@shopify/react-native-skia';
import {ElementsList, OptionsList, PressableContainer} from '@/Avatar/common';
import {getDefaultAvatar, getSkinTon, createOwnAvatar, getListOfOptions, OPTIONS} from '../utils/utils';
const width = Dimensions.get('window').width;

// interface AvatarProps {
//   svgWidth?: number;
//   svgHeight?: number;
//   onDone?: (base64: string) => void;
//   onCancel?: () => void;
//   skinTonColorList?: Array<string>;
//   hairColorList?: Array<string>;
//   earringsColorList?: Array<string>;
//   eyeBrowsColorList?: Array<string>;
//   eyesColorList?: Array<string>;
//   frecklesColorList?: Array<string>;
//   glassesColor?: Array<string>;
//   mouthColor?: Array<string>;
//   noseColor?: Array<string>;
//   hairAccessoriesColor?: Array<string>;
//   backgroundColorList?: Array<string>;
// }

const Lorelei = props => {
  const black = '000000';
  const {
    svgWidth,
    svgHeight,
    onDone,
    onCancel,
    skinTonColorList,
    hairColorList,
    earringsColorList,
    eyeBrowsColorList,
    eyesColorList,
    frecklesColorList,
    glassesColor,
    hairAccessoriesColor,
    mouthColor,
    noseColor,
    backgroundColorList,
    defaultAvatar,
    flatListProps,
    chipStyle,
    chipTextStyle,
    cancelBtnStyle,
    doneBtnStyle,
    listBgColor,
    backgroundColor,
  } = props;
  const SVG_WIDTH = svgWidth ? svgWidth : 280;
  const SVG_HEIGHT = svgHeight ? svgHeight : 280;
  const [createdAvatar, setCreatedAvatar] = React.useState(Skia.SVG.MakeFromString(getDefaultAvatar(defaultAvatar)));
  const [selectedOption, setSelectedOption] = React.useState();
  const [selectedState, setSelectedState] = React.useState({
    hair: [defaultAvatar?.hair ? [...defaultAvatar?.hair] : 'variant39'],
    head: [defaultAvatar?.head ? [...defaultAvatar?.head] : 'variant04'],
    mouth: [defaultAvatar?.mouth ? [...defaultAvatar?.mouth] : 'happy01'],
    eyes: [defaultAvatar?.eyes ? [...defaultAvatar?.eyes] : 'variant08'],
    eyebrows: [defaultAvatar?.eyebrows ? [...defaultAvatar?.eyebrows] : 'variant09'],
    top: [defaultAvatar?.top ? [...defaultAvatar?.top] : 'shortCurly'],
    earrings: [defaultAvatar?.earrings && [...defaultAvatar?.earrings]],
    nose: ['variant01'],
    glasses: [defaultAvatar?.glasses && [...defaultAvatar?.glasses]],
    beard: [defaultAvatar?.beard && [...defaultAvatar?.beard]],
    freckles: [defaultAvatar?.freckles && [...defaultAvatar?.freckles]],
    hairAccessories: [defaultAvatar?.hairAccessories && [...defaultAvatar?.hairAccessories]],
    glassesProbability: 100,
    beardProbability: 100,
    frecklesProbability: 100,
    earringsProbability: 100,
    hairAccessoriesProbability: 100,
    skinColor: [defaultAvatar?.skinColor ? [...defaultAvatar?.skinColor] : 'ffffff'],
    hairColor: defaultAvatar?.hairColor ? [...defaultAvatar?.hairColor] : [black],
    earringsColor: [defaultAvatar?.earringsColor ? [...defaultAvatar?.earringsColor] : black],
    eyebrowsColor: [defaultAvatar?.eyebrowsColor ? [...defaultAvatar?.eyebrowsColor] : black],
    eyesColor: [defaultAvatar?.eyesColor ? [...defaultAvatar?.eyesColor] : black],
    frecklesColor: [defaultAvatar?.frecklesColor ? [...defaultAvatar?.frecklesColor] : black],
    glassesColor: [defaultAvatar?.glassesColor ? [...defaultAvatar?.glassesColor] : black],
    mouthColor: [defaultAvatar?.mouthColor ? [...defaultAvatar?.mouthColor] : black],
    noseColor: [defaultAvatar?.noseColor ? [...defaultAvatar?.noseColor] : black],
    hairAccessoriesColor: [defaultAvatar?.hairAccessoriesColor ? [...defaultAvatar?.hairAccessoriesColor] : black],
    backgroundColor: [defaultAvatar?.backgroundColor ? [...defaultAvatar?.backgroundColor] : '65c9ff', 'ffd5dc'],
  });
  const canvasRef = React.useRef();
  const selectedOptionRef = React.useRef('Skin Color');
  const updateState = data => setSelectedState({...selectedState, ...data});
  React.useEffect(() => {
    setSelectedOption(getSkinTon());
  }, []);

  const onPressOption = React.useCallback(
    optionSelect => {
      selectedOptionRef.current = optionSelect;
      if (optionSelect.includes('Color')) {
        if (optionSelect.includes('Skin')) {
          setSelectedOption(OPTIONS[optionSelect](skinTonColorList));
        } else if (optionSelect.includes('Hair Color')) {
          setSelectedOption(OPTIONS[optionSelect](hairColorList));
        } else if (optionSelect.includes('Background')) {
          setSelectedOption(OPTIONS[optionSelect](backgroundColorList));
        } else if (optionSelect.includes('Earrings')) {
          setSelectedOption(OPTIONS[optionSelect](earringsColorList));
        } else if (optionSelect.includes('Hair Accessories')) {
          setSelectedOption(OPTIONS[optionSelect](hairAccessoriesColor));
        } else if (optionSelect.includes('EyeBrows')) {
          setSelectedOption(OPTIONS[optionSelect](eyeBrowsColorList));
        } else if (optionSelect.includes('Eye')) {
          setSelectedOption(OPTIONS[optionSelect](eyesColorList));
        } else if (optionSelect.includes('Freckles')) {
          setSelectedOption(OPTIONS[optionSelect](frecklesColorList));
        } else if (optionSelect.includes('Glasses')) {
          setSelectedOption(OPTIONS[optionSelect](glassesColor));
        } else if (optionSelect.includes('Mouth')) {
          setSelectedOption(OPTIONS[optionSelect](mouthColor));
        } else if (optionSelect.includes('Nose')) {
          setSelectedOption(OPTIONS[optionSelect](noseColor));
        }
        return;
      }
      setSelectedOption(OPTIONS[optionSelect](selectedState));
    },
    [
      selectedState,
      skinTonColorList,
      hairColorList,
      backgroundColorList,
      earringsColorList,
      hairAccessoriesColor,
      eyeBrowsColorList,
      eyesColorList,
      frecklesColorList,
      glassesColor,
      mouthColor,
      noseColor,
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

export default Lorelei;

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
