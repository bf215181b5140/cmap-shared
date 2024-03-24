import { BaseDTO } from '../shared';
export interface FileUploadDTO {
    parentType?: string;
    parentId?: string;
    file?: File;
}
export interface UploadedFileDTO extends BaseDTO<UploadedFileDTO> {
    fileName: string;
    urlPath: string;
}
