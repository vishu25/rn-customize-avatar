import {createAvatar} from '@dicebear/core';
import * as avataaars from '@dicebear/avataaars';
import {Skia} from '@shopify/react-native-skia';
import {schema} from './schema';

const defaultAvatar = {
  seed: 'Bella',
  flip: true,
  radius: 5,
  backgroundColor: ['65c9ff', 'ffd5dc'],
  backgroundType: ['solid'],
  mouth: ['smile'],
  skinColor: ["d08b5b"],
};

export const getDefaultAvatar = setDefaultAvatar => {
  return createAvatar(avataaars, {...defaultAvatar, ...setDefaultAvatar}).toString();
};

export const getListOfOptions = () => {
  return [
    'Skin Color',
    'Clothing',
    'Mouth',
    'Eyes',
    'Eyebrows',
    'Top',
    'Hair Color',
    'Facial Hair',
    'Facial Hair Color',
    'Accessories',
    'Accessories Color',
    'Clothing Graphic',
    'Clothes Color',
    'Hat Color',
    'Background Color',
  ];
};

export const createOwnAvatar = avatarStyle => {
  return Skia.SVG.MakeFromString(createAvatar(avataaars, {...avatarStyle}).toString());
};

export const getSkinTon = userChooseColor => {
  return schema.properties.skinColor.default.concat(userChooseColor ?? []);
};

export const getMouthSvg = (selectedStyle, _color) => {
  return schema.properties.mouth.default.map(key => {
    return {
      svg: Skia.SVG.MakeFromString(
        createAvatar(avataaars, {
          ...defaultAvatar,
          ...selectedStyle,
          mouth: [key],
        }).toString(),
      ),
      value: key,
    };
  });
};

export const getEyesSvg = (selectedStyle, _color) => {
  return schema.properties.eyes.default.map(key => {
    return {
      svg: Skia.SVG.MakeFromString(
        createAvatar(avataaars, {
          ...defaultAvatar,
          ...selectedStyle,
          eyes: [key],
        }).toString(),
      ),
      value: key,
    };
  });
};

export const getClothingSvg = (selectedStyle, _color) => {
  return schema.properties.clothing.default.map(key => {
    return {
      svg: Skia.SVG.MakeFromString(
        createAvatar(avataaars, {
          ...defaultAvatar,
          ...selectedStyle,
          clothing: [key],
        }).toString(),
      ),
      value: key,
    };
  });
};

export const getClothingGraphicsSvg = (selectedStyle, _color) => {
  return schema.properties.clothingGraphic.default.map(key => {
    return {
      svg: Skia.SVG.MakeFromString(
        createAvatar(avataaars, {
          ...defaultAvatar,
          ...selectedStyle,
          clothingGraphic: [key],
        }).toString(),
      ),
      value: key,
    };
  });
};

export const getAccessoriesSvg = (selectedStyle, _color) => {
  return schema.properties.accessories.default.map(key => {
    return {
      svg: Skia.SVG.MakeFromString(
        createAvatar(avataaars, {
          ...defaultAvatar,
          ...selectedStyle,
          backgroundType: ['solid'],
          accessories: [key],
          accessoriesProbability: 100,
        }).toString(),
      ),
      value: key,
    };
  });
};

export const getEyeBrowsSvg = (selectedStyle, _color) => {
  return schema.properties.eyebrows.default.map(key => {
    return {
      svg: Skia.SVG.MakeFromString(
        createAvatar(avataaars, {
          ...defaultAvatar,
          ...selectedStyle,
          eyebrows: [key],
        }).toString(),
      ),
      value: key,
    };
  });
};

export const getFacialHair = (selectedStyle, _color) => {
  return schema.properties.facialHair.default.map(key => {
    return {
      svg: Skia.SVG.MakeFromString(
        createAvatar(avataaars, {
          ...defaultAvatar,
          ...selectedStyle,
          facialHairProbability: 100,
          facialHair: [key],
        }).toString(),
      ),
      value: key,
    };
  });
};

export const getTop = (selectedStyle, _color) => {
  return schema.properties.top.default.map(key => {
    return {
      svg: Skia.SVG.MakeFromString(
        createAvatar(avataaars, {
          ...defaultAvatar,
          ...selectedStyle,
          top: [key],
        }).toString(),
      ),
      value: key,
    };
  });
};

export const OPTIONS = {
  'Skin Color': skinColor => getSkinTon(skinColor),
  Eyes: selectedState => getEyesSvg(selectedState),
  Mouth: selectedState => getMouthSvg(selectedState),
  Eyebrows: selectedState => getEyeBrowsSvg(selectedState),
  Top: selectedState => getTop(selectedState),
  'Hair Color': hairColor => schema?.properties.hairColor.default.concat(hairColor ?? []),
  'Hat Color': hatColor => schema?.properties.hatColor.default.concat(hatColor ?? []),
  'Facial Hair': selectedState => getFacialHair(selectedState),
  'Facial Hair Color': facialHairColor => schema?.properties.facialHairColor.default.concat(facialHairColor ?? []),
  Accessories: selectedState => getAccessoriesSvg(selectedState),
  'Clothing Graphic': selectedState => getClothingGraphicsSvg(selectedState),
  'Accessories Color': accessoriesColor => schema?.properties.accessoriesColor.default.concat(accessoriesColor ?? []),
  Clothing: selectedState => getClothingSvg(selectedState),
  'Clothes Color': clothesColor => schema?.properties.clothesColor.default.concat(clothesColor ?? []),
  'Background Color': backgroundColor => schema?.properties.clothesColor.default.concat(backgroundColor ?? []),
};
