"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StateSchema = exports.StateParametersSchema = exports.StateParameterSchema = void 0;
const zod_1 = require("zod");
const shared_1 = require("../shared");
exports.StateParameterSchema = zod_1.z.tuple([
    shared_1.parameterPathSchema,
    shared_1.parameterValueObjectOrAvatarSchema,
]);
exports.StateParametersSchema = zod_1.z.array(exports.StateParameterSchema);
exports.StateSchema = zod_1.z.object({
    isConnected: zod_1.z.boolean(),
    isOnVrchat: zod_1.z.boolean().nullable(),
    parameters: exports.StateParametersSchema,
});
