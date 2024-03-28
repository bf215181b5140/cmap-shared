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
    label: z.ZodNullable<z.ZodString>;
    path: z.ZodString;
    value: z.ZodString;
    valueAlt: z.ZodNullable<z.ZodString>;
    valueType: z.ZodNativeEnum<typeof ParameterValueType>;
    buttonType: z.ZodNativeEnum<typeof ButtonType>;
    imageOrientation: z.ZodNativeEnum<typeof ButtonImageOrientation>;
    order: z.ZodNumber;
    useCost: z.ZodNullable<z.ZodNumber>;
    file: z.ZodType<File, z.ZodTypeDef, File>;
    controlParameterId: z.ZodNullable<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    id?: string;
    parentId?: string;
    label?: string;
    path?: string;
    value?: string;
    valueAlt?: string;
    valueType?: ParameterValueType;
    buttonType?: ButtonType;
    imageOrientation?: ButtonImageOrientation;
    order?: number;
    useCost?: number;
    file?: File;
    controlParameterId?: string;
}, {
    id?: string;
    parentId?: string;
    label?: string;
    path?: string;
    value?: string;
    valueAlt?: string;
    valueType?: ParameterValueType;
    buttonType?: ButtonType;
    imageOrientation?: ButtonImageOrientation;
    order?: number;
    useCost?: number;
    file?: File;
    controlParameterId?: string;
}>, {
    id?: string;
    parentId?: string;
    label?: string;
    path?: string;
    value?: string;
    valueAlt?: string;
    valueType?: ParameterValueType;
    buttonType?: ButtonType;
    imageOrientation?: ButtonImageOrientation;
    order?: number;
    useCost?: number;
    file?: File;
    controlParameterId?: string;
}, {
    id?: string;
    parentId?: string;
    label?: string;
    path?: string;
    value?: string;
    valueAlt?: string;
    valueType?: ParameterValueType;
    buttonType?: ButtonType;
    imageOrientation?: ButtonImageOrientation;
    order?: number;
    useCost?: number;
    file?: File;
    controlParameterId?: string;
}>;
export type ButtonFormDTO = z.infer<typeof ButtonFormSchema>;
export interface ButtonDTO extends BaseParentDTO<ButtonDTO> {
    label: string | null;
    path: string;
    value: string;
    valueAlt: string | null;
    valueType: ParameterValueType;
    buttonType: ButtonType;
    imageOrientation: ButtonImageOrientation;
    order: number;
    useCost: number | null;
    image: UploadedFileDTO | null;
    controlParameter: ControlParameterDTO | null;
}
