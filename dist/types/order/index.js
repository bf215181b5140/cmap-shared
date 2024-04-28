"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderListSchema = exports.OrderSchema = void 0;
const shared_1 = require("../shared");
const zod_1 = require("zod");
exports.OrderSchema = shared_1.RequiredIdSchema.extend({
    order: zod_1.z.number(),
});
exports.OrderListSchema = zod_1.z.array(exports.OrderSchema);
