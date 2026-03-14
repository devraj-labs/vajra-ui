import { Dimensions } from 'react-native';
import { useTheme } from '../theme';

export const useDimensions = () => {
  const { layout } = useTheme();
  const { fontScale, height, scale, width: screenWidth } = Dimensions.get('window');

  const contentWidth = screenWidth - layout.screenPadding * 2;

  const getItemWidth = (numColumns: number, gap?: number) => {
    const resolvedGap = gap ?? layout.gap;
    const totalGap = resolvedGap * (numColumns - 1);

    return (contentWidth - totalGap) / numColumns;
  };

  const getCustomWidth = (numCols: number, marginHorizontal?: number, gap?: number) => {
    const resolvedMargin = marginHorizontal ?? layout.screenPadding;
    const resolvedGap = gap ?? layout.gap;
    const availContentWidth = screenWidth - resolvedMargin * 2;
    const totalGap = resolvedGap * (numCols - 1);

    return (availContentWidth - totalGap) / numCols;
  };

  return {
    fontScale,
    height,
    scale,
    width: screenWidth,
    contentWidth,
    getItemWidth,
    getCustomWidth,
  };
};
