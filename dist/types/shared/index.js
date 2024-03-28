import { z } from 'zod';
export var ParameterValueType;
(function (ParameterValueType) {
    ParameterValueType["Int"] = "Int";
    ParameterValueType["Float"] = "Float";
    ParameterValueType["Bool"] = "Bool";
})(ParameterValueType || (ParameterValueType = {}));
export const BaseIdSchema = z.object({
    id: z.string().max(20).nullable()
});
export const RequiredIdSchema = z.object({
    id: z.string().min(1).max(20),
});
export const BaseParentIdSchema = BaseIdSchema.extend({
    parentId: z.string().min(1).max(20)
});
export class CmapApiError extends Error {
    code;
    constructor(message, code) {
        super(message);
        this.code = code;
        this.name = 'CmapApiError';
        Object.setPrototypeOf(this, CmapApiError.prototype);
    }
    dto() {
        return new CmapApiErrorDTO(this.name, this.message, this.code);
    }
}
export class CmapApiErrorDTO {
    code;
    name;
    message;
    id;
    constructor(name, message, code, id) {
        this.code = code;
        this.name = name;
        this.message = message;
        this.id = id;
    }
    setId(id) {
        this.id = id;
        return this;
    }
}
