import {
  TextInput as RNTextInput,
  StyleProp,
  ViewStyle,
  StyleSheet,
  TextStyle,
} from 'react-native';
import React from 'react';
import {CustumTextInputProps} from './types';

export const AppTextInput: React.FC<CustumTextInputProps> = ({
  color,
  bgColor,
  h1,
  h2,
  h3,
  h4,
  textSize,
  weight,
  p,
  pl,
  pt,
  pr,
  pb,
  ph,
  pv,
  m,
  ml,
  mt,
  mr,
  mb,
  mh,
  mv,
  br,
  bw,
  borderColor,
  width,
  height,
  flex,
  label,
  placeholder,
  style,
  ...props
}) => {
  const customInputStyles: StyleProp<TextStyle> = StyleSheet.flatten([
    color !== undefined && {color: color},
    bgColor !== undefined && {backgroundColor: bgColor},
    h1 !== undefined && {fontSize: 36, fontWeight: '800'},
    h2 !== undefined && {fontSize: 28, fontWeight: '700'},
    h3 !== undefined && {fontSize: 24, fontWeight: '600'},
    h4 !== undefined && {fontSize: 22, fontWeight: '500'},
    textSize !== undefined && {fontSize: textSize},
    weight !== undefined && {fontWeight: weight},
    p !== undefined && {padding: p},
    pl !== undefined && {paddingLeft: pl},
    pt !== undefined && {paddingTop: pt},
    pr !== undefined && {paddingRight: pr},
    pb !== undefined && {paddingBottom: pb},
    ph !== undefined && {paddingHorizontal: ph},
    pv !== undefined && {paddingVertical: pv},
    m !== undefined && {margin: m},
    ml !== undefined && {marginLeft: ml},
    mt !== undefined && {marginTop: mt},
    mr !== undefined && {marginRight: mr},
    mb !== undefined && {marginBottom: mb},
    mh !== undefined && {marginHorizontal: mh},
    mv !== undefined && {marginVertical: mv},
    br !== undefined && {borderRadius: br},
    bw !== undefined && {borderWidth: bw},
    borderColor !== undefined && {borderColor: borderColor},
    width !== undefined && {width: width},
    height !== undefined && {height: height},
    flex !== undefined && {flex: flex},
    style,
  ]);
  return (
    <RNTextInput
      placeholder={placeholder ? placeholder : label}
      style={customInputStyles}
      {...props}
    />
  );
};
