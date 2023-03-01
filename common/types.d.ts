import {ElementListProps} from './ElementsList';
import {OptionsListProps} from './OptionsList';
import {PressableContainerProps} from './PressableContainer';

interface CommonProps
  extends Omit<OptionsListProps, 'onPress' | 'listOfElements'>,
    Omit<PressableContainerProps, 'onPressCancel' | 'onPressDone'>,
    Omit<ElementListProps, 'list' | 'onPressItem'> {
  backgroundColor?: string;
  svgWidth?: number;
  svgHeight?: number;
  onDone?: (base64: string) => void;
  onCancel?: () => void;
}
