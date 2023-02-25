import {createAvatar} from '@dicebear/core';
import * as adventurerNeutral from '@dicebear/adventurer-neutral';
import {Skia} from '@shopify/react-native-skia';
import {schema} from './schema';

const defaultAvatar = {
  flip: false,
  radius: 5,
  backgroundColor: ['65c9ff'],
  backgroundType: ['solid'],
  mouth: ['variant30'],
  eyes: ['variant26'],
  eyebrows: ['variant10'],
};

export const getDefaultAvatar = setDefaultAvatar => {
  return createAvatar(adventurerNeutral, {...defaultAvatar, ...setDefaultAvatar}).toString();
};

export const getListOfOptions = () => {
  return ['Mouth', 'Eyes', 'Eyebrows', 'Glasses', 'Background Color'];
};

export const createOwnAvatar = avatarStyle => {
  return Skia.SVG.MakeFromString(createAvatar(adventurerNeutral, {...avatarStyle}).toString());
};

export const getSkinTon = backgroundColor => {
  console.log('backgroundColor>>>', backgroundColor);
  return [
    'FFE0B2', //#light
    'FFB6C1', //# light peach
    'FFC0CB', //# pink
    'FF69B4', //# hot pink
    'FFDAB9', //# peach
    'F08080', //# light coral
    'E6E6E6', //# light gray
    'D2B48C', //# tan
    'D2691E', //# chocolate
    '8B4513', //# saddle brown
    '8B008B', //# dark magenta
    '800000', //# maroon
    '708090', //# slate gray
  ].concat(backgroundColor ?? []);
};

export const getMouthSvg = (selectedStyle, color) => {
  return schema.properties.mouth.default.map(key => {
    return {
      svg: Skia.SVG.MakeFromString(
        createAvatar(adventurerNeutral, {
          ...defaultAvatar,
          ...selectedStyle,
          mouth: [key],
        }).toString(),
      ),
      value: key,
    };
  });
};

export const getEyesSvg = (selectedStyle, color) => {
  return schema.properties.eyes.default.map(key => {
    return {
      svg: Skia.SVG.MakeFromString(
        createAvatar(adventurerNeutral, {
          ...defaultAvatar,
          ...selectedStyle,
          eyes: [key],
        }).toString(),
      ),
      value: key,
    };
  });
};

export const getEyeBrowsSvg = (selectedStyle, color) => {
  return schema.properties.eyebrows.default.map(key => {
    return {
      svg: Skia.SVG.MakeFromString(
        createAvatar(adventurerNeutral, {
          ...defaultAvatar,
          ...selectedStyle,
          eyebrows: [key],
        }).toString(),
      ),
      value: key,
    };
  });
};

export const getGlassesSvg = (selectedStyle, color) => {
  return schema.properties.glasses.default.map(key => {
    return {
      svg: Skia.SVG.MakeFromString(
        createAvatar(adventurerNeutral, {
          ...defaultAvatar,
          ...selectedStyle,
          glasses: [key],
          glassesProbability: 100,
        }).toString(),
      ),
      value: key,
    };
  });
};

export const OPTIONS = {
  Eyes: selectedState => getEyesSvg(selectedState),
  Mouth: selectedState => getMouthSvg(selectedState),
  Eyebrows: selectedState => getEyeBrowsSvg(selectedState),
  Glasses: selectedState => getGlassesSvg(selectedState),
  'Background Color': _selectedState => getSkinTon(_selectedState),
};
