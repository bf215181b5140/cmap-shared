import { Maybe } from '../../index';
export declare class UploadedFileDTO<T extends UploadedFileDTO<T>> {
    id: Maybe<string>;
    fileName: Maybe<string>;
    urlPath: Maybe<string>;
    constructor(object?: T | null);
}
