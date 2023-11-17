import {FlexAlignType} from 'react-native';

export type CustomDimentions = {
  p?: number | undefined;
  pl?: number | undefined;
  pt?: number | undefined;
  pr?: number | undefined;
  pb?: number | undefined;
  ph?: number | undefined;
  pv?: number | undefined;
  m?: number | undefined;
  ml?: number | undefined;
  mt?: number | undefined;
  mr?: number | undefined;
  mb?: number | undefined;
  mh?: number | undefined;
  mv?: number | undefined;
  bw?: number | undefined;
  br?: number | undefined;
  width?: any | undefined;
  height?: any | undefined;
  flex?: number | undefined;
  center?: boolean | undefined;
  borderColor?: string | undefined;
  align?: FlexAlignType | undefined;
};

export type CustomTextProps = {
  textColor?: string | undefined;
  bgColor?: string | undefined;
  h1?: boolean | undefined;
  h2?: boolean | undefined;
  h3?: boolean | undefined;
  h4?: boolean | undefined;
  textSize?: number | undefined;
  custFamily?: string | undefined;

  weight?:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900'
    | undefined;
};

export type CustomTextInputProps = {
  label: string | undefined;
  required?: boolean | undefined;
  borderWidth?: number | undefined;
};

export type CustomViewProps = {
  flex?: number | undefined;
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse' | undefined;
  column?: boolean | undefined;
  align?: FlexAlignType | undefined;
  justify?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | undefined;
  center?: boolean | undefined;
  boxshadow?: true | undefined;
};

export type CustomButtonProps = {
  activeOpacity?: number | undefined;
  buttonTitle: string | undefined;
  color?: string | undefined;
  borderRadius?: number | undefined;
};
