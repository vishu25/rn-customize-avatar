import { createAvatar } from '@dicebear/core';
import * as croodles from '@dicebear/croodles';
import { Skia } from '@shopify/react-native-skia';
import { schema } from './schema';

const defaultAvatar = {
  face: ['variant08'],
  nose: ['variant09'],
  beard: ['variant05'],
  mouth: ['variant18'],
  top: ['variant29'],
  mustache: ['variant04'],
  eyes: ['variant16'],
  backgroundColor : ['65c9ff']
};

export const getDefaultAvatar = (setDefaultAvatar) => {
  return createAvatar(croodles, {
    ...defaultAvatar,
    ...setDefaultAvatar,
  }).toString();
};

export const getListOfOptions = () => {
  return [
    'Beard',
    'Eyes',
    'Face',
    'Mouth',
    'Mustache',
    'Nose',
    'Top',
    'Top Color',
    'Background Color'
  ];
};

export const createOwnAvatar = (avatarStyle) => {
  return Skia.SVG.MakeFromString(
    createAvatar(croodles, { ...avatarStyle }).toString()
  );
};

export const getMouthSvg = (selectedStyle) => {
  return schema.properties.mouth.default.map((key) => {
    return {
      svg: Skia.SVG.MakeFromString(
        createAvatar(croodles, {
          ...defaultAvatar,
          ...selectedStyle,
         
          mouth: [key],
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
        createAvatar(croodles, {
          ...defaultAvatar,
          ...selectedStyle,
          eyes: [key],
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
        createAvatar(croodles, {
          ...defaultAvatar,
          ...selectedStyle,
          backgroundType: ['solid'],
          beard: [key],
          beardProbability: 100,
        }).toString()
      ),
      value: key,
    };
  });
};


export const getHair = (selectedStyle) => {
  return schema.properties.top.default.map((key) => {
    return {
      svg: Skia.SVG.MakeFromString(
        createAvatar(croodles, {
          ...defaultAvatar,
          ...selectedStyle,
          top: [key],
        }).toString()
      ),
      value: key,
    };
  });
};

export const getNose = (selectedStyle) => {
  return schema.properties.nose.default.map((key) => {
    return {
      svg: Skia.SVG.MakeFromString(
        createAvatar(croodles, {
          ...defaultAvatar,
          ...selectedStyle,
          nose: [key],
        }).toString()
      ),
      value: key,
    };
  });
};

export const getFace = (selectedStyle) => {
  return schema.properties.face.default.map((key) => {
    return {
      svg: Skia.SVG.MakeFromString(
        createAvatar(croodles, {
          ...defaultAvatar,
          ...selectedStyle,
          face: [key],
        }).toString()
      ),
      value: key,
    };
  });
};

export const getMustachesSvg = (selectedStyle) => {
  return schema.properties.mustache.default.map((key) => {
    return {
      svg: Skia.SVG.MakeFromString(
        createAvatar(croodles, {
          ...defaultAvatar,
          ...selectedStyle,
          mustacheProbability : 100,
          mustache: [key],
        }).toString()
      ),
      value: key,
    };
  });
};


export const getTopSvg = (selectedStyle) => {
  return schema.properties.top.default.map((key) => {
    return {
      svg: Skia.SVG.MakeFromString(
        createAvatar(croodles, {
          ...defaultAvatar,
          ...selectedStyle,
          top: [key],
        }).toString()
      ),
      value: key,
    };
  });
};


export const getHairColor = (selectedStyle) => {
  return schema.properties.topColor.default.map((key) => {
    return {
      svg: Skia.SVG.MakeFromString(
        createAvatar(croodles, {
          ...defaultAvatar,
          ...selectedStyle,
          topColor: [key],
        }).toString()
      ),
      value: key,
    };
  });
};


export const OPTIONS = {
  Mouth: (selectedState) => getMouthSvg(selectedState),
  Nose: (selectedState) => getNose(selectedState),
  Face : (selectedState) => getFace(selectedState),
  Eyes: (selectedState) => getEyesSvg(selectedState),
  Hair: (selectedState) => getHair(selectedState),
  topColor : (selectedState) => getHairColor(selectedState),
  Beard: (selectedState) => getBeardSvg(selectedState),
  Mustache : (selectedState) => getMustachesSvg(selectedState),
  Top : (selectedState) => getTopSvg(selectedState),
  "Top Color" : (selectedState) => getHairColor(selectedState),
  "Background Color" : (selectedState) => ['ffc700', '9747ff', 'f24e1e', '699bf7', '0fa958', '000000'].concat(selectedState ?? [])
};
