"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StylePageSchema = void 0;
const client_1 = require("../../objects/client");
const zod_1 = require("zod");
const background_1 = require("../../objects/background");
const theme_1 = require("../../objects/theme");
exports.StylePageSchema = zod_1.z.object({
    client: client_1.ClientSchema.required({
        tier: true,
        background: true,
        theme: true,
    }),
    backgrounds: zod_1.z.array(background_1.BackgroundSchema.required({
        tier: true,
    })),
    themes: zod_1.z.array(theme_1.ThemeSchema.required({
        tier: true,
    })),
});
