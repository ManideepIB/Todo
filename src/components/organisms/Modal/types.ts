import {LayoutAnimationType, ModalProps} from 'react-native';

export interface CustomModalProps extends ModalProps {
  animationType?: 'none' | 'slide' | 'fade' | undefined;
  transparent?: boolean | undefined;
  onRequestClose: () => void;
  visible: boolean | undefined;
  color?: string | undefined;
  children?: JSX.Element | JSX.Element[] | string | any;
}
