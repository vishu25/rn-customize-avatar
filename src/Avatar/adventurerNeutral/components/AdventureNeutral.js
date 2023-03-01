import * as React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {Skia} from '@shopify/react-native-skia';
import {getDefaultAvatar, getMouthSvg, OPTIONS} from '../utils/utils';
import {createOwnAvatar, getListOfOptions} from '../utils/utils';
// import {ElementsList, OptionsList, PressableContainer} from '@/Avatar/common';
import RenderAvatar from '../../common/RenderAvatar';
const width = Dimensions.get('window').width;

const AdventureNeutral = props => {
  const {backgroundColorList, defaultAvatar} = props;
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

export default AdventureNeutral;
