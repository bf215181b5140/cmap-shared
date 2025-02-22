"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvatarGroupSchema = void 0;
const zod_1 = require("zod");
const baseGroup_1 = require("./baseGroup");
const avatarButton_1 = require("./avatarButton");
exports.AvatarGroupSchema = baseGroup_1.BaseGroupSchema.extend({
    avatarButtons: zod_1.z.array(avatarButton_1.AvatarButtonSchema).optional(),
});
