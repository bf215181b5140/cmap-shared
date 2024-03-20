export declare class CmapApiError extends Error {
    code: number | undefined;
    constructor(message: string, code?: number);
    dto(): CmapApiErrorDTO;
}
export declare class CmapApiErrorDTO {
    code?: number;
    name: string;
    message: string;
    id?: string;
    constructor(name: string, message: string, code?: number, id?: string);
    setId(id: string): this;
}
