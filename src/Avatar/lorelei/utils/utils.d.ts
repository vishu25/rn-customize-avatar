import {SkSVG} from '@shopify/react-native-skia';
import {LoreleiTypes, Item} from './types.js';

/**
 * Returns the default avatar as a string.
 * @return {string} The default avatar.
 * @param {string} [setDefaultAvatar] The default visible avatar.
 */
declare const getDefaultAvatar: (setDefaultAvatar?: LoreleiTypes) => string;

/**
Returns a custom SVG for creating a user's own avatar.
@param {string} [avatarStyle] The selected style for the avatar.
@return {SkSVG} The custom SVG for the avatar.
*/
declare const createOwnAvatar: (avatarStyle?: LoreleiTypes) => SkSVG;

/**
Returns a list of options as an array of strings.
@return {Array<string>} The list of options.
*/
declare const getListOfOptions: () => Array<string>;

/**
Returns the mouth SVG based on the selected style and color.
@param {LoreleiTypes} [selectedStyle] The selected style.
@param {string} [color] The color of the mouth.
@return {Array<Item>} The mouth SVG.
*/
declare const getMouthSvg: (selectedStyle?: LoreleiTypes, color?: string) => Array<Item>;
/**

Returns the eyes SVG based on the selected style and color.
@param {LoreleiTypes} [selectedStyle] The selected style.
@param {string} [color] The color of the eyes.
@return {Array<Item>} The eyes SVG.
*/
declare const getEyesSvg: (selectedStyle?: LoreleiTypes, color?: string) => Array<Item>;

/**
Returns the beard SVG based on the selected style and color.
@param {LoreleiTypes} [selectedStyle] The selected style.
@param {string} [color] The color of the beard.
@return {Array<Item>} The beard SVG.
*/
declare const getBeardSvg: (selectedStyle?: LoreleiTypes, color?: string) => Array<Item>;

/**
Returns the earrings SVG based on the selected style and color.
@param {LoreleiTypes} [selectedStyle] The selected style.
@param {string} [color] The color of the earrings.
@return {Array<Item>} The earrings SVG.
*/
declare const getEarringsSvg: (selectedStyle?: LoreleiTypes, color?: string) => Array<Item>;

/**
Returns the accessories SVG based on the selected style and color.
@param {LoreleiTypes} [selectedStyle] The selected style.
@param {string} [color] The color of the accessories.
@return {Array<Item>} The accessories SVG.
*/
declare const getFrecklesSvg: (selectedStyle?: LoreleiTypes, color?: string) => Array<Item>;

/**
Returns the eyebrows SVG based on the selected style and color.
@param {LoreleiTypes} [selectedStyle] The selected style.
@param {string} [color] The color of the eyebrows.
@return {Array<Item>} The eyebrows SVG.
*/
declare const getEyeBrowsSvg: (selectedStyle?: LoreleiTypes, color?: string) => Array<Item>;

/**
Returns the glasses SVG based on the selected style and color.
@param {LoreleiTypes} [selectedStyle] The selected style.
@param {string} [color] The color of the glasses.
@return {Array<Item>} The glasses SVG.
*/
declare const getGlasses: (selectedStyle?: LoreleiTypes, color?: string) => Array<Item>;

/**
 * Returns the top SVG based on the selected style and color.
 * @param {LoreleiTypes} [selectedStyle] The selected style.
 * @param {string} [color] The color of the hair.
 * @return {Array<Item>} The mouth SVG.
 */
declare const getHair: (selectedStyle?: LoreleiTypes, color?: string) => Array<Item>;

/**
 * Returns the top SVG based on the selected style and color.
 * @param {LoreleiTypes} [selectedStyle] The selected style.
 * @param {string} [color] The color of the nose.
 * @return {Array<Item>} The mouth SVG.
 */

declare const getNose: (selectedStyle?: LoreleiTypes, color?: string) => Array<Item>;

/**
 * Returns the top SVG based on the selected style and color.
 * @param {LoreleiTypes} [selectedStyle] The selected style.
 * @param {string} [color] The color of the accessories.
 * @return {Array<Item>} The mouth SVG.
 */
declare const getHairAccessories: (selectedStyle?: LoreleiTypes, color?: string) => Array<Item>;

/**
 * Returns the top SVG based on the selected style and color.
 * @param {LoreleiTypes} [selectedStyle] The selected style.
 * @param {string} [color] The color of the head.
 * @return {Array<Item>} The mouth SVG.
 */
declare const getHead: (selectedStyle?: LoreleiTypes, color?: string) => Array<Item>;

/**
 * Returns the skin tone as an array of strings.
 * @return {Array<string>} The skin tone.
 */
declare const getSkinTon: (userChooseColor: Array<string>) => Array<string>;

type Options = {
  'Skin Color': (selectedState?: LoreleiTypes) => Array<string>;
  Mouth: (selectedState?: LoreleiTypes) => Array<Item>;
  'Mouth Color': (selectedState?: LoreleiTypes) => Array<string>;
  Nose: (selectedState?: LoreleiTypes) => Array<Item>;
  'Nose Color': (selectedState?: LoreleiTypes) => Array<string>;
  Eyes: (selectedState?: LoreleiTypes) => Array<Item>;
  'Eyes Color': (selectedState?: LoreleiTypes) => Array<string>;
  Head: (selectedState?: LoreleiTypes) => Array<string>;
  Hair: (selectedState?: LoreleiTypes) => Array<Item>;
  'Hair Color': (selectedState?: LoreleiTypes) => Array<string>;
  'Hair Accessories': (selectedState?: LoreleiTypes) => Array<Item>;
  'Hair Accessories Color': (selectedState?: LoreleiTypes) => Array<string>;
  Beard: (selectedState?: LoreleiTypes) => Array<string>;
  Earrings: (selectedState?: LoreleiTypes) => Array<Item>;
  'Earrings Color': (selectedState?: LoreleiTypes) => Array<string>;
  Freckles: (selectedState?: LoreleiTypes) => Array<Item>;
  'Freckles Color': (selectedState?: LoreleiTypes) => Array<string>;
  Glasses: (selectedState?: LoreleiTypes) => Array<Item>;
  'Glasses Color': (selectedState?: LoreleiTypes) => Array<string>;
};
export const OPTIONS: Options;

export {
  getDefaultAvatar,
  getListOfOptions,
  getMouthSvg,
  getEyesSvg,
  getEyeBrowsSvg,
  createOwnAvatar,
  getBeardSvg,
  getGlasses,
  getEarringsSvg,
  getHairAccessories,
  getFrecklesSvg,
  getHead,
  getHair,
  getNose,
  LoreleiTypes,
  getSkinTon,
};
