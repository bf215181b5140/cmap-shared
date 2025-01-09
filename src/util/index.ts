import { ImageOrientation, ImageOrientationSchema, URL } from '../index';

export function convertParameterValueFromString(value: string): number | boolean | undefined {
  // boolean
  if (value === 'true') return true;
  if (value === 'false') return false;

  // number
  const numValue = Number(value);
  if (!isNaN(numValue)) return numValue;

  // failed to convert
  return undefined;
}

export function imageUrlPathToUrl(urlPath: string) {
  if (urlPath.startsWith('blob:'))  return urlPath;
    return URL + '/' + urlPath;
}

export function imageOrientationToAspectRatio(imageOrientation: ImageOrientation) {
  switch (imageOrientation) {
    case ImageOrientationSchema.Values.Square:
      return '4/3';
    case ImageOrientationSchema.Values.Vertical:
      return '3/4';
    case ImageOrientationSchema.Values.Horizontal:
    default:
      return '16/9';
  }
}

