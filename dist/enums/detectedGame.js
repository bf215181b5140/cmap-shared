"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DetectedGameSchema = void 0;
const zod_1 = require("zod");
exports.DetectedGameSchema = zod_1.z.enum(['VRChat', 'ChilloutVR']);
