import { INPUT_SIZE_STYLES } from './input-constants';
import { TInputSize, TInputSizeStyle } from './input-types';

export const getInputSizeStyle = (size: TInputSize): TInputSizeStyle => INPUT_SIZE_STYLES[size];
