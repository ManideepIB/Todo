import {
  TextInput as RNTextInput,
  StyleProp,
  ViewStyle,
  StyleSheet,
  TextStyle,
  View,
} from 'react-native';
import React from 'react';
import {AppTextInputProps} from './types';
import {AppText} from '../Text/AppText';
import {colors} from '../../../theme';

export const AppTextInput: React.FC<AppTextInputProps> = ({
  textColor,
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
  bw = 1,
  borderColor = colors.darkgrey,
  width = '100%',
  height = 40,
  // borderWidth = 1,
  flex,
  label,
  placeholder,
  required,
  style,
  ...props
}) => {
  const customInputStyles: StyleProp<TextStyle> = StyleSheet.flatten([
    textColor !== undefined && {color: textColor},
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
    // borderWidth !== undefined && {borderWidth: borderWidth},
    // borderBWidth !== undefined && {borderBottomWidth: borderBottomWidth},
    // borderRadius !== undefined && {borderRadius: borderRadius},
    width !== undefined && {width: width},
    height !== undefined && {height: height},
    flex !== undefined && {flex: flex},

    style,
  ]);
  return (
    <View>
      {label && (
        <AppText
          mv={10}
          textSize={26}
          custFamily="Alegreya-MediumItalic"
          textColor={textColor}
          style={styles.label}>
          {label}
          {required && <AppText textColor={colors.AlertRed}>*</AppText>}
        </AppText>
      )}
      <RNTextInput
        placeholder={placeholder}
        style={[styles.input, customInputStyles]}
        {...props}
      />
      {/* {required && <AppText textColor="red">{label} must enter</AppText>} */}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 15,
    paddingLeft: 15,
  },
  label: {},
});
