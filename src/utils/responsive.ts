import { Dimensions, PixelRatio } from 'react-native';

const { width, height } = Dimensions.get('window');
const BASE_WIDTH = 375;
const BASE_HEIGHT = 812;

export const scale = (size: number): number => (width / BASE_WIDTH) * size;

export const verticalScale = (size: number): number =>
  (height / BASE_HEIGHT) * size;

export const moderateScale = (size: number, factor: number = 0.5): number =>
  size + (scale(size) - size) * factor;

export const fontScale = (size: number): number =>
  Math.round(PixelRatio.roundToNearestPixel(moderateScale(size)));