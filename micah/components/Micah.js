import * as React from 'react';
import {Skia} from '@shopify/react-native-skia';
import {getDefaultAvatar, createOwnAvatar, getListOfOptions, OPTIONS, getBaseColor} from '../utils/utils';
import RenderAvatar from '@/Avatar/common/RenderAvatar';
const Micah = props => {
  const black = '000000';
  const {
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
    baseColorList,
  } = props;
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

export default Micah;
