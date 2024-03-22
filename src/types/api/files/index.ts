import { Maybe } from '../../index';

export class UploadedFileDTO<T extends UploadedFileDTO<T>> {
    id: Maybe<string>;
    fileName: Maybe<string>;
    urlPath: Maybe<string>;

    constructor(object?: T | null) {
        this.id = object?.id;
        this.fileName = object?.fileName;
        this.urlPath = object?.urlPath;
    }
}


const test = new UploadedFileDTO();
