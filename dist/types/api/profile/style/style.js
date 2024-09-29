"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StylesSchema = void 0;
const zod_1 = require("zod");
const style_1 = require("../../../objects/style");
exports.StylesSchema = zod_1.z.array(style_1.StyleSchema.required({
    tier: true,
}));
