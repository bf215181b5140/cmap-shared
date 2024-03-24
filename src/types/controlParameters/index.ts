import { z } from 'zod';
import { BaseIdSchema, BaseParentDTO, ParameterValueType } from '../shared';

export enum ControlParameterRole {
    UseCost = 'Use cost',
    HP = 'HP',
    Callback = 'Callback',
}

export const ControlParameterSchema = BaseIdSchema.extend({
    label: z.string().min(3).max(16),
    role: z.nativeEnum(ControlParameterRole),
    path: z.string().min(1, 'Path required').max(50),
    valuePrimary: z.string().min(1, 'Value required').max(5),
    valueSecondary: z.string().min(1, 'Value required').max(5).nullable(),
    valueType: z.nativeEnum(ParameterValueType),
});

export const ControlParametersFormSchema = z.object({
    avatarId: z.string().min(1).max(20),
    controlParameters: z.array(ControlParameterSchema).max(8).optional()
}).superRefine((val, ctx) => {
    if (val.controlParameters?.length) {
        if ((val.controlParameters.filter(cp => cp.role === ControlParameterRole.HP)?.length || 0) > 1) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: 'Only one parameter with HP role is allowed',
                path: [`controlParameters`]
            });
        }
        if ((val.controlParameters.filter(cp => cp.role === ControlParameterRole.UseCost)?.length || 0) > 1) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: 'Only one parameter with Use cost role is allowed',
                path: [`controlParameters`]
            });
        }
        for (let i = 0; i < val.controlParameters.length; i++) {
            if (val.controlParameters[i].role === ControlParameterRole.Callback) {
                if (!Number.isInteger(Number(val.controlParameters[i].valueSecondary))) {
                    ctx.addIssue({
                        code: z.ZodIssueCode.custom,
                        message: 'Invalid number',
                        path: [`controlParameters.${i}.valueSecondary`]
                    });
                } else if (Number(val.controlParameters[i].valueSecondary) > 15) {
                    ctx.addIssue({
                        code: z.ZodIssueCode.custom,
                        message: 'Max 15 seconds',
                        path: [`controlParameters.${i}.valueSecondary`]
                    });
                }
                switch (val.controlParameters[i].valueType) {
                    case ParameterValueType.Bool:
                        if (val.controlParameters[i].valuePrimary !== 'true' && val.controlParameters[i].valuePrimary !== 'false') {
                            ctx.addIssue({
                                code: z.ZodIssueCode.custom,
                                message: 'Invalid Bool (true or false)',
                                path: [`controlParameters.${i}.valuePrimary`]
                            });
                        }
                        break;
                    case ParameterValueType.Int:
                        if (!Number.isInteger(Number(val.controlParameters[i].valuePrimary))) {
                            ctx.addIssue({
                                code: z.ZodIssueCode.custom,
                                message: 'Invalid Int number',
                                path: [`controlParameters.${i}.valuePrimary`]
                            });
                        }
                        break;
                    case ParameterValueType.Float:
                        const valuePrimaryNumber = Number(val.controlParameters[i].valuePrimary);
                        if (Number.isNaN(valuePrimaryNumber) || valuePrimaryNumber < 0 || valuePrimaryNumber > 1) {
                            ctx.addIssue({
                                code: z.ZodIssueCode.custom,
                                message: 'Invalid Float number',
                                path: [`controlParameters.${i}.valuePrimary`]
                            });
                        }
                        break;
                }
            } else {
                if (val.controlParameters[i].valueType !== ParameterValueType.Int) {
                    ctx.addIssue({
                        code: z.ZodIssueCode.custom,
                        message: 'Use cost and HP only support Int',
                        path: [`controlParameters.${i}.valueType`]
                    });
                }
                if (!Number.isInteger(Number(val.controlParameters[i].valuePrimary))) {
                    ctx.addIssue({
                        code: z.ZodIssueCode.custom,
                        message: 'Invalid Int number',
                        path: [`controlParameters.${i}.valuePrimary`]
                    });
                }
                if (!Number.isInteger(Number(val.controlParameters[i].valueSecondary))) {
                    ctx.addIssue({
                        code: z.ZodIssueCode.custom,
                        message: 'Invalid Int number',
                        path: [`controlParameters.${i}.valueSecondary`]
                    });
                }
            }
        }
    }
});

export type ControlParametersFormDTO = z.infer<typeof ControlParametersFormSchema>;

export interface ControlParameterDTO extends BaseParentDTO<ControlParameterDTO> {
    label: string;
    role: ControlParameterRole;
    path: string;
    valuePrimary: string | null;
    valueSecondary: string | null;
    valueType: ParameterValueType;
}
