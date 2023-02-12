import { FormMeta, FormField, FieldOption, FieldType } from './forms';
export declare class ClientCredentials {
    serverUrl: string;
    username: string;
    password: string;
    constructor(username?: string, password?: string, serverUrl?: string);
}
export interface OscMessage {
    oscType: string;
    address: string;
    args: [boolean | number | string];
}
export { FormMeta, FormField, FieldOption, FieldType };
