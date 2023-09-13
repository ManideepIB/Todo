import {StyleProp, TextInputProps, TextStyle} from 'react-native';
import {CustomDimentions, CustomTextProps} from '../types/types';

export interface CustumTextInputProps
  extends TextInputProps,
    CustomDimentions,
    CustomTextProps {
  style?: StyleProp<TextStyle>;
  label: string | undefined;
  placeholder: string | undefined;
}
