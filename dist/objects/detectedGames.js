"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DetectedGamesSchema = void 0;
const zod_1 = require("zod");
const detectedGame_1 = require("../enums/detectedGame");
exports.DetectedGamesSchema = zod_1.z.array(detectedGame_1.DetectedGameSchema).nullable();
