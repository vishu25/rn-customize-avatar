import { SkSVG } from '@shopify/react-native-skia';
import { NotionistsTypes, Item } from './types.js';

/**
 * Returns the default avatar as a string.
 * @return {string} The default avatar.
 * @param {string} [setDefaultAvatar] The default visible avatar.
 */
declare const getDefaultAvatar: (setDefaultAvatar?: NotionistsTypes) => string;

/**
Returns a custom SVG for creating a user's own avatar.
@param {string} [avatarStyle] The selected style for the avatar.
@return {SkSVG} The custom SVG for the avatar.
*/
declare const createOwnAvatar: (avatarStyle?: NotionistsTypes) => SkSVG;

/**
Returns a list of options as an array of strings.
@return {Array<string>} The list of options.
*/
declare const getListOfOptions: () => Array<string>;

/**
Returns the eyes SVG based on the selected style and color.
@param {NotionistsTypes} [selectedStyle] The selected style.
@param {string} [color] The color of the eyes.
@return {Array<Item>} The eyes SVG.
*/
declare const getEyesSvg: (selectedStyle?: NotionistsTypes, color?: string) => Array<Item>;

/**
Returns the beard SVG based on the selected style and color.
@param {NotionistsTypes} [selectedStyle] The selected style.
@param {string} [color] The color of the beard.
@return {Array<Item>} The beard SVG.
*/
declare const getBeardSvg: (selectedStyle?: NotionistsTypes, color?: string) => Array<Item>;

/**
 * Returns the top SVG based on the selected style and color.
 * @param {NotionistsTypes} [selectedStyle] The selected style.
 * @param {string} [color] The color of the hair.
 * @return {Array<Item>} The mouth SVG.
 */
declare const getHairSvg: (selectedStyle?: NotionistsTypes, color?: string) => Array<Item>;

/**
 * Returns the top SVG based on the selected style and color.
 * @param {NotionistsTypes} [selectedStyle] The selected style.
 * @param {string} [color] The color of the hair.
 * @return {Array<Item>} The mouth SVG.
 */
declare const getBodySvg: (selectedStyle?: NotionistsTypes, color?: string) => Array<Item>;

/**
 * Returns the top SVG based on the selected style and color.
 * @param {NotionistsTypes} [selectedStyle] The selected style.
 * @param {string} [color] The color of the hair.
 * @return {Array<Item>} The mouth SVG.
 */
declare const getBrowsSvg: (selectedStyle?: NotionistsTypes, color?: string) => Array<Item>;

/**
 * Returns the top SVG based on the selected style and color.
 * @param {NotionistsTypes} [selectedStyle] The selected style.
 * @param {string} [color] The color of the hair.
 * @return {Array<Item>} The mouth SVG.
 */
declare const getGestureSvg: (selectedStyle?: NotionistsTypes, color?: string) => Array<Item>;

/**
 * Returns the top SVG based on the selected style and color.
 * @param {NotionistsTypes} [selectedStyle] The selected style.
 * @param {string} [color] The color of the hair.
 * @return {Array<Item>} The mouth SVG.
 */
declare const getGlassesSvg: (selectedStyle?: NotionistsTypes, color?: string) => Array<Item>;

/**
 * Returns the top SVG based on the selected style and color.
 * @param {NotionistsTypes} [selectedStyle] The selected style.
 * @param {string} [color] The color of the hair.
 * @return {Array<Item>} The mouth SVG.
 */
declare const getLipsSvg: (selectedStyle?: NotionistsTypes, color?: string) => Array<Item>;

/**
 * Returns the top SVG based on the selected style and color.
 * @param {NotionistsTypes} [selectedStyle] The selected style.
 * @param {string} [color] The color of the hair.
 * @return {Array<Item>} The mouth SVG.
 */
declare const getNoseSvg: (selectedStyle?: NotionistsTypes, color?: string) => Array<Item>;

type Options = {
  Beard: (selectedState?: NotionistsTypes) => Array<Item>;
  Body: (selectedState?: NotionistsTypes) => Array<Item>;
  Eyes: (selectedState?: NotionistsTypes) => Array<Item>;
  Gesture: (selectedState?: NotionistsTypes) => Array<Item>;
  Glasses: (selectedState?: NotionistsTypes) => Array<Item>;
  Hair: (selectedState?: NotionistsTypes) => Array<Item>;
  Lips: (selectedState?: NotionistsTypes) => Array<Item>;
  Nose: (selectedState?: NotionistsTypes) => Array<Item>;
  'Background Color': (selectedState?: NotionistsTypes) => Array<string>;
};
export const OPTIONS: Options;

export { getDefaultAvatar, getListOfOptions, createOwnAvatar, getEyesSvg, getBeardSvg, getHairSvg, getBodySvg, getBrowsSvg, getGestureSvg, getGlassesSvg, getLipsSvg, getNoseSvg, NotionistsTypes };
