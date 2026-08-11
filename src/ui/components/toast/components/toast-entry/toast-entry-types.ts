import { TToastEntry } from '../../toast-types';

export type TToastEntryProps = {
  entry: TToastEntry;
  offset: number;
  onDismiss: () => void;
};
