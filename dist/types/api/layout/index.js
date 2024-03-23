"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LayoutFormSchema = void 0;
var zod_1 = require("zod");
var index_1 = require("../../../index");
var shared_1 = require("../shared");
exports.LayoutFormSchema = shared_1.BaseParentIdSchema.extend({
    label: zod_1.z.string().max(32),
    order: zod_1.z.number(),
    width: zod_1.z.nativeEnum(index_1.ContentBoxWidth),
});
