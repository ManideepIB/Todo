import {StyleProp, TextInputProps, TextStyle} from 'react-native';
import {
  CustomDimentions,
  CustomTextProps,
  CustomTextInputProps,
} from '../types/types';

export interface AppTextInputProps
  extends TextInputProps,
    CustomDimentions,
    CustomTextProps,
    CustomTextInputProps {
  style?: StyleProp<TextStyle>;
}
