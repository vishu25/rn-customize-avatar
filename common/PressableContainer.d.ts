import {StyleProp, ViewStyle} from 'react-native';

export interface PressableContainerProps {
  onPressCancel: () => void;
  onPressDone: () => void;
  cancelBtnStyle?: StyleProp<ViewStyle>;
  doneBtnStyle?: StyleProp<ViewStyle>;
}

declare const PressableContainer: React.FC<PressableContainerProps>;

export {PressableContainer};
