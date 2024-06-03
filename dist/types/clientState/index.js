"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientStateParamsSchema = void 0;
const zod_1 = require("zod");
exports.ClientStateParamsSchema = zod_1.z.array(zod_1.z.tuple([
    zod_1.z.string().min(1).max(150),
    zod_1.z.union([zod_1.z.string(), zod_1.z.number(), zod_1.z.boolean()]),
]));
