"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UseAccountKeyFormSchema = void 0;
const zod_1 = require("zod");
exports.UseAccountKeyFormSchema = zod_1.z.object({
    key: zod_1.z.string().length(16, { message: 'Invalid key' }),
});
