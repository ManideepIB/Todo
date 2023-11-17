import {ViewProps} from 'react-native';

export interface AppDropdownProps extends ViewProps {
  data: Array<any>;
  label: String;
  value: String;
  onSelect: ((d: any[]) => void) | ((d: any) => void);
  multiSelect: boolean;
}
