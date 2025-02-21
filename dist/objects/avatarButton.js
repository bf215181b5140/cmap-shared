"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvatarButtonSchema = void 0;
const zod_1 = require("zod");
const baseButton_1 = require("./baseButton");
exports.AvatarButtonSchema = baseButton_1.BaseButtonSchema.extend({
    avatarId: zod_1.z.string(),
});
