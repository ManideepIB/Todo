import {StyleProp, StyleSheet, Text, TextStyle} from 'react-native';
import React from 'react';
import {AppTextProps} from './types';
import {colors} from '../../../theme';

export const AppText: React.FC<AppTextProps> = ({
  children,
  textColor = colors.black,
  bgColor,
  custFamily,
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
  center,
  align,
  style,
  ...props
}) => {
  // console.log(custFamily, ';;;;;;;;;');
  const textStyles: StyleProp<TextStyle> = StyleSheet.flatten([
    textColor !== undefined && {color: textColor},
    bgColor !== undefined && {backgroundColor: bgColor},
    h1 !== undefined && {fontSize: 36, fontWeight: '900'},
    h2 !== undefined && {fontSize: 28, fontWeight: '600'},
    h3 !== undefined && {fontSize: 24, fontWeight: '500'},
    h4 !== undefined && {fontSize: 22, fontWeight: '400'},
    textSize !== undefined && {fontSize: textSize},
    weight !== undefined && {fontWeight: weight},
    custFamily !== undefined && {fontFamily: custFamily},
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
    center !== undefined && {textAlign: 'center'},
    style,
  ]);
  // console.log(textSize, '-----');
  return (
    <Text style={[textStyles]} {...props}>
      {children}
    </Text>
  );
};
