export class CmapApiError extends Error {
    code: number | undefined;

    constructor(message: string, code?: number) {
        super(message);
        this.code = code;
        this.name = 'CmapApiError';
    }

    public dto(): CmapApiErrorDTO {
        return new CmapApiErrorDTO(this.name, this.message, this.code);
    }
}

export class CmapApiErrorDTO {
    code?: number;
    name: string;
    message: string;

    constructor(name: string, message: string, code?: number) {
        this.code = code;
        this.name = name;
        this.message = message;
    }
}
