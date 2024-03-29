"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CmapApiErrorDTO = exports.CmapApiError = exports.BaseParentIdSchema = exports.RequiredIdSchema = exports.BaseIdSchema = exports.ParameterValueType = void 0;
const zod_1 = require("zod");
var ParameterValueType;
(function (ParameterValueType) {
    ParameterValueType["Int"] = "Int";
    ParameterValueType["Float"] = "Float";
    ParameterValueType["Bool"] = "Bool";
})(ParameterValueType = exports.ParameterValueType || (exports.ParameterValueType = {}));
exports.BaseIdSchema = zod_1.z.object({
    id: zod_1.z.string().max(20).nullable()
});
exports.RequiredIdSchema = zod_1.z.object({
    id: zod_1.z.string().min(1).max(20),
});
exports.BaseParentIdSchema = exports.BaseIdSchema.extend({
    parentId: zod_1.z.string().min(1).max(20)
});
class CmapApiError extends Error {
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
exports.CmapApiError = CmapApiError;
class CmapApiErrorDTO {
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
exports.CmapApiErrorDTO = CmapApiErrorDTO;
