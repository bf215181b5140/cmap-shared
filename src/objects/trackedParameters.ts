import { z } from 'zod';
import { parameterPathSchema, parameterValueObjectOrAvatarSchema } from '../shared';
import { VrcParameter } from './vrcParameter';

export class TrackedParametersMap extends Map<string, boolean | number | string> {

    public dto(): TrackedParametersDTO {
        return [...this.entries()];
    }

    public getParameter(key: string): VrcParameter | undefined {
        const value = this.get(key);
        if (!value) return undefined;
        return { path: key, value: value };
    }

    public getParameterDto(key: string): TrackedParameterDTO | undefined {
        const value = this.get(key);
        if (!value) return undefined;
        return [key, value];
    }
}

export const TrackedParameterSchema = z.tuple([
    parameterPathSchema,
    parameterValueObjectOrAvatarSchema,
]);

export type TrackedParameterDTO = z.infer<typeof TrackedParameterSchema>;

export const TrackedParametersSchema = z.array(TrackedParameterSchema);

export type TrackedParametersDTO = z.infer<typeof TrackedParametersSchema>;
