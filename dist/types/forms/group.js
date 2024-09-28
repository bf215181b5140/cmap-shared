"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupFormSchema = void 0;
const shared_1 = require("../shared");
const zod_1 = require("zod");
const types_1 = require("../../react/types");
exports.GroupFormSchema = shared_1.BaseFormSchema.extend({
    label: zod_1.z.string().max(32),
    order: zod_1.z.number(),
    width: zod_1.z.nativeEnum(types_1.SegmentWidth),
    visibilityParameters: zod_1.z.array(shared_1.IdSchema),
    interactionKeyId: shared_1.IdSchema.min(0).nullable(),
});
