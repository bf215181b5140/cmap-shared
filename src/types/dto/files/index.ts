import { BaseDTO } from '../shared';

export class UploadedFileDTO extends BaseDTO<UploadedFileDTO> {
    fileName?: string;
    urlPath?: string;
}

export class FileUploadDTO {
    parentType?: string;
    parentId?: string;
    file?: File;
}

