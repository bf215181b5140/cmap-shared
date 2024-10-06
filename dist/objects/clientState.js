"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientStateSchema = void 0;
const zod_1 = require("zod");
const trackedParameters_1 = require("./trackedParameters");
exports.ClientStateSchema = zod_1.z.object({
    isConnected: zod_1.z.boolean(),
    isOnVrchat: zod_1.z.boolean().nullable(),
    parameters: trackedParameters_1.TrackedParametersSchema,
});
