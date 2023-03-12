"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buttonSchema = exports.layoutSchema = exports.avatarSchema = exports.profileSchema = void 0;
var zod_1 = require("zod");
var profileSchema = zod_1.z.object({
    displayName: zod_1.z.string().min(3).max(50),
    bio: zod_1.z.string().max(500),
    hidden: zod_1.z.boolean()
});
exports.profileSchema = profileSchema;
var avatarSchema = zod_1.z.object({
    id: zod_1.z.string().nullable(),
    vrcId: zod_1.z.string(),
    label: zod_1.z.string().min(3).max(50),
    default: zod_1.z.boolean()
});
exports.avatarSchema = avatarSchema;
var layoutSchema = zod_1.z.object({
    id: zod_1.z.string().nullable(),
    label: zod_1.z.string().min(3).max(50),
    order: zod_1.z.number(),
    parentId: zod_1.z.string()
});
exports.layoutSchema = layoutSchema;
var buttonSchema = zod_1.z.object({
    id: zod_1.z.string().nullable(),
    label: zod_1.z.string().max(20).nullable(),
    path: zod_1.z.string().max(100),
    value: zod_1.z.string().max(5),
    valueType: zod_1.z.string(),
    buttonType: zod_1.z.string(),
    image: zod_1.z.any().nullable(),
    order: zod_1.z.number(),
    parentId: zod_1.z.string()
});
exports.buttonSchema = buttonSchema;
