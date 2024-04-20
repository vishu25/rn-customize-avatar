import * as React from 'react';
import { Skia } from '@shopify/react-native-skia';
import { getBeardSvg, getDefaultAvatar, OPTIONS } from '../utils/utils';
import { createOwnAvatar, getListOfOptions } from '../utils/utils';
import RenderAvatar from '../../common/RenderAvatar';
import { THEME_COLOUR } from '../../constants/colors';

const Notionists = (props) => {
  const { backgroundColorList, defaultAvatar } = props;
  const [createdAvatar, setCreatedAvatar] = React.useState(
    Skia.SVG.MakeFromString(getDefaultAvatar({ ...defaultAvatar, backgroundColor: props?.backgroundColor ? [props?.backgroundColor] : [THEME_COLOUR] }))
  );
  const [selectedOption, setSelectedOption] = React.useState();
  const [selectedState, setSelectedState] = React.useState({
    beard: [defaultAvatar?.beard ? [...defaultAvatar?.beard] : ''],
    body: [defaultAvatar?.body ? [...defaultAvatar?.body] : 'variant25'],
    brows: [defaultAvatar?.brows ? [...defaultAvatar?.brows] : 'variant13'],
    eyes: [defaultAvatar?.eyes ? [...defaultAvatar?.eyes] : 'variant05'],
    nose: [defaultAvatar?.nose ? [...defaultAvatar?.nose] : 'variant20'],
    gesture: [defaultAvatar?.gesture ? [...defaultAvatar?.gesture] : ''],
    glasses: [defaultAvatar?.glasses ? [...defaultAvatar?.glasses] : ''],
    hair: [defaultAvatar?.hair ? [...defaultAvatar?.hair] : 'variant63'],
    lips: [defaultAvatar?.lips ? [...defaultAvatar?.lips] : 'variant30'],
    backgroundColor: [defaultAvatar?.backgroundColor ? [...defaultAvatar?.backgroundColor] : props?.backgroundColor ? props?.backgroundColor : THEME_COLOUR],
    glassesProbability: 100,
    gestureProbability: 100,
    beardProbability: 100,
  });
  const selectedOptionRef = React.useRef('beard');
  const updateState = (data) => setSelectedState({ ...selectedState, ...data });

  React.useEffect(() => {
    setSelectedOption(getBeardSvg(selectedState));
  }, []);

  const onPressOption = React.useCallback(
    (optionSelect) => {
      selectedOptionRef.current = optionSelect;
      if (optionSelect.includes('Color')) {
        if (optionSelect.includes('Background')) {
          setSelectedOption(OPTIONS[optionSelect](backgroundColorList));
        }
        return;
      }
      setSelectedOption(OPTIONS[optionSelect](selectedState));
    },
    [selectedState, backgroundColorList]
  );

  const setStyle = (selectedStyle) => {
    const dynamicId = selectedOptionRef.current
      .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
        return index === 0 ? word.toLowerCase() : word.toUpperCase();
      })
      .replace(/\s+/g, '');
    if (typeof selectedStyle !== 'string') {
      if (selectedStyle.value) {
        updateState({ [dynamicId]: [selectedStyle.value] });
        setCreatedAvatar(selectedStyle.svg);
      } else {
        updateState({ [dynamicId]: [] });
        setCreatedAvatar(createOwnAvatar({ ...selectedState, [dynamicId]: [] }));
      }
    } else {
      updateState({ [dynamicId]: [selectedStyle] });
      setCreatedAvatar(createOwnAvatar({ ...selectedState, [dynamicId]: [selectedStyle] }));
    }
  };

  return <RenderAvatar onPressOption={onPressOption} getListOfOptions={getListOfOptions()} setStyle={setStyle} createdAvatar={createdAvatar} selectedOption={selectedOption} {...props} />;
};

export default Notionists;
