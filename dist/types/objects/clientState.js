"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientStateSchema = exports.ClientStateParametersSchema = exports.ClientStateParameterSchema = void 0;
const zod_1 = require("zod");
const shared_1 = require("../shared");
exports.ClientStateParameterSchema = zod_1.z.tuple([
    shared_1.parameterPathSchema,
    shared_1.parameterValueObjectOrAvatarSchema,
]);
exports.ClientStateParametersSchema = zod_1.z.array(exports.ClientStateParameterSchema);
exports.ClientStateSchema = zod_1.z.object({
    isConnected: zod_1.z.boolean(),
    isOnVrchat: zod_1.z.boolean().nullable(),
    parameters: exports.ClientStateParametersSchema,
});
