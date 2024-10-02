"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiError = exports.ApiResponseSchema = void 0;
const zod_1 = require("zod");
const notification_1 = require("../../enums/notification");
exports.ApiResponseSchema = zod_1.z.object({
    type: notification_1.NotificationTypeSchema,
    message: zod_1.z.string(),
});
class ApiError extends Error {
    type;
    name = 'ApiResponse';
    constructor(type, message) {
        super(message);
        this.type = type;
    }
}
exports.ApiError = ApiError;
