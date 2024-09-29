"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeneratedAccountKeySchema = void 0;
const zod_1 = require("zod");
const accountKey_1 = require("../../../objects/accountKey");
exports.GeneratedAccountKeySchema = accountKey_1.AccountKeySchema.required({
    tier: true
}).extend({
    used: zod_1.z.boolean(),
});
