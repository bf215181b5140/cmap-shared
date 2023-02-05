export class ClientCredentials {
    webserver: string;
    username: string;
    password: string;

    constructor(username: string, password: string, webserver?: string) {
        this.username = username;
        this.password = password;
        if(webserver) this.webserver = webserver;
    }
}
