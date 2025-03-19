"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiResponseSchema = void 0;
const zod_1 = require("zod");
const notificationType_1 = require("../enums/notificationType");
exports.ApiResponseSchema = zod_1.z.object({
    type: notificationType_1.NotificationTypeSchema,
    id: zod_1.z.string(),
    message: zod_1.z.string(),
});
