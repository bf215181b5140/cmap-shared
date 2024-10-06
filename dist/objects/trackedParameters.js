"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrackedParametersSchema = exports.TrackedParameterSchema = void 0;
const zod_1 = require("zod");
const shared_1 = require("../shared");
exports.TrackedParameterSchema = zod_1.z.tuple([
    shared_1.parameterPathSchema,
    shared_1.parameterValueObjectOrAvatarSchema,
]);
exports.TrackedParametersSchema = zod_1.z.array(exports.TrackedParameterSchema);
