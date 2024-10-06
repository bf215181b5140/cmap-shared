"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrackedParameterFormSchema = void 0;
const zod_1 = require("zod");
const shared_1 = require("../../../shared");
const util_1 = require("../../../util");
exports.TrackedParameterFormSchema = zod_1.z.object({
    path: shared_1.parameterPathSchema,
    value: shared_1.parameterValueOrAvatarSchema,
}).transform((val) => {
    // convert to number or boolean, otherwise it must be avatarId
    let convertedVal = (0, util_1.convertParameterValueFromString)(val.value);
    if (convertedVal === undefined)
        convertedVal = val.value;
    return { path: val.path, value: convertedVal };
});
