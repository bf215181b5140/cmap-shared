import { FormMeta, FormField, FieldOption, FieldType } from './forms';

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

export interface OscMessage {
    oscType: string;
    address: string;
    args: [boolean | number | string];
}

export { FormMeta, FormField, FieldOption, FieldType };
