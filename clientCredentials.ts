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
