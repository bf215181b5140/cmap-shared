import { FieldType } from './forms';

export class ClientCredentials {
    serverUrl: string;
    username: string;
    password: string;

    constructor(username?: string, password?: string, serverUrl?: string) {
        this.username = username ? username : '';
        this.password = password ? password : '';
        this.serverUrl = serverUrl ? serverUrl : '';
    }
}

export class FormMeta {
    version: string | undefined;
    name: string | undefined;
    label: string | undefined;
    fields: FormFields[] | undefined | null;
}

export class FormFields {
    name: string | undefined | null;
    label: string | undefined | null;
    length: number | undefined | null;
    type: string | undefined | null;
    regex: string | undefined | null;
    order: number | undefined | null;
    editable: boolean | undefined | null;
    visible: boolean | undefined | null;
}

export interface OscMessage {
    oscType: string;
    address: string;
    args: [boolean | number | string];
}

export { FieldType };