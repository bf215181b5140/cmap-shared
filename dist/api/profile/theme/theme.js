"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThemesSchema = void 0;
const zod_1 = require("zod");
const theme_1 = require("../../../objects/theme");
exports.ThemesSchema = zod_1.z.array(theme_1.ThemeSchema.required({
    tier: true,
}));
