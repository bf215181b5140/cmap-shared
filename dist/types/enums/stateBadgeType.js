"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StateBadgeTypeSchema = void 0;
const zod_1 = require("zod");
exports.StateBadgeTypeSchema = zod_1.z.enum(['Mute', 'VrMode', 'TrackingType', 'Afk', 'Custom']);
