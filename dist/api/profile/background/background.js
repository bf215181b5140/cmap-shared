"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BackgroundsSchema = void 0;
const zod_1 = require("zod");
const background_1 = require("../../../objects/background");
exports.BackgroundsSchema = zod_1.z.array(background_1.BackgroundSchema.required({
    tier: true,
}));
