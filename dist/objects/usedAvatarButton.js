"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsedAvatarButtonSchema = void 0;
const zod_1 = require("zod");
exports.UsedAvatarButtonSchema = zod_1.z.object({
    value: zod_1.z.string(),
});
