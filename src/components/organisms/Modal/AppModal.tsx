import {Modal} from 'react-native';
import {CustomModalProps} from './types';
import {View} from 'react-native';

export const AppModal: React.FC<CustomModalProps> = ({
  transparent = true,
  animationType = 'fade',
  color = 'rgba(155, 155, 155, 0.3)',
  visible,
  onRequestClose,
  children,
  ...props
}) => {
  return (
    <Modal
      transparent={transparent}
      animationType={animationType}
      visible={visible}
      onRequestClose={onRequestClose}
      {...props}>
      <View
        style={{
          flex: 1,
          padding: 10,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: color,
        }}>
        {children}
      </View>
    </Modal>
  );
};
