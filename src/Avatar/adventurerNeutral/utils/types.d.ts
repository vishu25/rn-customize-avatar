import {SkSVG} from '@shopify/react-native-skia';

export interface AdventurerNeutralType {
  eyes?: (
    | 'variant26'
    | 'variant25'
    | 'variant24'
    | 'variant23'
    | 'variant22'
    | 'variant21'
    | 'variant20'
    | 'variant19'
    | 'variant18'
    | 'variant17'
    | 'variant16'
    | 'variant15'
    | 'variant14'
    | 'variant13'
    | 'variant12'
    | 'variant11'
    | 'variant10'
    | 'variant09'
    | 'variant08'
    | 'variant07'
    | 'variant06'
    | 'variant05'
    | 'variant04'
    | 'variant03'
    | 'variant02'
    | 'variant01'
  )[];
  eyebrows?: (
    | 'variant10'
    | 'variant09'
    | 'variant08'
    | 'variant07'
    | 'variant06'
    | 'variant05'
    | 'variant04'
    | 'variant03'
    | 'variant02'
    | 'variant01'
    | 'variant15'
    | 'variant14'
    | 'variant13'
    | 'variant12'
    | 'variant11'
  )[];
  mouth?: (
    | 'variant30'
    | 'variant29'
    | 'variant28'
    | 'variant27'
    | 'variant26'
    | 'variant25'
    | 'variant24'
    | 'variant23'
    | 'variant22'
    | 'variant21'
    | 'variant20'
    | 'variant19'
    | 'variant18'
    | 'variant17'
    | 'variant16'
    | 'variant15'
    | 'variant14'
    | 'variant13'
    | 'variant12'
    | 'variant11'
    | 'variant10'
    | 'variant09'
    | 'variant08'
    | 'variant07'
    | 'variant06'
    | 'variant05'
    | 'variant04'
    | 'variant03'
    | 'variant02'
    | 'variant01'
  )[];
  glasses?: ('variant01' | 'variant02' | 'variant03' | 'variant04' | 'variant05')[];
  glassesProbability?: number;
  backgroundColor?: string[];
}

export interface Item {
  svg: SkSVG;
  value: string;
}
