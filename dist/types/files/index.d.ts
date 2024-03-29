import { BaseDTO } from '../shared';
export interface FileUploadDTO {
    parentType?: string;
    parentId?: string;
    file?: File;
}
export interface UploadedFileDTO extends BaseDTO {
    fileName: string;
    urlPath: string;
}
