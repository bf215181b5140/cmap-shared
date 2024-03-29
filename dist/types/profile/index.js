"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileFormSchema = void 0;
const zod_1 = require("zod");
exports.ProfileFormSchema = zod_1.z.object({
    displayName: zod_1.z.string().min(3).max(32),
    bio: zod_1.z.string().max(1000),
    hidden: zod_1.z.boolean(),
});
