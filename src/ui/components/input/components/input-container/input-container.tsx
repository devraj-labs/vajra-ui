import React, { memo } from 'react';
import { ViewStyle } from 'react-native';

import { TVajraColor, useVajraTheme } from '../../../../../vajra-theme/use-vajra-theme';
import { Row } from '../../../../core/row';
import { TUiRowProps } from '../../../../core/row/row-types';
import { useInputContext } from '../../input-context';

export type TInputContainerProps = Omit<TUiRowProps, 'borderColor' | 'style'> & {
  borderColor: TVajraColor;
  focusBorderColor: TVajraColor;
  errorBorderColor: TVajraColor;
  borderWidth?: number;
  style?: ViewStyle | ViewStyle[];
};

const InputContainerComponent = memo<TInputContainerProps>(
  ({ borderColor, focusBorderColor, errorBorderColor, borderWidth = 1, style, ...rest }) => {
    const { colors } = useVajraTheme();
    const { isFocused, hasError, isDisabled } = useInputContext();

    const activeBorderColor =
      colors[hasError ? errorBorderColor : isFocused ? focusBorderColor : borderColor];

    return (
      <Row
        align="center"
        gap="s-2"
        {...rest}
        style={[
          { borderColor: activeBorderColor, borderWidth, opacity: isDisabled ? 0.4 : 1 },
          ...(style ? (Array.isArray(style) ? style : [style]) : []),
        ]}
      />
    );
  },
);

InputContainerComponent.displayName = 'InputContainer';

export const InputContainer = InputContainerComponent;
