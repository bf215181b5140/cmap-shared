"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LayoutSchema = void 0;
const shared_1 = require("../shared");
const zod_1 = require("zod");
const group_1 = require("./group");
const controlParameter_1 = require("./controlParameter");
const stateBadge_1 = require("./stateBadge");
exports.LayoutSchema = shared_1.BaseIdSchema.extend({
    label: zod_1.z.string(),
    avatars: zod_1.z.array(zod_1.z.string()),
    healthEnabled: zod_1.z.boolean(),
    healthPath: zod_1.z.string().nullable(),
    healthMax: zod_1.z.number().nullable(),
    useCostEnabled: zod_1.z.boolean(),
    useCostPath: zod_1.z.string().nullable(),
    useCostMax: zod_1.z.number().nullable(),
    groups: zod_1.z.array(group_1.GroupSchema).optional(),
    controlParameters: zod_1.z.array(controlParameter_1.ControlParameterSchema).optional(),
    stateBadges: zod_1.z.array(stateBadge_1.StateBadgeSchema).optional(),
});
