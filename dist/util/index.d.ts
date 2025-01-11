import { ImageOrientation } from '../index';
/**
 * Converts a string to valid parameter number or boolean, else return undefined
 *
 */
export declare function convertParameterValueFromString(value: string): number | boolean | undefined;
/**
 * Trims decimals of a float number to specific number
 *
 * By default, trim to 3 deciamals because that's the precision we use comparing VRChat parameter float values
 *
 */
export declare function trimNumberDecimals(number: number, decimals?: number): number;
/**
 * Return proper full URL to images from UploadedFile urlPath, with exception for blob files.
 *
 */
export declare function imageUrlPathToUrl(urlPath: string): string;
/**
 * Return aspect ratio for css property based on ImageOrientation enum value
 *
 */
export declare function imageOrientationToAspectRatio(imageOrientation: ImageOrientation): "4/3" | "3/4" | "16/9";
