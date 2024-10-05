"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupSchema = void 0;
const shared_1 = require("../shared");
const zod_1 = require("zod");
const button_1 = require("./button");
const controlParameter_1 = require("./controlParameter");
const groupWidth_1 = require("../enums/groupWidth");
exports.GroupSchema = shared_1.BaseIdSchema.extend({
    label: zod_1.z.string(),
    order: zod_1.z.number(),
    width: groupWidth_1.GroupWidthSchema,
    visibilityParameters: zod_1.z.array(controlParameter_1.ControlParameterSchema).optional(),
    interactionKeyId: zod_1.z.string().nullable(),
    buttons: zod_1.z.array(button_1.ButtonSchema).optional(),
});
