import {SkSVG} from '@shopify/react-native-skia';

export interface MicahType {
  base?: 'standard'[];
  mouth?: ('surprised' | 'laughing' | 'nervous' | 'smile' | 'sad' | 'pucker' | 'frown' | 'smirk')[];
  eyebrows?: ('up' | 'down' | 'eyelashesUp' | 'eyelashesDown')[];
  hair?: ('fonze' | 'mrT' | 'dougFunny' | 'mrClean' | 'dannyPhantom' | 'full' | 'turban' | 'pixie')[];
  hairProbability?: number;
  eyes?: ('eyes' | 'round' | 'eyesShadow' | 'smiling')[];
  nose?: ('curve' | 'pointed' | 'tound')[];
  ears?: ('attached' | 'detached')[];
  shirt?: ('open' | 'crew' | 'collared')[];
  earrings?: ('hoop' | 'stud')[];
  earringsProbability?: number;
  glasses?: ('round' | 'square')[];
  glassesProbability?: number;
  facialHair?: ('beard' | 'scruff')[];
  facialHairProbability?: number;
  baseColor?: string[];
  earringColor?: string[];
  eyeShadowColor?: string[];
  eyebrowsColor?: string[];
  facialHairColor?: string[];
  glassesColor?: string[];
  hairColor?: string[];
  mouthColor?: string[];
  shirtColor?: string[];
  eyesColor?: string[];
}

export interface Item {
  svg: SkSVG;
  value: string;
}
