import {PressableProps, StyleProp, ViewStyle} from 'react-native';
import {
  CustomButtonProps,
  CustomDimentions,
  CustomViewProps,
} from '../types/types';

export interface AppButtonProps
  extends PressableProps,
    CustomViewProps,
    CustomDimentions,
    CustomButtonProps {
  style?: StyleProp<ViewStyle>;
  children?: JSX.Element | JSX.Element[] | string | any;
}
