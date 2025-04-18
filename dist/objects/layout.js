"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LayoutSchema = void 0;
const shared_1 = require("../shared");
const zod_1 = require("zod");
const group_1 = require("./group");
const parameterBadge_1 = require("./parameterBadge");
const presetButton_1 = require("./presetButton");
exports.LayoutSchema = zod_1.z.object({
    id: shared_1.IdSchema,
    label: zod_1.z.string(),
    avatars: zod_1.z.array(zod_1.z.string()),
    healthEnabled: zod_1.z.boolean(),
    healthPath: zod_1.z.string().nullable(),
    healthMax: zod_1.z.number().nullable(),
    useCostEnabled: zod_1.z.boolean(),
    useCostPath: zod_1.z.string().nullable(),
    useCostMax: zod_1.z.number().nullable(),
    customPresetsEnabled: zod_1.z.boolean(),
    customPresetsWhitelist: zod_1.z.array(zod_1.z.string()),
    customPresetsBlacklist: zod_1.z.array(zod_1.z.string()),
    groups: zod_1.z.array(group_1.GroupSchema).optional(),
    parameterBadges: zod_1.z.array(parameterBadge_1.ParameterBadgeSchema).optional(),
    presetButtons: zod_1.z.array(presetButton_1.PresetButtonSchema).optional(),
});
