"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisibilityParameterConditionSchema = void 0;
const zod_1 = require("zod");
exports.VisibilityParameterConditionSchema = zod_1.z.enum(['equal', 'not_equal', 'less_than', 'more_than']);
