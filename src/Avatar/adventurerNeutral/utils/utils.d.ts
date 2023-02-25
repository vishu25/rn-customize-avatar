import {SkSVG} from '@shopify/react-native-skia';
import {AdventurerNeutralType, Item} from './types.js';

/**
 * Returns the default avatar as a string.
 * @return {string} The default avatar.
 * @param {string} [setDefaultAvatar] The default visible avatar.
 */
declare const getDefaultAvatar: (setDefaultAvatar?: AdventurerNeutralType) => string;

/**
 * Returns the default avatar as a string.
 * @return {string} The default avatar.
 * @param {string} [setDefaultAvatar] The default visible avatar.
 */
declare const createOwnAvatar: (avatarStyle?: AdventurerNeutralType) => SkSVG;

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
 * @param {AdventurerNeutralType} [selectedStyle] The selected style.
 * @param {string} [color] The color of the mouth.
 * @return {Array<Item>} The mouth SVG.
 */
declare const getMouthSvg: (selectedStyle?: AdventurerNeutralType, color?: string) => Array<Item>;

/**
 * Returns the eyes SVG based on the selected style and color.
 * @param {AdventurerNeutralType} [selectedStyle] The selected style.
 * @param {string} [color] The color of the eyes.
 * @return {Array<Item>} The eyes SVG.
 */
declare const getEyesSvg: (selectedStyle?: AdventurerNeutralType, color?: string) => Array<Item>;

/**
 * Returns the eyebrows SVG based on the selected style and color.
 * @param {AdventurerNeutralType} [selectedStyle] The selected style.
 * @param {string} [color] The color of the eyebrows.
 * @return {Array<Item>} The eyebrows SVG.
 */
declare const getEyeBrowsSvg: (selectedStyle?: AdventurerNeutralType, color?: string) => Array<Item>;

type Options = {
  Eyes: (selectedState?: AdventurerNeutralType) => Array<Item>;
  Mouth: (selectedState?: AdventurerNeutralType) => Array<Item>;
  Eyebrows: (selectedState?: AdventurerNeutralType) => Array<Item>;
  Glasses: (selectedState?: AdventurerNeutralType) => Array<Item>;
  'Background Color': (selectedState?: Array<string>) => Array<string>;
};
export const OPTIONS: Options;

export {getDefaultAvatar, getListOfOptions, getSkinTon, AdventurerNeutralType, getMouthSvg, getEyesSvg, getEyeBrowsSvg, getFacialHair, createOwnAvatar};
