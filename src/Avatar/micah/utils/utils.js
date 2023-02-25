import {createAvatar} from '@dicebear/core';
import * as micah from '@dicebear/micah';
import {Skia} from '@shopify/react-native-skia';
import {schema} from './schema';

try {
  require.resolve('@dicebear/micah');
} catch (e) {
  throw new Error('Missing required dependencies. Please install react and react-native.');
}

const defaultAvatar = {
  mouth: ['smile'],
  mouthColor: ['000000'],
  hair: ['fonze'],
  head: ['variant04'],
  eyes: ['round'],
  eyebrows: ['eyelashesUp'],
  top: ['shortCurly'],
  earrings: ['variant01'],
  nose: ['curve'],
  ears: ['attached'],
  shirt: ['open'],
  shirtColor: ['ff8002'],
  hairColor: ['000000'],
};

export const getDefaultAvatar = setDefaultAvatar => {
  return createAvatar(micah, {...defaultAvatar, ...setDefaultAvatar}).toString();
};

export const getListOfOptions = () => {
  return [
    'Base Color',
    'Mouth',
    'Mouth Color',
    'Nose',
    'Eyes',
    'Eyes Color',
    'Eye Shadow Color',
    'Eyebrows',
    'Eyebrows Color',
    'Ears',
    'Hair',
    'Hair Color',
    'Earrings',
    'Earring Color',
    'Facial Hair',
    'Shirt',
    'Shirt Color',
    'Glasses',
    'Glasses Color',
    'Background Color',
  ];
};

export const getBackgroundColor = userChooseColor => {
  return [
    'FFE0B2', //#light
    'FFB6C1', //# light peach
    'FFC0CB', //# pink
    'FF69B4', //# hot pink
    'FFDAB9', //# peach
    'F08080', //# light coral
  ].concat(userChooseColor ?? []);
};

export const getBaseColor = userChooseColor => {
  return schema.properties.baseColor.default.concat(userChooseColor ?? []);
};

export const createOwnAvatar = avatarStyle => {
  return Skia.SVG.MakeFromString(createAvatar(micah, {...avatarStyle}).toString());
};

export const getMouthSvg = (selectedStyle, color) => {
  return schema.properties.mouth.default.map(key => {
    return {
      svg: Skia.SVG.MakeFromString(
        createAvatar(micah, {
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
        createAvatar(micah, {
          ...defaultAvatar,
          ...selectedStyle,
          eyes: [key],
        }).toString(),
      ),
      value: key,
    };
  });
};

export const getFacialHairSvg = (selectedStyle, color) => {
  return schema.properties.facialHair.default.map(key => {
    return {
      svg: Skia.SVG.MakeFromString(
        createAvatar(micah, {
          ...defaultAvatar,
          ...selectedStyle,
          facialHair: [key],
          facialHairProbability: 100,
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
        createAvatar(micah, {
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

export const getEarsSvg = (selectedStyle, color) => {
  return schema.properties.ears.default.map(key => {
    return {
      svg: Skia.SVG.MakeFromString(
        createAvatar(micah, {
          ...defaultAvatar,
          ...selectedStyle,
          ears: [key],
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
        createAvatar(micah, {
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
        createAvatar(micah, {
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
        createAvatar(micah, {
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
    console.log('key', key);
    return {
      svg: Skia.SVG.MakeFromString(
        createAvatar(micah, {
          ...defaultAvatar,
          ...selectedStyle,
          nose: [key],
        }).toString(),
      ),
      value: key,
    };
  });
};

export const getShirt = (selectedStyle, color) => {
  return schema.properties.shirt.default.map(key => {
    return {
      svg: Skia.SVG.MakeFromString(
        createAvatar(micah, {
          ...defaultAvatar,
          ...selectedStyle,
          shirt: [key],
        }).toString(),
      ),
      value: key,
    };
  });
};

export const OPTIONS = {
  'Base Color': _selectedState => getBaseColor(_selectedState),
  Mouth: selectedState => getMouthSvg(selectedState),
  'Mouth Color': _selectedState => schema.properties.mouthColor.default.concat(_selectedState ?? []),
  Nose: selectedState => getNose(selectedState),
  Eyes: selectedState => getEyesSvg(selectedState),
  'Eyes Color': _selectedState => schema.properties.eyesColor.default.concat(_selectedState ?? []),
  'Eye Shadow Color': _selectedState => schema.properties.eyeShadowColor.default.concat(_selectedState ?? []),
  Eyebrows: selectedState => getEyeBrowsSvg(selectedState),
  'Eyebrows Color': _selectedState => schema.properties.eyebrowsColor.default.concat(_selectedState ?? []),
  Ears: selectedState => getEarsSvg(selectedState),
  Hair: selectedState => getHair(selectedState),
  'Hair Color': _selectedState => schema.properties.hairColor.default.concat(_selectedState ?? []),
  Earrings: selectedState => getEarringsSvg(selectedState),
  'Earring Color': _selectedState => schema.properties.earringColor.default.concat(_selectedState ?? []),
  'Facial Hair': selectedState => getFacialHairSvg(selectedState),
  Shirt: selectedState => getShirt(selectedState),
  'Shirt Color': _selectedState => schema.properties.shirtColor.default.concat(_selectedState ?? []),
  Glasses: _selectedState => getGlasses(_selectedState),
  'Glasses Color': _selectedState => schema.properties.glassesColor.default.concat(_selectedState ?? []),
  'Background Color': _selectedState => getBackgroundColor(_selectedState),
};
