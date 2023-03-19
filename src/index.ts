import { FormMeta, FormField, FieldOption, InputType } from './forms';

export class ClientCredentials {
    serverUrl: string;
    username: string;
    password: string;
    apiToken: string | undefined | null;

    constructor(username?: string, password?: string, serverUrl?: string) {
        this.username = username ? username : '';
        this.password = password ? password : '';
        this.serverUrl = serverUrl ? serverUrl : '';
    }

    setApiToken(token: string) {
        this.apiToken = token;
    }
}

export interface OscMessage {
    oscType: string;
    address: string;
    args: [boolean | number | string];
}

export { FormMeta, FormField, FieldOption, InputType };
