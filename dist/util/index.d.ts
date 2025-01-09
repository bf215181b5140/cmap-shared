import { ImageOrientation } from '../index';
export declare function convertParameterValueFromString(value: string): number | boolean | undefined;
export declare function imageUrlPathToUrl(urlPath: string): string;
export declare function imageOrientationToAspectRatio(imageOrientation: ImageOrientation): "4/3" | "3/4" | "16/9";
