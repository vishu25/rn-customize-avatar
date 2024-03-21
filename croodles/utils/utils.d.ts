import {SkSVG} from '@shopify/react-native-skia';
import {CroodlesTypes, Item} from './types.js';

/**
 * Returns the default avatar as a string.
 * @return {string} The default avatar.
 * @param {string} [setDefaultAvatar] The default visible avatar.
 */
declare const getDefaultAvatar: (setDefaultAvatar?: CroodlesTypes) => string;

/**
Returns a custom SVG for creating a user's own avatar.
@param {string} [avatarStyle] The selected style for the avatar.
@return {SkSVG} The custom SVG for the avatar.
*/
declare const createOwnAvatar: (avatarStyle?: CroodlesTypes) => SkSVG;

/**
Returns a list of options as an array of strings.
@return {Array<string>} The list of options.
*/
declare const getListOfOptions: () => Array<string>;

/**
Returns the mouth SVG based on the selected style and color.
@param {CroodlesTypes} [selectedStyle] The selected style.
@param {string} [color] The color of the mouth.
@return {Array<Item>} The mouth SVG.
*/
declare const getMouthSvg: (selectedStyle?: CroodlesTypes, color?: string) => Array<Item>;
/**

Returns the eyes SVG based on the selected style and color.
@param {CroodlesTypes} [selectedStyle] The selected style.
@param {string} [color] The color of the eyes.
@return {Array<Item>} The eyes SVG.
*/
declare const getEyesSvg: (selectedStyle?: CroodlesTypes, color?: string) => Array<Item>;

/**
Returns the beard SVG based on the selected style and color.
@param {CroodlesTypes} [selectedStyle] The selected style.
@param {string} [color] The color of the beard.
@return {Array<Item>} The beard SVG.
*/
declare const getBeardSvg: (selectedStyle?: CroodlesTypes, color?: string) => Array<Item>;


/**
 * Returns the top SVG based on the selected style and color.
 * @param {CroodlesTypes} [selectedStyle] The selected style.
 * @param {string} [color] The color of the hair.
 * @return {Array<Item>} The mouth SVG.
 */
declare const getHair: (selectedStyle?: CroodlesTypes, color?: string) => Array<Item>;


/**
 * Returns the top SVG based on the selected style and color.
 * @param {CroodlesTypes} [selectedStyle] The selected style.
 * @param {string} [color] The color of the head.
 * @return {Array<Item>} The mouth SVG.
 */
declare const getFaceSvg: (selectedStyle?: CroodlesTypes, color?: string) => Array<Item>;


/**
 * Returns the top SVG based on the selected style and color.
 * @param {CroodlesTypes} [selectedStyle] The selected style.
 * @param {string} [color] The color of the head.
 * @return {Array<Item>} The mouth SVG.
 */
declare const getMustachesSvg: (selectedStyle?: CroodlesTypes, color?: string) => Array<Item>;

/**
 * Returns the top SVG based on the selected style and color.
 * @param {CroodlesTypes} [selectedStyle] The selected style.
 * @param {string} [color] The color of the head.
 * @return {Array<Item>} The mouth SVG.
 */
declare const getTopSvg: (selectedStyle?: CroodlesTypes, color?: string) => Array<Item>;


/**
 * Returns the top SVG based on the selected style and color.
 * @param {CroodlesTypes} [selectedStyle] The selected style.
 * @param {string} [color] The color of the head.
 * @return {Array<Item>} The mouth SVG.
 */
declare const getHairColor: (selectedStyle?: CroodlesTypes, color?: string) => Array<Item>;



type Options = {
  Mouth: (selectedState?: CroodlesTypes) => Array<Item>;
  Nose: (selectedState?: CroodlesTypes) => Array<Item>;
  Eyes: (selectedState?: CroodlesTypes) => Array<Item>;
  Hair: (selectedState?: CroodlesTypes) => Array<Item>;
  "Top Color" : (selectedState?: CroodlesTypes) => Array<string>;
  Beard: (selectedState?: CroodlesTypes) => Array<Item>;
  Face : (selectedState?: CroodlesTypes) => Array<Item>;
  Mustache : (selectedState?: CroodlesTypes) => Array<Item>;
  Top : (selectedState?: CroodlesTypes) => Array<Item>;
  "Background Color" : (selectedState?: CroodlesTypes) => Array<string>;
};
export const OPTIONS: Options;

export {
  getDefaultAvatar,
  getListOfOptions,
  getMouthSvg,
  getEyesSvg,
  createOwnAvatar,
  getBeardSvg,
  getHair,
  getFaceSvg,
  getMustachesSvg,
  getTopSvg,
  getHairColor,
  CroodlesTypes,
};
