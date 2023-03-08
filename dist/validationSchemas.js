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
    id: zod_1.z.number().nullable(),
    client: zod_1.z.number(),
    avatar: zod_1.z.string(),
    label: zod_1.z.string(),
    primary: zod_1.z.boolean(),
    order: zod_1.z.number()
});
exports.avatarSchema = avatarSchema;
var layoutSchema = zod_1.z.object({
    id: zod_1.z.number().nullable(),
    avatar: zod_1.z.number(),
    name: zod_1.z.string(),
    order: zod_1.z.number()
});
exports.layoutSchema = layoutSchema;
var buttonSchema = zod_1.z.object({
    id: zod_1.z.number().nullable(),
    layout: zod_1.z.number(),
    label: zod_1.z.string().max(20).nullable(),
    key: zod_1.z.string().max(100),
    value: zod_1.z.string().max(5),
    type: zod_1.z.string(),
    image: zod_1.z.any().nullable(),
    order: zod_1.z.number()
});
exports.buttonSchema = buttonSchema;
