import * as React from 'react';
import {Skia} from '@shopify/react-native-skia';
import {getBeardSvg, getDefaultAvatar, OPTIONS} from '../utils/utils';
import {createOwnAvatar, getListOfOptions} from '../utils/utils';
import RenderAvatar from '../../common/RenderAvatar';

const Croodles = props => {
  const {backgroundColorList, defaultAvatar, topColourList} = props;
  const [createdAvatar, setCreatedAvatar] = React.useState(Skia.SVG.MakeFromString(getDefaultAvatar(defaultAvatar)));
  const [selectedOption, setSelectedOption] = React.useState();
  const [selectedState, setSelectedState] = React.useState({
    eyes: [defaultAvatar?.eyes ? [...defaultAvatar?.eyes] : 'variant16'],
    face: [defaultAvatar?.face ? [...defaultAvatar?.face] : 'variant08'],
    top: [defaultAvatar?.hair ? [...defaultAvatar?.hair] : 'variant29'],
    mouth: [defaultAvatar?.mouth ? [...defaultAvatar?.mouth] : 'variant18'],
    nose: [defaultAvatar?.nose ? [...defaultAvatar?.nose] : 'variant09'],
    beard :  [defaultAvatar?.beard ? [...defaultAvatar?.beard] : 'variant05'],
    topColor : [defaultAvatar?.topColor ? [...defaultAvatar?.topColor] : '2c1b18'],
    mustache : [defaultAvatar?.mustache ? [...defaultAvatar?.mustache] : 'variant04'],
    backgroundColor: [defaultAvatar?.backgroundColor ? [...defaultAvatar?.backgroundColor] : '65c9ff'],
  });
  const selectedOptionRef = React.useRef('Skin Color');
  const updateState = data => setSelectedState({...selectedState, ...data});

  React.useEffect(() => {
    setSelectedOption(getBeardSvg());
  }, []);

  const onPressOption = React.useCallback(
    optionSelect => {
      selectedOptionRef.current = optionSelect;
      console.log("optionSelectoptionSelect", optionSelect)
      if (optionSelect.includes('Color')) {
        if (optionSelect.includes('Top')) {
          setSelectedOption(OPTIONS[optionSelect](topColourList));
        } else if (optionSelect.includes('Background')) {
          setSelectedOption(OPTIONS[optionSelect](backgroundColorList));
        }
        return 
      }
      setSelectedOption(OPTIONS[optionSelect](selectedState));
    },
    [selectedState, topColourList, backgroundColorList],
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

export default Croodles;
