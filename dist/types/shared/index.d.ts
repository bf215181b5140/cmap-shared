import { z } from 'zod';
export declare enum ParameterValueType {
    Int = "Int",
    Float = "Float",
    Bool = "Bool"
}
export declare const BaseIdSchema: z.ZodObject<{
    id: z.ZodNullable<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    id?: string;
}, {
    id?: string;
}>;
export declare const RequiredIdSchema: z.ZodObject<{
    id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id?: string;
}, {
    id?: string;
}>;
export declare const BaseParentIdSchema: z.ZodObject<{
    id: z.ZodNullable<z.ZodString>;
    parentId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id?: string;
    parentId?: string;
}, {
    id?: string;
    parentId?: string;
}>;
export interface BaseDTO<T> {
    id?: string;
}
export interface BaseParentDTO<T> extends BaseDTO<BaseParentDTO<T>> {
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
