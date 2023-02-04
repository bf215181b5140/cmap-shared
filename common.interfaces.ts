export interface ClientCredentials {
    username: string;
    apiKey: string;
    serverUrl: string;
}

export interface OscMessage {
    oscType: string;
    address: string;
    args: [boolean | number | string];
}
