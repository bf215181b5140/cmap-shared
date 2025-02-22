"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PresetGroupSchema = void 0;
const zod_1 = require("zod");
const visibilityParameter_1 = require("./visibilityParameter");
const baseGroup_1 = require("./baseGroup");
const presetButton_1 = require("./presetButton");
exports.PresetGroupSchema = baseGroup_1.BaseGroupSchema.extend({
    visibilityParameters: zod_1.z.array(visibilityParameter_1.VisibilityParameterSchema),
    presetButtons: zod_1.z.array(presetButton_1.PresetButtonSchema).optional(),
});
