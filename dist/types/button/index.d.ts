import { z } from 'zod';
import { BaseParentDTO, ParameterValueType } from '../shared';
import { UploadedFileDTO } from '../files';
import { ControlParameterDTO } from '../controlParameters';
export declare enum ButtonType {
    Button = "Button",
    Slider = "Slider",
    Toggle = "Toggle"
}
export declare enum ButtonImageOrientation {
    Horizontal = "Horizontal",
    Vertical = "Vertical",
    Square = "Square"
}
export declare const ButtonFormSchema: z.ZodEffects<z.ZodObject<{
    id: z.ZodNullable<z.ZodString>;
    parentId: z.ZodString;
    label: z.ZodString;
    path: z.ZodString;
    value: z.ZodString;
    valueAlt: z.ZodNullable<z.ZodString>;
    valueType: z.ZodNativeEnum<typeof ParameterValueType>;
    buttonType: z.ZodNativeEnum<typeof ButtonType>;
    imageOrientation: z.ZodNativeEnum<typeof ButtonImageOrientation>;
    order: z.ZodNumber;
    controlParameterId: z.ZodNullable<z.ZodString>;
    useCost: z.ZodNullable<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    id: string | null;
    imageOrientation: ButtonImageOrientation;
    order: number;
    value: string;
    label: string;
    path: string;
    valueType: ParameterValueType;
    parentId: string;
    useCost: number | null;
    valueAlt: string | null;
    buttonType: ButtonType;
    controlParameterId: string | null;
}, {
    id: string | null;
    imageOrientation: ButtonImageOrientation;
    order: number;
    value: string;
    label: string;
    path: string;
    valueType: ParameterValueType;
    parentId: string;
    useCost: number | null;
    valueAlt: string | null;
    buttonType: ButtonType;
    controlParameterId: string | null;
}>, {
    id: string | null;
    imageOrientation: ButtonImageOrientation;
    order: number;
    value: string;
    label: string;
    path: string;
    valueType: ParameterValueType;
    parentId: string;
    useCost: number | null;
    valueAlt: string | null;
    buttonType: ButtonType;
    controlParameterId: string | null;
}, {
    id: string | null;
    imageOrientation: ButtonImageOrientation;
    order: number;
    value: string;
    label: string;
    path: string;
    valueType: ParameterValueType;
    parentId: string;
    useCost: number | null;
    valueAlt: string | null;
    buttonType: ButtonType;
    controlParameterId: string | null;
}>;
export type ButtonFormDTO = z.infer<typeof ButtonFormSchema>;
export interface ButtonDTO extends BaseParentDTO<ButtonDTO> {
    label?: string;
    path?: string;
    value?: string;
    valueAlt?: string;
    valueType?: ParameterValueType;
    buttonType?: ButtonType;
    image?: UploadedFileDTO;
    imageOrientation?: ButtonImageOrientation;
    order?: number;
    useCost?: number;
    controlParameter?: ControlParameterDTO | null;
    controlParameterId?: string | null;
}
