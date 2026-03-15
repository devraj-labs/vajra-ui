import { Dimensions } from 'react-native';

export const useDimensions = (screenPadding = 0) => {
  const { fontScale, height, scale, width: screenWidth } = Dimensions.get('window');

  const contentWidth = screenWidth - screenPadding * 2;

  const getItemWidth = (numColumns: number, gap = 0) => {
    const totalGap = gap * (numColumns - 1);

    return (contentWidth - totalGap) / numColumns;
  };

  const getCustomWidth = (numCols: number, marginHorizontal = screenPadding, gap = 0) => {
    const availContentWidth = screenWidth - marginHorizontal * 2;
    const totalGap = gap * (numCols - 1);

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
