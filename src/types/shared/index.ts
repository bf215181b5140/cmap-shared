import { z } from 'zod';
import { convertParameterValueFromString } from '../../util';

export enum ParameterValueType {
    Int = 'Int',
    Float = 'Float',
    Bool = 'Bool',
}

export const BaseIdSchema = z.object({
    id: z.string().max(20).nullable()
});

export const RequiredIdSchema = z.object({
    id: z.string().min(1).max(20),
});

export const BaseParentIdSchema = BaseIdSchema.extend({
    parentId: z.string().min(1).max(20)
});

export const usernameSchema = z.string().regex(/^[a-zA-Z0-9]+$/, { message: 'Only letters and numbers allowed' }).min(3).max(16);
export const passwordSchema = z.string().min(6).max(32);
export const parameterSchema = z.string().min(1, 'Parameter required').max(100);
export const parameterValueSchema = z.string().min(1, 'Value required').max(5).superRefine((val, ctx) => {
    if (convertParameterValueFromString(val) === undefined) {
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: 'Invalid value',
            path: [`value`]
        });
    }
});
export const parameterValueOrAvtrSchema = z.string().min(1, 'Value required').max(50).superRefine((val, ctx) => {
    // vrc avatar id
    if (val.startsWith('avtr_')) return;
    // number or boolean
    if (val.length > 5) {
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: 'Invalid value, number or bool must be 5 or less characters',
            fatal: true,
        });
        return z.NEVER;
    }
    if (convertParameterValueFromString(val) === undefined) {
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: 'Invalid value, must be either VRChat avatar ID, number or bool',
            fatal: true,
        });
        return z.NEVER;
    }
});

export interface BaseDTO {
    id?: string;
}

export interface BaseParentDTO extends BaseDTO {
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
