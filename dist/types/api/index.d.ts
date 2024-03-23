export declare class BaseDTO<T> {
    id?: string;
    constructor(props?: Required<T> & Record<string, any>);
}
export declare class BaseParentDTO<T> extends BaseDTO<BaseParentDTO<T>> {
    parentId?: string;
}
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
