"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParameterGroupSchema = void 0;
const zod_1 = require("zod");
const parameterButton_1 = require("./parameterButton");
const visibilityParameter_1 = require("./visibilityParameter");
const baseGroup_1 = require("./baseGroup");
exports.ParameterGroupSchema = baseGroup_1.BaseGroupSchema.extend({
    visibilityParameters: zod_1.z.array(visibilityParameter_1.VisibilityParameterSchema),
    parameterButtons: zod_1.z.array(parameterButton_1.ParameterButtonSchema).optional(),
});
