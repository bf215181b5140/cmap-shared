"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LayoutFormSchema = exports.LayoutPageSchema = void 0;
const zod_1 = require("zod");
const client_1 = require("../../objects/client");
const layout_1 = require("../../objects/layout");
const group_1 = require("../../objects/group");
const controlParameter_1 = require("../../objects/controlParameter");
const parameterBadge_1 = require("../../objects/parameterBadge");
const button_1 = require("../../objects/button");
const uploadedFile_1 = require("../../objects/uploadedFile");
const shared_1 = require("../../shared");
// ugly extends to make nested object properties required
exports.LayoutPageSchema = client_1.ClientSchema.required({
    tier: true,
    background: true,
    style: true,
    interactionKeys: true,
}).and(zod_1.z.object({
    layouts: zod_1.z.array(layout_1.LayoutSchema.extend({
        controlParameters: zod_1.z.array(controlParameter_1.ControlParameterSchema),
        parameterBadges: zod_1.z.array(parameterBadge_1.ParameterBadgeSchema),
        groups: zod_1.z.array(group_1.GroupSchema.extend({
            visibilityParameters: zod_1.z.array(controlParameter_1.ControlParameterSchema),
            buttons: zod_1.z.array(button_1.ButtonSchema.extend({
                image: uploadedFile_1.UploadedFileSchema.nullable(),
                callbackParameters: zod_1.z.array(controlParameter_1.ControlParameterSchema),
                visibilityParameters: zod_1.z.array(controlParameter_1.ControlParameterSchema),
            })),
        })),
    }))
}));
exports.LayoutFormSchema = zod_1.z.object({
    id: shared_1.IdSchema.nullable(),
    label: zod_1.z.string().min(3).max(32),
    avatars: zod_1.z.array(shared_1.vrcAvatarIdSchema),
    healthEnabled: zod_1.z.boolean(),
    healthPath: shared_1.parameterPathSchema.nullable(),
    healthMax: zod_1.z.number().nullable(),
    useCostEnabled: zod_1.z.boolean(),
    useCostPath: shared_1.parameterPathSchema.nullable(),
    useCostMax: zod_1.z.number().nullable(),
});
