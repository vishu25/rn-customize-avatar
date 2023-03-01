import * as React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {Skia} from '@shopify/react-native-skia';
import {getDefaultAvatar, getSkinTon, OPTIONS} from '../utils/utils';
import {createOwnAvatar, getListOfOptions} from '../utils/utils';
import RenderAvatar from '@/Avatar/common/RenderAvatar';
const width = Dimensions.get('window').width;

const BigEars = props => {
  const {skinTonColorList, hairColorList, backgroundColorList, defaultAvatar} = props;
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

  return (
    <RenderAvatar
      onPressOption={onPressOption}
      getListOfOptions={getListOfOptions()}
      setStyle={setStyle}
      createdAvatar={createdAvatar}
      selectedOption={selectedOption}
      {...props}
    />
  );
};

export default BigEars;
