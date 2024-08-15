"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LayoutSchema = void 0;
const shared_1 = require("../shared");
const background_1 = require("./background");
const zod_1 = require("zod");
const group_1 = require("./group");
const callback_1 = require("./callback");
const style_1 = require("./style");
const stateBadge_1 = require("./stateBadge");
exports.LayoutSchema = shared_1.BaseIdSchema.extend({
    label: zod_1.z.string(),
    avatars: zod_1.z.array(zod_1.z.string()),
    backgroud: background_1.BackgroundSchema.optional(),
    style: style_1.StyleSchema.optional(),
    healthEnabled: zod_1.z.boolean(),
    healthPath: zod_1.z.string().nullable(),
    healthMax: zod_1.z.number().nullable(),
    useCostEnabled: zod_1.z.boolean(),
    useCostPath: zod_1.z.string().nullable(),
    useCostMax: zod_1.z.number().nullable(),
    groups: zod_1.z.array(group_1.GroupSchema).optional(),
    callbacks: zod_1.z.array(callback_1.CallbackSchema).optional(),
    stateBadges: zod_1.z.array(stateBadge_1.StateBadgeSchema).optional(),
});
