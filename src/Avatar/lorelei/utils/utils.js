import {createAvatar} from '@dicebear/core';
import * as lorelei from '@dicebear/lorelei';
import {Skia} from '@shopify/react-native-skia';
import {schema} from './schema';

const defaultAvatar = {
  seed: 'Bella',
  flip: false,
  radius: 5,
  mouth: ['happy01'],
  mouthColor: ['000000'],
  hair: ['variant39'],
  head: ['variant04'],
  eyes: ['variant08'],
  eyebrows: ['variant09'],
  top: ['shortCurly'],
  earrings: ['variant01'],
  nose: ['variant01'],
};

export const getDefaultAvatar = setDefaultAvatar => {
  return createAvatar(lorelei, {...defaultAvatar, ...setDefaultAvatar}).toString();
};

export const getListOfOptions = () => {
  return [
    'Skin Color',
    'Mouth',
    'Mouth Color',
    'Nose',
    'Nose Color',
    'Eyes',
    'Eyes Color',
    'Eyebrows',
    'Eyebrows Color',
    'Head',
    'Hair',
    'Hair Color',
    'Hair Accessories',
    'Hair Accessories Color',
    'Beard',
    'Earrings',
    'Earrings Color',
    'Freckles',
    'Freckles Color',
    'Glasses',
    'Glasses Color',
  ];
};

export const getSkinTon = userChooseColor => {
  return schema.properties.skinColor.default.concat(userChooseColor ?? []);
};

export const createOwnAvatar = avatarStyle => {
  return Skia.SVG.MakeFromString(createAvatar(lorelei, {...avatarStyle}).toString());
};

export const getMouthSvg = (selectedStyle, color) => {
  return schema.properties.mouth.default.map(key => {
    return {
      svg: Skia.SVG.MakeFromString(
        createAvatar(lorelei, {
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
        createAvatar(lorelei, {
          ...defaultAvatar,
          ...selectedStyle,
          eyes: [key],
        }).toString(),
      ),
      value: key,
    };
  });
};

export const getBeardSvg = (selectedStyle, color) => {
  return schema.properties.beard.default.map(key => {
    return {
      svg: Skia.SVG.MakeFromString(
        createAvatar(lorelei, {
          ...defaultAvatar,
          ...selectedStyle,
          backgroundType: ['solid'],
          beard: [key],
          beardProbability: 100,
        }).toString(),
      ),
      value: key,
    };
  });
};

export const getEarringsSvg = (selectedStyle, color) => {
  return schema.properties.earrings.default.map(key => {
    return {
      svg: Skia.SVG.MakeFromString(
        createAvatar(lorelei, {
          ...defaultAvatar,
          ...selectedStyle,
          earrings: [key],
          earringsProbability: 100,
        }).toString(),
      ),
      value: key,
    };
  });
};

export const getFrecklesSvg = (selectedStyle, color) => {
  return schema.properties.freckles.default.map(key => {
    return {
      svg: Skia.SVG.MakeFromString(
        createAvatar(lorelei, {
          ...defaultAvatar,
          ...selectedStyle,
          backgroundType: ['solid'],
          freckles: [key],
          frecklesProbability: 100,
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
        createAvatar(lorelei, {
          ...defaultAvatar,
          ...selectedStyle,
          eyebrows: [key],
        }).toString(),
      ),
      value: key,
    };
  });
};

export const getGlasses = (selectedStyle, color) => {
  return schema.properties.glasses.default.map(key => {
    return {
      svg: Skia.SVG.MakeFromString(
        createAvatar(lorelei, {
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

export const getHair = (selectedStyle, color) => {
  return schema.properties.hair.default.map(key => {
    return {
      svg: Skia.SVG.MakeFromString(
        createAvatar(lorelei, {
          ...defaultAvatar,
          ...selectedStyle,
          hair: [key],
        }).toString(),
      ),
      value: key,
    };
  });
};

export const getNose = (selectedStyle, color) => {
  return schema.properties.nose.default.map(key => {
    return {
      svg: Skia.SVG.MakeFromString(
        createAvatar(lorelei, {
          ...defaultAvatar,
          ...selectedStyle,
          nose: [key],
        }).toString(),
      ),
      value: key,
    };
  });
};

export const getHairAccessories = (selectedStyle, color) => {
  return schema.properties.hairAccessories.default.map(key => {
    return {
      svg: Skia.SVG.MakeFromString(
        createAvatar(lorelei, {
          ...defaultAvatar,
          ...selectedStyle,
          hairAccessories: [key],
        }).toString(),
      ),
      value: key,
    };
  });
};

export const getHead = (selectedStyle, color) => {
  return schema.properties.head.default.map(key => {
    return {
      svg: Skia.SVG.MakeFromString(
        createAvatar(lorelei, {
          ...defaultAvatar,
          ...selectedStyle,
          head: [key],
        }).toString(),
      ),
      value: key,
    };
  });
};

export const OPTIONS = {
  'Skin Color': _selectedState => getSkinTon(_selectedState),
  Mouth: selectedState => getMouthSvg(selectedState),
  'Mouth Color': _selectedState => schema.properties.mouthColor.default.concat(_selectedState ?? []),
  Nose: selectedState => getNose(selectedState),
  'Nose Color': _selectedState => schema.properties.noseColor.default.concat(_selectedState ?? []),
  Eyes: selectedState => getEyesSvg(selectedState),
  'Eyes Color': _selectedState => schema.properties.eyesColor.default.concat(_selectedState ?? []),
  Eyebrows: selectedState => getEyeBrowsSvg(selectedState),
  'Eyebrows Color': _selectedState => schema.properties.eyebrowsColor.default.concat(_selectedState ?? []),
  Head: selectedState => getHead(selectedState),
  Hair: selectedState => getHair(selectedState),
  'Hair Color': _selectedState => schema.properties.hairColor.default.concat(_selectedState ?? []),
  'Hair Accessories': selectedState => getHairAccessories(selectedState),
  'Hair Accessories Color': _selectedState => schema.properties.hairAccessoriesColor.default.concat(_selectedState ?? []),
  Beard: selectedState => getBeardSvg(selectedState),
  Earrings: selectedState => getEarringsSvg(selectedState),
  'Earrings Color': _selectedState => schema.properties.earringsColor.default.concat(_selectedState ?? []),
  Freckles: selectedState => getFrecklesSvg(selectedState),
  'Freckles Color': _selectedState => schema.properties.frecklesColor.default.concat(_selectedState ?? []),
  Glasses: _selectedState => getGlasses(_selectedState),
  'Glasses Color': _selectedState => schema.properties.glassesColor.default.concat(_selectedState ?? []),
};
