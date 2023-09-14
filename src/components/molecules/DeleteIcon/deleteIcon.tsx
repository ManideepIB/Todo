import {TouchableOpacity, View} from 'react-native';
import {AppText} from '../../atoms';
import {colors} from '../../../theme';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {DeleteIconProps} from './types';

export const DeleteIcon: React.FC<DeleteIconProps> = props => {
  return (
    <View>
      <TouchableOpacity onPress={props.onPress}>
        <MaterialCommunityIcons name={'delete'} size={24} color={colors.Red} />
      </TouchableOpacity>
    </View>
  );
};
