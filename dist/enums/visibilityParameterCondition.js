"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisibilityParameterConditionSchema = void 0;
const zod_1 = require("zod");
exports.VisibilityParameterConditionSchema = zod_1.z.enum(['Equal', 'Not_equal', 'Less_than', 'More_than']);
