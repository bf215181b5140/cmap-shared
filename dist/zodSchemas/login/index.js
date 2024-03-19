"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginFormSchema = void 0;
var crypto_1 = require("crypto");
var zod_1 = require("zod");
exports.LoginFormSchema = zod_1.z.object({
    username: zod_1.z.string().max(16),
    password: zod_1.z.string().max(256).transform(function (val) { return (0, crypto_1.createHash)('sha256').update(val).digest().toString(); }),
});
