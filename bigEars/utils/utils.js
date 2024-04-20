import { createAvatar } from '@dicebear/core';
import { bigEars } from '@dicebear/collection';
import { Skia } from '@shopify/react-native-skia';
import { schema } from './schema';
import { THEME_COLOUR } from '../../constants/colors';
const defaultAvatar = {
  flip: false,
  radius: 5,
  backgroundType: ['solid'],
  cheek: ['variant06'],
  ear: ['variant08'],
  eyes: ['variant32'],
  face: ['variant10'],
  frontHair: ['variant12'],
  hair: ['long20'],
  hairColor: ['2c1b18'],
  mouth: ['variant0708'],
  nose: ['variant12'],
  sideburn: ['variant07'],
  skinColor: ['f8b788'],
  backgroundColor: [THEME_COLOUR],
};

export const getDefaultAvatar = (setDefaultAvatar) => {
  return createAvatar(bigEars, {
    ...defaultAvatar,
    ...setDefaultAvatar,
  }).toString();
};

export const getListOfOptions = () => {
  return [
    'Skin Color',
    'Mouth',
    'Eyes',
    'Ear',
    'Face',
    'Nose',
    'Hair',
    'Hair Color',
    'Side Burn',
    'Cheek',
    'Front Hair',
    'Background Color',
  ];
};

export const createOwnAvatar = (avatarStyle) => {
  return Skia.SVG.MakeFromString(
    createAvatar(bigEars, { ...avatarStyle }).toString()
  );
};

export const getSkinTon = (userColor) => {
  return schema.properties.skinColor.default.concat(userColor ?? []);
};

export const getMouthSvg = (selectedStyle, _color) => {
  return schema.properties.mouth.default.map((key) => {
    return {
      svg: Skia.SVG.MakeFromString(
        createAvatar(bigEars, {
          ...defaultAvatar,
          ...selectedStyle,
          mouth: [key],
        }).toString()
      ),
      value: key,
    };
  });
};

export const getEyesSvg = (selectedStyle, _color) => {
  return schema.properties.eyes.default.map((key) => {
    return {
      svg: Skia.SVG.MakeFromString(
        createAvatar(bigEars, {
          ...defaultAvatar,
          ...selectedStyle,
          eyes: [key],
        }).toString()
      ),
      value: key,
    };
  });
};

export const getEarsSvg = (selectedStyle, _color) => {
  return schema.properties.ear.default.map((key) => {
    return {
      svg: Skia.SVG.MakeFromString(
        createAvatar(bigEars, {
          ...defaultAvatar,
          ...selectedStyle,
          ear: [key],
        }).toString()
      ),
      value: key,
    };
  });
};
export const getFaceSvg = (selectedStyle, _color) => {
  return schema.properties.face.default.map((key) => {
    return {
      svg: Skia.SVG.MakeFromString(
        createAvatar(bigEars, {
          ...defaultAvatar,
          ...selectedStyle,
          face: [key],
        }).toString()
      ),
      value: key,
    };
  });
};

export const getSideBurnSvg = (selectedStyle, _color) => {
  return schema.properties.sideburn.default.map((key) => {
    return {
      svg: Skia.SVG.MakeFromString(
        createAvatar(bigEars, {
          ...defaultAvatar,
          ...selectedStyle,
          sideburn: [key],
        }).toString()
      ),
      value: key,
    };
  });
};

export const getFrontHairSvg = (selectedStyle, _color) => {
  return schema.properties.frontHair.default.map((key) => {
    return {
      svg: Skia.SVG.MakeFromString(
        createAvatar(bigEars, {
          ...defaultAvatar,
          ...selectedStyle,
          frontHair: [key],
        }).toString()
      ),
      value: key,
    };
  });
};

export const getNoseSvg = (selectedStyle, _color) => {
  return schema.properties.nose.default.map((key) => {
    return {
      svg: Skia.SVG.MakeFromString(
        createAvatar(bigEars, {
          ...defaultAvatar,
          ...selectedStyle,
          nose: [key],
        }).toString()
      ),
      value: key,
    };
  });
};

export const getHairSvg = (selectedStyle, _color) => {
  return schema.properties.hair.default.map((key) => {
    return {
      svg: Skia.SVG.MakeFromString(
        createAvatar(bigEars, {
          ...defaultAvatar,
          ...selectedStyle,
          hair: [key],
        }).toString()
      ),
      value: key,
    };
  });
};

export const getCheeksSvg = (selectedStyle, _color) => {
  return schema.properties.cheek.default.map((key) => {
    return {
      svg: Skia.SVG.MakeFromString(
        createAvatar(bigEars, {
          ...defaultAvatar,
          ...selectedStyle,
          cheek: [key],
          cheekProbability: 100,
        }).toString()
      ),
      value: key,
    };
  });
};

export const OPTIONS = {
  'Skin Color': (selectedState) => getSkinTon(selectedState),
  Eyes: (selectedState) => getEyesSvg(selectedState),
  Mouth: (selectedState) => getMouthSvg(selectedState),
  Ear: (selectedState) => getEarsSvg(selectedState),
  Hair: (selectedState) => getHairSvg(selectedState),
  'Front Hair': (selectedState) => getFrontHairSvg(selectedState),
  Face: (selectedState) => getFaceSvg(selectedState),
  'Side Burn': (selectedState) => getSideBurnSvg(selectedState),
  Nose: (selectedState) => getNoseSvg(selectedState),
  'Background Color': (backgroundColor) =>
    schema.properties.skinColor.default.concat(backgroundColor ?? []),
  Cheek: (selectedState) => getCheeksSvg(selectedState),
  'Hair Color': (hairColor) =>
    schema.properties.hairColor.default.concat(hairColor ?? []),
};
