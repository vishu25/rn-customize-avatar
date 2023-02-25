import {SkSVG} from '@shopify/react-native-skia';
import {AvatarsTypes, Item} from './types.js';

/**
 * Returns the default avatar as a string.
 * @return {string} The default avatar.
 * @param {string} [setDefaultAvatar] The default visible avatar.
 */
declare const getDefaultAvatar: (setDefaultAvatar?: AvatarsTypes) => string;

/**
 * Returns the default avatar as a string.
 * @return {string} The default avatar.
 * @param {string} [setDefaultAvatar] The default visible avatar.
 */
declare const createOwnAvatar: (avatarStyle?: AvatarsTypes) => SkSVG;

/**
 * Returns a list of options as an array of strings.
 * @return {Array<string>} The list of options.
 */
declare const getListOfOptions: () => Array<string>;

/**
 * Returns the skin tone as an array of strings.
 * @return {Array<string>} The skin tone.
 */
declare const getSkinTon: () => Array<string>;

/**
 * Returns the mouth SVG based on the selected style and color.
 * @param {AvatarsTypes} [selectedStyle] The selected style.
 * @param {string} [color] The color of the mouth.
 * @return {Array<Item>} The mouth SVG.
 */
declare const getMouthSvg: (selectedStyle?: AvatarsTypes, color?: string) => Array<Item>;

/**
 * Returns the eyes SVG based on the selected style and color.
 * @param {AvatarsTypes} [selectedStyle] The selected style.
 * @param {string} [color] The color of the eyes.
 * @return {Array<Item>} The eyes SVG.
 */
declare const getEyesSvg: (selectedStyle?: AvatarsTypes, color?: string) => Array<Item>;

/**
 * Returns the clothing SVG based on the selected style and color.
 * @param {AvatarsTypes} [selectedStyle] The selected style.
 * @param {string} [color] The color of the clothing.
 * @return {Array<Item>} The clothing SVG.
 */
declare const getClothingSvg: (selectedStyle?: AvatarsTypes, color?: string) => Array<Item>;

/**
 * Returns the clothing graphic SVG based on the selected style and color.
 * @param {AvatarsTypes} [selectedStyle] The selected style.
 * @param {string} [color] The color of the clothing graphics.
 * @return {Array<Item>} The clothing graphics SVG.
 */
declare const getClothingGraphicsSvg: (selectedStyle?: AvatarsTypes, color?: string) => Array<Item>;

/**
 * Returns the accessories SVG based on the selected style and color.
 * @param {AvatarsTypes} [selectedStyle] The selected style.
 * @param {string} [color] The color of the accessories.
 * @return {Array<Item>} The accessories SVG.
 */
declare const getAccessoriesSvg: (selectedStyle?: AvatarsTypes, color?: string) => Array<Item>;

/**
 * Returns the eyebrows SVG based on the selected style and color.
 * @param {AvatarsTypes} [selectedStyle] The selected style.
 * @param {string} [color] The color of the eyebrows.
 * @return {Array<Item>} The eyebrows SVG.
 */
declare const getEyeBrowsSvg: (selectedStyle?: AvatarsTypes, color?: string) => Array<Item>;

/**
 * Returns the facial hair SVG based on the selected style and color.
 * @param {AvatarsTypes} [selectedStyle] The selected style.
 * @param {string} [color] The color of the facial hair.
 * @return {Array<Item>} The facial hai SVG.
 */
declare const getFacialHair: (selectedStyle?: AvatarsTypes, color?: string) => Array<Item>;

/**
 * Returns the top SVG based on the selected style and color.
 * @param {AvatarsTypes} [selectedStyle] The selected style.
 * @param {string} [color] The color of the top.
 * @return {Array<Item>} The top SVG.
 */
declare const getTop: (selectedStyle?: AvatarsTypes, color?: string) => Array<Item>;

type Options = {
  Top: (selectedState?: AvatarsTypes) => Array<Item>;
  Eyes: (selectedState?: AvatarsTypes) => Array<Item>;
  Mouth: (selectedState?: AvatarsTypes) => Array<Item>;
  Eyebrows: (selectedState?: AvatarsTypes) => Array<Item>;
  'Hair Color': (selectedState?: AvatarsTypes) => Array<string>;
  'Hat Color': (selectedState?: AvatarsTypes) => Array<string>;
  'Facial Hair': (selectedState?: AvatarsTypes) => Array<string>;
  'Facial Hair Color': (selectedState?: AvatarsTypes) => Array<string>;
  Accessories: (selectedState?: AvatarsTypes) => Array<Item>;
  'Clothing Graphic': (selectedState?: AvatarsTypes) => Array<Item>;
  'Accessories Color': (selectedState?: AvatarsTypes) => Array<string>;
  Clothing: (selectedState?: AvatarsTypes) => Array<Item>;
  'Clothes Color': (selectedState?: AvatarsTypes) => Array<string>;
  'Background Color': (selectedState?: AvatarsTypes) => Array<string>;
};
export const OPTIONS: Options;

export {
  getDefaultAvatar,
  getListOfOptions,
  getSkinTon,
  AvatarsTypes,
  getMouthSvg,
  getEyesSvg,
  getClothingSvg,
  getClothingGraphicsSvg,
  getAccessoriesSvg,
  getEyeBrowsSvg,
  getFacialHair,
  getTop,
  createOwnAvatar,
};
