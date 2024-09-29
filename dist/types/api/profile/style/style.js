"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostStyleSchema = exports.GetStyleSchema = void 0;
const zod_1 = require("zod");
const shared_1 = require("../../../shared");
const style_1 = require("../../../objects/style");
exports.GetStyleSchema = zod_1.z.array(style_1.StyleSchema.required({
    tier: true,
}));
exports.PostStyleSchema = shared_1.BaseIdSchema;
