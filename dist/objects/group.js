"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupSchema = void 0;
const shared_1 = require("../shared");
const zod_1 = require("zod");
const button_1 = require("./button");
const groupWidth_1 = require("../enums/groupWidth");
const visibilityParameter_1 = require("./visibilityParameter");
exports.GroupSchema = zod_1.z.object({
    id: shared_1.IdSchema,
    label: zod_1.z.string(),
    showLabel: zod_1.z.boolean(),
    order: zod_1.z.number(),
    width: groupWidth_1.GroupWidthSchema,
    visibilityParameters: zod_1.z.array(visibilityParameter_1.VisibilityParameterSchema),
    interactionKeyId: zod_1.z.string().nullable(),
    buttons: zod_1.z.array(button_1.ButtonSchema).optional(),
});