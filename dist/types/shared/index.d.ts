import { z } from 'zod';
export declare enum ParameterValueType {
    Int = "Int",
    Float = "Float",
    Bool = "Bool"
}
export declare const BaseIdSchema: z.ZodObject<{
    id: z.ZodNullable<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    id: string | null;
}, {
    id: string | null;
}>;
export declare const RequiredIdSchema: z.ZodObject<{
    id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
}, {
    id: string;
}>;
export declare const BaseParentIdSchema: z.ZodObject<z.objectUtil.extendShape<{
    id: z.ZodNullable<z.ZodString>;
}, {
    parentId: z.ZodString;
}>, "strip", z.ZodTypeAny, {
    id: string | null;
    parentId: string;
}, {
    id: string | null;
    parentId: string;
}>;
export declare const usernameSchema: z.ZodString;
export declare const passwordSchema: z.ZodString;
export declare const parameterPathSchema: z.ZodString;
export declare const parameterValueSchema: z.ZodUnion<[z.ZodNumber, z.ZodBoolean]>;
export declare const parameterValueFormSchema: z.ZodEffects<z.ZodString, number | boolean, string>;
export declare const parameterValueOrAvtrSchema: z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>;
export declare const parameterValueOrAvtrFormSchema: z.ZodEffects<z.ZodString, string | number | boolean, string>;
export interface BaseDTO {
    id?: string;
}
export interface BaseParentDTO extends BaseDTO {
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
