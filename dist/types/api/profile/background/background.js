"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostBackgroundSchema = exports.GetBackgroundSchema = void 0;
const zod_1 = require("zod");
const background_1 = require("../../../objects/background");
const shared_1 = require("../../../shared");
exports.GetBackgroundSchema = zod_1.z.array(background_1.BackgroundSchema.required({
    tier: true,
}));
exports.PostBackgroundSchema = shared_1.BaseIdSchema;
