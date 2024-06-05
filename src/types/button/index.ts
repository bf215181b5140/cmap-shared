import { z } from 'zod';
import { BaseParentDTO, BaseParentIdSchema, parameterSchema, ParameterValueType } from '../shared';
import { UploadedFileDTO } from '../files';
import { ControlParameterDTO } from '../controlParameters';
import { InteractionKeyDTO } from '../InteractionKey';

export enum ButtonType {
    Button = 'Button',
    Slider = 'Slider',
    Toggle = 'Toggle',
}

export enum ButtonImageOrientation {
    Horizontal = 'Horizontal',
    Vertical = 'Vertical',
    Square = 'Square',
}

export const ButtonFormSchema = BaseParentIdSchema.extend({
    label: z.string().max(32).nullable(),
    path: parameterSchema,
    value: z.string().min(1, 'Value required').max(5),
    valueAlt: z.string().max(5).nullable(),
    valueType: z.nativeEnum(ParameterValueType),
    buttonType: z.nativeEnum(ButtonType),
    imageOrientation: z.nativeEnum(ButtonImageOrientation),
    order: z.number(),
    useCost: z.number().nullable(),
    file: z.custom<File>((value) => !value || value instanceof File),
    controlParameterId: z.string().max(20).nullable(),
    interactionKeyId: z.string().max(20).nullable(),
}).superRefine((val, ctx) => {
    // Check valueType
    if (val.buttonType === ButtonType.Slider && val.valueType === ParameterValueType.Bool) {
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: 'Slider can\'t be of type Bool',
            path: ['valueType']
        });
    }
    // Check value requirement
    if ((val.buttonType === ButtonType.Slider || val.buttonType === ButtonType.Toggle) && (!val.valueAlt || val.valueAlt === '')) {
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: 'Secondary value required for slider or toggle button',
            path: ['valueAlt']
        });
    }
    // Check value type
    switch (val.valueType) {
        case ParameterValueType.Bool:
            if ((val.value !== 'true' && val.value !== 'false')) {
                ctx.addIssue({
                    code: z.ZodIssueCode.custom,
                    message: 'Invalid Bool (true or false)',
                    path: [`value`]
                });
            }
            if ((val.valueAlt !== '' && val.valueAlt !== 'true' && val.valueAlt !== 'false')) {
                ctx.addIssue({
                    code: z.ZodIssueCode.custom,
                    message: 'Invalid Bool (true or false)',
                    path: [`valueAlt`]
                });
            }
            break;
        case ParameterValueType.Float:
            const valueNumber = Number(val.value);
            if (Number.isNaN(valueNumber) || valueNumber < 0 || valueNumber > 1) {
                ctx.addIssue({
                    code: z.ZodIssueCode.custom,
                    message: 'Invalid Float number',
                    path: [`value`]
                });
            }
            const valueAltNumber = Number(val.valueAlt);
            if (val.valueAlt !== '' && Number.isNaN(valueAltNumber) || valueAltNumber < 0 || valueAltNumber > 1) {
                ctx.addIssue({
                    code: z.ZodIssueCode.custom,
                    message: 'Invalid Float number',
                    path: [`valueAlt`]
                });
            }
            break;
        case ParameterValueType.Int:
            if (!Number.isInteger(Number(val.value))) {
                ctx.addIssue({
                    code: z.ZodIssueCode.custom,
                    message: 'Invalid Int number',
                    path: [`value`]
                });
            }
            if (val.valueAlt !== '' && !Number.isInteger(Number(val.valueAlt))) {
                ctx.addIssue({
                    code: z.ZodIssueCode.custom,
                    message: 'Invalid Int number',
                    path: [`valueAlt`]
                });
            }
            break;
    }
});

export type ButtonFormDTO = z.infer<typeof ButtonFormSchema>;

export interface ButtonDTO extends BaseParentDTO {
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
    interactionKey?: InteractionKeyDTO | null;
}

