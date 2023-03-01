import {SkSVG} from '@shopify/react-native-skia';
import {MicahType, Item} from './types.js';

/**
 * Returns the default avatar as a string.
 * @return {string} The default avatar.
 * @param {string} [setDefaultAvatar] The default visible avatar.
 */
declare const getDefaultAvatar: (setDefaultAvatar?: MicahType) => string;

/**
Returns a custom SVG for creating a user's own avatar.
@param {string} [avatarStyle] The selected style for the avatar.
@return {SkSVG} The custom SVG for the avatar.
*/
declare const createOwnAvatar: (avatarStyle?: MicahType) => SkSVG;

/**
Returns a list of options as an array of strings.
@return {Array<string>} The list of options.
*/
declare const getListOfOptions: () => Array<string>;

/**
Returns the mouth SVG based on the selected style and color.
@param {MicahType} [selectedStyle] The selected style.
@param {string} [color] The color of the mouth.
@return {Array<Item>} The mouth SVG.
*/
declare const getMouthSvg: (selectedStyle?: MicahType, color?: string) => Array<Item>;
/**

Returns the eyes SVG based on the selected style and color.
@param {MicahType} [selectedStyle] The selected style.
@param {string} [color] The color of the eyes.
@return {Array<Item>} The eyes SVG.
*/
declare const getEyesSvg: (selectedStyle?: MicahType, color?: string) => Array<Item>;

/**
Returns the beard SVG based on the selected style and color.
@param {MicahType} [selectedStyle] The selected style.
@param {string} [color] The color of the beard.
@return {Array<Item>} The beard SVG.
*/
declare const getBeardSvg: (selectedStyle?: MicahType, color?: string) => Array<Item>;

/**
Returns the earrings SVG based on the selected style and color.
@param {MicahType} [selectedStyle] The selected style.
@param {string} [color] The color of the earrings.
@return {Array<Item>} The earrings SVG.
*/
declare const getEarringsSvg: (selectedStyle?: MicahType, color?: string) => Array<Item>;

/**
Returns the accessories SVG based on the selected style and color.
@param {MicahType} [selectedStyle] The selected style.
@param {string} [color] The color of the accessories.
@return {Array<Item>} The accessories SVG.
*/
declare const getFrecklesSvg: (selectedStyle?: MicahType, color?: string) => Array<Item>;

/**
Returns the eyebrows SVG based on the selected style and color.
@param {MicahType} [selectedStyle] The selected style.
@param {string} [color] The color of the eyebrows.
@return {Array<Item>} The eyebrows SVG.
*/
declare const getEyeBrowsSvg: (selectedStyle?: MicahType, color?: string) => Array<Item>;

/**
Returns the glasses SVG based on the selected style and color.
@param {MicahType} [selectedStyle] The selected style.
@param {string} [color] The color of the glasses.
@return {Array<Item>} The glasses SVG.
*/
declare const getGlasses: (selectedStyle?: MicahType, color?: string) => Array<Item>;

/**
 * Returns the top SVG based on the selected style and color.
 * @param {MicahType} [selectedStyle] The selected style.
 * @param {string} [color] The color of the hair.
 * @return {Array<Item>} The mouth SVG.
 */
declare const getHair: (selectedStyle?: MicahType, color?: string) => Array<Item>;

/**
 * Returns the top SVG based on the selected style and color.
 * @param {MicahType} [selectedStyle] The selected style.
 * @param {string} [color] The color of the nose.
 * @return {Array<Item>} The mouth SVG.
 */

declare const getNose: (selectedStyle?: MicahType, color?: string) => Array<Item>;

/**
 * Returns the top SVG based on the selected style and color.
 * @param {MicahType} [selectedStyle] The selected style.
 * @param {string} [color] The color of the accessories.
 * @return {Array<Item>} The mouth SVG.
 */
declare const getHairAccessories: (selectedStyle?: MicahType, color?: string) => Array<Item>;

/**
 * Returns the top SVG based on the selected style and color.
 * @param {MicahType} [selectedStyle] The selected style.
 * @param {string} [color] The color of the head.
 * @return {Array<Item>} The mouth SVG.
 */
declare const getHead: (selectedStyle?: MicahType, color?: string) => Array<Item>;

/**
 * Returns the background colors as an array of strings.
 * @return {Array<string>} The skin tone.
 */
declare const getBackgroundColor: (userChooseColor?: Array<string>) => Array<string>;

/**
 * Returns the skin tone as an array of strings.
 * @return {Array<string>} The skin tone.
 */
declare const getBaseColor: (userChooseColor?: Array<string>) => Array<string>;

type Options = {
  'Base Color': (selectedState?: Array<string>) => Array<string>;
  Mouth: (selectedState?: MicahType) => Array<Item>;
  'Mouth Color': (selectedState?: Array<string>) => Array<string>;
  Nose: (selectedState?: MicahType) => Array<Item>;
  'Nose Color': (selectedState?: Array<string>) => Array<string>;
  Eyes: (selectedState?: MicahType) => Array<Item>;
  'Eyes Color': (selectedState?: Array<string>) => Array<string>;
  Head: (selectedState?: Array<string>) => Array<string>;
  Hair: (selectedState?: MicahType) => Array<Item>;
  'Hair Color': (selectedState?: Array<string>) => Array<string>;
  'Hair Accessories': (selectedState?: MicahType) => Array<Item>;
  'Hair Accessories Color': (selectedState?: Array<string>) => Array<string>;
  Beard: (selectedState?: Array<string>) => Array<string>;
  Earrings: (selectedState?: MicahType) => Array<Item>;
  'Earrings Color': (selectedState?: Array<string>) => Array<string>;
  Freckles: (selectedState?: MicahType) => Array<Item>;
  'Freckles Color': (selectedState?: Array<string>) => Array<string>;
  Glasses: (selectedState?: MicahType) => Array<Item>;
  'Glasses Color': (selectedState?: Array<string>) => Array<string>;
  'Background Color': (selectedState?: Array<string>) => Array<string>;
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
  MicahType,
  getBaseColor,
};
