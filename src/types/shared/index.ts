import { z } from 'zod';

export enum ParameterValueType {
    Int = 'Int',
    Float = 'Float',
    Bool = 'Bool',
}

export const BaseIdSchema = z.object({
    id: z.string().min(1).max(20).nullable()
});

export const RequiredIdSchema = z.object({
    id: z.string().min(1).max(20),
});

export const BaseParentIdSchema = BaseIdSchema.extend({
    parentId: z.string().min(1).max(20)
});


export interface BaseDTO<T> {
    id?: string;
}

export interface BaseParentDTO<T> extends BaseDTO<BaseParentDTO<T>> {
    parentId?: string;
}

export class CmapApiError extends Error {
    code: number | undefined;

    constructor(message: string, code?: number) {
        super(message);
        this.code = code;
        this.name = 'CmapApiError';
        Object.setPrototypeOf(this, CmapApiError.prototype);
    }

    public dto(): CmapApiErrorDTO {
        return new CmapApiErrorDTO(this.name, this.message, this.code);
    }
}

export class CmapApiErrorDTO {
    code?: number;
    name: string;
    message: string;
    id?: string;

    constructor(name: string, message: string, code?: number, id?: string) {
        this.code = code;
        this.name = name;
        this.message = message;
        this.id = id;
    }

    public setId(id: string): this {
        this.id = id;
        return this;
    }
}
