import { Dimensions, PixelRatio } from 'react-native';

const window = Dimensions.get('window');

// Stop scaling past a phone-sized width so wide browsers don't inflate the UI
const MAX_WIDTH = 480;
const width = Math.min(window.width, MAX_WIDTH);
const height = window.height;

const BASE_WIDTH = 375;
const BASE_HEIGHT = 812;

export const scale = (size: number): number => (width / BASE_WIDTH) * size;

export const verticalScale = (size: number): number =>
  (height / BASE_HEIGHT) * size;

export const moderateScale = (size: number, factor: number = 0.5): number =>
  size + (scale(size) - size) * factor;

export const fontScale = (size: number): number =>
  Math.round(PixelRatio.roundToNearestPixel(moderateScale(size)));