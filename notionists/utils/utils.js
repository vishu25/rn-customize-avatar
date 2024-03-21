import { createAvatar } from '@dicebear/core';
import * as notionists from '@dicebear/notionists';
import { Skia } from '@shopify/react-native-skia';
import { schema } from './schema';

const defaultAvatar = {
  beard: ['variant12'],
  body : ['variant25'],
  brows : ['variant13'],
  eyes: ['variant05'],
  gesture : ['waveOkLongArms'],
  glasses : ['variant11'],
  hair: ['variant63'],
  nose: ['variant20'],
  lips : ['variant30'],
  backgroundColor: ['65c9ff'],
  
};

export const getDefaultAvatar = (setDefaultAvatar) => {
  return createAvatar(notionists, {
    ...defaultAvatar,
    ...setDefaultAvatar,
    
  }).toString();
};

export const getListOfOptions = () => {
  return [
    'Beard',
    'Body',
    'Brows',
    'Eyes',
    'Gestures',
    'Glasses',
    'Hair',
    'Lips',
    'Nose',
    'Background Color',
  ];
};

export const createOwnAvatar = (avatarStyle) => {
  return Skia.SVG.MakeFromString(
    createAvatar(notionists, { ...avatarStyle }).toString()
  );
};

export const getLipsSvg = (selectedStyle) => {
  return schema.properties.lips.default.map((key) => {
    return {
      svg: Skia.SVG.MakeFromString(
        createAvatar(notionists, {
          ...defaultAvatar,
          ...selectedStyle,
          lips: [key],
        }).toString()
      ),
      value: key,
    };
  });
};

export const getGlassesSvg = (selectedStyle) => {
  return schema.properties.glasses.default.map((key) => {
    return {
      svg: Skia.SVG.MakeFromString(
        createAvatar(notionists, {
          ...defaultAvatar,
          ...selectedStyle,
          glasses: [key],
          glassesProbability: 100,
        }).toString()
      ),
      value: key,
    };
  });
};

export const getBeardSvg = (selectedStyle) => {
  return schema.properties.beard.default.map((key) => {
    return {
      svg: Skia.SVG.MakeFromString(
        createAvatar(notionists, {
          ...defaultAvatar,
          ...selectedStyle,
          beard: [key],
          beardProbability: 100,
        }).toString()
      ),
      value: key,
    };
  });
};

export const getBodySvg = (selectedStyle) => {
  return schema.properties.body.default.map((key) => {
    return {
      svg: Skia.SVG.MakeFromString(
        createAvatar(notionists, {
          ...defaultAvatar,
          ...selectedStyle,
          body: [key],
        }).toString()
      ),
      value: key,
    };
  });
};

export const getBrowsSvg = (selectedStyle) => {
  return schema.properties.brows.default.map((key) => {
    return {
      svg: Skia.SVG.MakeFromString(
        createAvatar(notionists, {
          ...defaultAvatar,
          ...selectedStyle,
          brows: [key],
        }).toString()
      ),
      value: key,
    };
  });
};

export const getGesturesSvg = (selectedStyle) => {
  return schema.properties.gesture.default.map((key) => {
    return {
      svg: Skia.SVG.MakeFromString(
        createAvatar(notionists, {
          ...defaultAvatar,
          ...selectedStyle,
          gestureProbability: 100,
          gesture: [key],
        }).toString()
      ),
      value: key,
    };
  });
};

export const getEyesSvg = (selectedStyle) => {
  return schema.properties.eyes.default.map((key) => {
    return {
      svg: Skia.SVG.MakeFromString(
        createAvatar(notionists, {
          ...defaultAvatar,
          ...selectedStyle,
          eyes: [key],
        }).toString()
      ),
      value: key,
    };
  });
};


export const getNoseSVG = (selectedStyle) => {
  return schema.properties.nose.default.map((key) => {
    return {
      svg: Skia.SVG.MakeFromString(
        createAvatar(notionists, {
          ...defaultAvatar,
          ...selectedStyle,
          nose: [key],
        }).toString()
      ),
      value: key,
    };
  });
};


export const getHairSVG = (selectedStyle) => {
  return schema.properties.hair.default.map((key) => {
    return {
      svg: Skia.SVG.MakeFromString(
        createAvatar(notionists, {
          ...defaultAvatar,
          ...selectedStyle,
          hair: [key],
        }).toString()
      ),
      value: key,
    };
  });
};

export const OPTIONS = {
  Beard: (selectedState) => getBeardSvg(selectedState),
  Body: (selectedState) => getBodySvg(selectedState),
  Eyes: (selectedState) => getEyesSvg(selectedState),
  Gestures: (selectedState) => getGesturesSvg(selectedState),
  Glasses: (selectedState) => getGlassesSvg(selectedState),
  Hair: (selectedState) => getHair(selectedState),
  Lips: (selectedState) => getLipsSvg(selectedState),
  Nose: (selectedState) => getNoseSVG(selectedState),
  'Background Color': (selectedState) =>
    ['ffc700', '9747ff', 'f24e1e', '699bf7', '0fa958', '000000'].concat(
      selectedState ?? []
    ),
};
