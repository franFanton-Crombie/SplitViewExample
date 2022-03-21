import {Dimensions, PixelRatio, Platform} from 'react-native';

export const API_URL = '';
export const PLATFORM_IOS = 'ios';
export const PLATFORM_ANDROID = 'android';
export const WINDOW_DIMENSION = Dimensions.get('window');
export const SCREEN_DIMENSION = Dimensions.get('screen');

const scale = SCREEN_DIMENSION.width / 360;

export function actuatedNormalize(size: number): number {
  const newSize = size * scale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize - 1.5));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize - 1.05));
  }
}

export function isIpad(): boolean {
  return Platform.isPad;
}

export function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min)) + min;
}
