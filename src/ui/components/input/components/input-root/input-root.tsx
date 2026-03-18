import React, { forwardRef, useState } from 'react';
import { TextInput as RNTextInput } from 'react-native';

import { InputContextProvider } from '../../input-context';
import { TInputProps } from '../../input-types';
import { Col } from '../../../../core';

export type TInputRootProps = Pick<
  TInputProps,
  'isInvalid' | 'isDisabled' | 'isReadOnly' | 'errorText' | 'size'
> & {
  children: React.ReactNode;
};

const InputRootComponent = forwardRef<RNTextInput, TInputRootProps>(
  ({
    isInvalid = false,
    isDisabled = false,
    isReadOnly = false,
    errorText,
    size = 'md',
    children,
  }) => {
    const [isFocused, setIsFocused] = useState(false);
    const hasError = isInvalid || !!errorText;

    return (
      <InputContextProvider
        value={{ isFocused, hasError, isDisabled, isReadOnly, size, setIsFocused }}
      >
        <Col>{children}</Col>
      </InputContextProvider>
    );
  },
);

InputRootComponent.displayName = 'InputRoot';

export const InputRoot = InputRootComponent;
