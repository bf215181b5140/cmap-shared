import { FormMeta, FormField, FieldOption, InputType } from './forms';
export declare class ClientCredentials {
    serverUrl: string;
    username: string;
    password: string;
    apiToken: string | undefined | null;
    constructor(username?: string, password?: string, serverUrl?: string);
    setApiToken(token: string): void;
}
export interface OscMessage {
    oscType: string;
    address: string;
    args: [boolean | number | string];
}
export { FormMeta, FormField, FieldOption, InputType };
