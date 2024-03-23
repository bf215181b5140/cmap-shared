import { BaseDTO } from '../index';

export class UploadedFileDTO extends BaseDTO<UploadedFileDTO> {
    fileName?: string;
    urlPath?: string;
}
