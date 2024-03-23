import { BaseParentDTO, ParameterValueType } from '../shared';

export enum ControlParameterRole {
    UseCost = 'Use cost',
    HP = 'HP',
    Callback = 'Callback',
}

export interface ControlParameterDTO extends BaseParentDTO<ControlParameterDTO> {
    label?: string;
    role?: ControlParameterRole;
    path?: string;
    valuePrimary?: string | null;
    valueSecondary?: string | null;
    valueType?: ParameterValueType;
}
