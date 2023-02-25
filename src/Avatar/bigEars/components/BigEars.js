import * as React from 'react';
import {View, StyleSheet, Dimensions, StatusBar} from 'react-native';
import {Canvas, ImageSVG, Skia} from '@shopify/react-native-skia';
import {getDefaultAvatar, getSkinTon, OPTIONS} from '../utils/utils';
import {createOwnAvatar, getListOfOptions} from '../utils/utils';
import {ElementsList, OptionsList, PressableContainer} from '@/Avatar/common';
const width = Dimensions.get('window').width;

const BigEars = props => {
  const {
    svgWidth,
    svgHeight,
    backgroundColor,
    skinTonColorList,
    hairColorList,
    backgroundColorList,
    onDone,
    onCancel,
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
    flip: false,
    cheek: [defaultAvatar?.cheek && [...defaultAvatar?.cheek]],
    ear: [defaultAvatar?.ear ? [...defaultAvatar?.ear] : 'variant08'],
    eyes: [defaultAvatar?.eyes ? [...defaultAvatar?.eyes] : 'variant32'],
    face: [defaultAvatar?.face ? [...defaultAvatar?.face] : 'variant10'],
    frontHair: [defaultAvatar?.frontHair ? [...defaultAvatar?.frontHair] : 'variant12'],
    hair: [defaultAvatar?.hair ? [...defaultAvatar?.hair] : 'long20'],
    hairColor: [defaultAvatar?.hairColor ? [...defaultAvatar?.hairColor] : '2c1b18'],
    mouth: [defaultAvatar?.mouth ? [...defaultAvatar?.mouth] : 'variant0708'],
    nose: [defaultAvatar?.nose ? [...defaultAvatar?.nose] : 'variant12'],
    sideburn: [defaultAvatar?.sideburn ? [...defaultAvatar?.sideburn] : 'variant07'],
    skinColor: [defaultAvatar?.skinColor ? [...defaultAvatar?.skinColor] : 'f8b788'],
    backgroundColor: [defaultAvatar?.backgroundColor ? [...defaultAvatar?.backgroundColor] : '65c9ff'],
    cheekProbability: 100,
  });
  const canvasRef = React.useRef();
  const selectedOptionRef = React.useRef('Skin Color');
  const updateState = data => setSelectedState({...selectedState, ...data});

  React.useEffect(() => {
    setSelectedOption(getSkinTon(skinTonColorList));
  }, [skinTonColorList]);

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
        }
        return;
      }
      console.log('selectedState', selectedState);
      setSelectedOption(OPTIONS[optionSelect](selectedState));
    },
    [selectedState, skinTonColorList, backgroundColorList, hairColorList],
  );

  const setStyle = selectedStyle => {
    const dynamicId = selectedOptionRef.current
      .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
        return index === 0 ? word.toLowerCase() : word.toUpperCase();
      })
      .replace(/\s+/g, '');
    if (typeof selectedStyle !== 'string') {
      if (selectedStyle.value) {
        console.log('cheek', selectedStyle);
        console.log('dynamicId', dynamicId);

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

export default BigEars;

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
