import React from 'react';
import { TextInput } from 'react-native';

import { TTextProps } from '../../core';
import { TUiTextInputProps } from '../../core/text-input/text-input-types';

export type TInputSize = 'xs' | 'sm' | 'md' | 'lg';

export type TInputSizeStyle = {
  height: number;
  inputText: TTextProps;
  labelText: TTextProps;
  helperText: TTextProps;
};

export type TInputProps = Omit<
  TUiTextInputProps,
  'bg' | 'borderColor' | 'rounded' | 'p' | 'px' | 'py'
> & {
  size?: TInputSize;
  rounded?: boolean;
  label?: string;
  helperText?: string;
  errorText?: string;
  isInvalid?: boolean;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  startElement?: React.ReactNode;
  endElement?: React.ReactNode;
  ref?: React.Ref<TextInput>;
};
