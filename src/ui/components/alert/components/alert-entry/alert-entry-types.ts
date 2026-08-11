import { TAlertEntry } from '../../alert-types';

export type TAlertEntryProps = {
  entry: TAlertEntry;
  offset: number;
  onDismiss: () => void;
};
