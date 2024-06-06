"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientStateParamSchema = exports.ClientStateParamFormSchema = exports.ClientStateParamsSchema = void 0;
const zod_1 = require("zod");
const shared_1 = require("../shared");
exports.ClientStateParamsSchema = zod_1.z.array(zod_1.z.tuple([
    shared_1.parameterPathSchema,
    shared_1.parameterValueOrAvtrSchema,
]));
exports.ClientStateParamFormSchema = zod_1.z.object({
    path: shared_1.parameterPathSchema,
    value: shared_1.parameterValueOrAvtrFormSchema,
});
exports.ClientStateParamSchema = zod_1.z.object({
    path: shared_1.parameterPathSchema,
    value: shared_1.parameterValueOrAvtrSchema,
});
