"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderFormSchema = void 0;
const zod_1 = require("zod");
const shared_1 = require("../shared");
exports.OrderFormSchema = zod_1.z.array(shared_1.BaseIdSchema.extend({
    order: zod_1.z.number(),
}));
