export interface ClientCredentials {
    username: string;
    password: string;
}

export interface OscMessage {
    oscType: string;
    address: string;
    args: [boolean | number | string];
}
