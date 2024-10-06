"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParameterBadgeTypeSchema = void 0;
const zod_1 = require("zod");
exports.ParameterBadgeTypeSchema = zod_1.z.enum(['Mute', 'VrMode', 'TrackingType', 'Afk', 'Custom']);
