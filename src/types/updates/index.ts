import { ClientVersionDTO } from '../clientVersions';

export interface UpdateDTO extends ClientVersionDTO {
    id: string;
    createDate: Date;
}

export interface UpdatesDTO {
    updates: UpdateDTO;
}
