import {SkSVG} from '@shopify/react-native-skia';

export interface CroodlesTypes {
    face?: (
      | 'variant08'
      | 'variant07'
      | 'variant06'
      | 'variant05'
      | 'variant04'
      | 'variant03'
      | 'variant02'
      | 'variant01'
    )[];
    nose?: (
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
    beard?: (
      | 'variant05'
      | 'variant04'
      | 'variant03'
      | 'variant02'
      | 'variant01'
    )[];
    beardProbability?: number;
    mouth?: (
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
    top?: (
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
    mustache?: (
      | 'variant04'
      | 'variant03'
      | 'variant02'
      | 'variant01'
    )[];
    mustacheProbability?: number;
    eyes?: (
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
    topColor?: string[];
    baseColor?: string[];
}

export interface Item {
  svg: SkSVG;
  value: string;
}

