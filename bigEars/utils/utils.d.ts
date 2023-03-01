import {SkSVG} from '@shopify/react-native-skia';
import {BigEarsType, Item} from './types.js';

/**
 * Returns the default avatar as a string.
 * @return {string} The default avatar.
 * @param {string} [setDefaultAvatar] The default visible avatar.
 */
declare const getDefaultAvatar: (setDefaultAvatar?: BigEarsType) => string;

/**
 * Returns the default avatar as a string.
 * @return {string} The default avatar.
 * @param {string} [setDefaultAvatar] The default visible avatar.
 */
declare const createOwnAvatar: (avatarStyle?: BigEarsType) => SkSVG;

/**
 * Returns a list of options as an array of strings.
 * @return {Array<string>} The list of options.
 */
declare const getListOfOptions: () => Array<string>;

/**
 * Returns the skin tone as an array of strings.
 * @return {Array<string>} The skin tone.
 */
declare const getSkinTon: (userColor?: Array<string>) => Array<string>;

/**
 * Returns the mouth SVG based on the selected style and color.
 * @param {BigEarsType} [selectedStyle] The selected style.
 * @param {string} [color] The color of the mouth.
 * @return {Array<Item>} The mouth SVG.
 */
declare const getMouthSvg: (selectedStyle?: BigEarsType, color?: string) => Array<Item>;

/**
 * Returns the eyes SVG based on the selected style and color.
 * @param {BigEarsType} [selectedStyle] The selected style.
 * @param {string} [color] The color of the eyes.
 * @return {Array<Item>} The eyes SVG.
 */
declare const getEyesSvg: (selectedStyle?: BigEarsType, color?: string) => Array<Item>;

/**
 * Returns the ears SVG based on the selected style and color.
 * @param {BigEarsType} [selectedStyle] The selected style.
 * @param {string} [color] The color of the ears.
 * @return {Array<Item>} The ears SVG.
 */
declare const getEarsSvg: (selectedStyle?: BigEarsType, color?: string) => Array<Item>;

/**
 * Returns the face SVG based on the selected style and color.
 * @param {BigEarsType} [selectedStyle] The selected style.
 * @param {string} [color] The color of the face.
 * @return {Array<Item>} The face SVG.
 */
declare const getFaceSvg: (selectedStyle?: BigEarsType, color?: string) => Array<Item>;

/**
 * Returns the sideBurn SVG based on the selected style and color.
 * @param {BigEarsType} [selectedStyle] The selected style.
 * @param {string} [color] The color of the sideBurn.
 * @return {Array<Item>} The sideBurn SVG.
 */
declare const getSideBurnSvg: (selectedStyle?: BigEarsType, color?: string) => Array<Item>;

/**
 * Returns the facial hair SVG based on the selected style and color.
 * @param {BigEarsType} [selectedStyle] The selected style.
 * @param {string} [color] The color of the facial hair.
 * @return {Array<Item>} The facial hai SVG.
 */
declare const getFacialHair: (selectedStyle?: BigEarsType, color?: string) => Array<Item>;

/**
 * Returns the nose SVG based on the selected style and color.
 * @param {BigEarsType} [selectedStyle] The selected style.
 * @param {string} [color] The color of the nose.
 * @return {Array<Item>} The nose SVG.
 */
declare const getNoseSvg: (selectedStyle?: BigEarsType, color?: string) => Array<Item>;

/**
 * Returns the hair SVG based on the selected style and color.
 * @param {BigEarsType} [selectedStyle] The selected style.
 * @param {string} [color] The color of the hair.
 * @return {Array<Item>} The hair SVG.
 */
declare const getHairSvg: (selectedStyle?: BigEarsType, color?: string) => Array<Item>;

/**
 * Returns the cheeks SVG based on the selected style and color.
 * @param {BigEarsType} [selectedStyle] The selected style.
 * @param {string} [color] The color of the cheeks.
 * @return {Array<Item>} The cheeks SVG.
 */
declare const getCheeksSvg: (selectedStyle?: BigEarsType, color?: string) => Array<Item>;

type Options = {
  Eyes: (selectedState?: BigEarsType) => Array<Item>;
  Mouth: (selectedState?: BigEarsType) => Array<Item>;
  Ear: (selectedState?: BigEarsType) => Array<Item>;
  Hair: (selectedState?: BigEarsType) => Array<Item>;
  Face: (selectedState?: BigEarsType) => Array<Item>;
  Nose: (selectedState?: BigEarsType) => Array<Item>;
  Cheek: (selectedState?: BigEarsType) => Array<Item>;
  'Front Hair': (selectedState?: BigEarsType) => Array<Item>;
  'Side Burn': (selectedState?: BigEarsType) => Array<Item>;
  'Background Color': (selectedState?: BigEarsType) => Array<string>;
  'Skin Color': (selectedState?: Array<string>) => Array<string>;
  'Hair Color': (selectedState?: Array<string>) => Array<string>;
};
export const OPTIONS: Options;

export {
  getNoseSvg,
  getSideBurnSvg,
  getCheeksSvg,
  getDefaultAvatar,
  getListOfOptions,
  getSkinTon,
  BigEarsType,
  getMouthSvg,
  getEyesSvg,
  getFacialHair,
  createOwnAvatar,
  getFaceSvg,
  getHairSvg,
};
