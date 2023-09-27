import {
  Pressable,
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {AppButtonProps} from './types';
import {AppText} from '../Text';

export const AppButton: React.FC<AppButtonProps> = props => {
  const {
    flex,
    direction = 'row',
    align = 'center',
    justify,
    color,
    buttonTitle,
    borderRadius = 15,
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
    boxshadow,
    activeOpacity = 0.5,
    style,
    children,
    ...restProps
  } = props;
  const customButtonStyles: StyleProp<ViewStyle> = StyleSheet.flatten([
    flex !== undefined && {flex: flex},
    direction && {flexDirection: direction},
    color !== undefined && {backgroundColor: color},
    align !== undefined && {alignItems: align},
    justify !== undefined && {justifyContent: justify},
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
    width !== undefined && {width: width},
    height !== undefined && {height: height},
    borderColor !== undefined && {borderColor: borderColor},
    center && {
      justifyContent: 'center',
      alignSelf: 'center',
    },
    boxshadow !== undefined && styles.boxshadow,
    style,
  ]);

  return (
    <Pressable
      style={({pressed}) => [
        {opacity: pressed ? activeOpacity : 1},
        customButtonStyles,
      ]}
      {...restProps}>
      {children}
    </Pressable>
  );
};
const styles = StyleSheet.create({
  boxshadow: {
    shadowColor: '#36454F',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
