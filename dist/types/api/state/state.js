"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StateParameterFormSchema = void 0;
const zod_1 = require("zod");
const shared_1 = require("../../shared");
const util_1 = require("../../../util");
exports.StateParameterFormSchema = zod_1.z.object({
    path: shared_1.parameterPathSchema,
    value: zod_1.z.union([shared_1.parameterValueSchema, shared_1.vrcAvatarIdSchema]),
}).transform(val => {
    const convertedValue = (0, util_1.convertParameterValueFromString)(val.value);
    const transformedValue = convertedValue !== undefined ? convertedValue : val.value;
    return [val.path, transformedValue];
});
