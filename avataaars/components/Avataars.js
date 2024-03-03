import * as React from 'react';
import {Skia} from '@shopify/react-native-skia';
import {getDefaultAvatar, getSkinTon, OPTIONS} from '../utils/utils';
import {createOwnAvatar, getListOfOptions} from '../utils/utils';
import RenderAvatar from '../../common/RenderAvatar';

const Avataars = props => {
  const {skinTonColorList, facialHairColorList, accessoriesColorList, hairColorList, backgroundColorList, hatColorList, clothColorList, defaultAvatar} = props;
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

export default Avataars;
