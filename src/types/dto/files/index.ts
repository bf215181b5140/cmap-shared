import { BaseDTO } from '../shared';

export interface UploadedFileDTO extends BaseDTO<UploadedFileDTO> {
    fileName?: string;
    urlPath?: string;
}

export interface FileUploadDTO {
    parentType?: string;
    parentId?: string;
    file?: File;
}

