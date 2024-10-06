"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeneratedInviteKeySchema = void 0;
const zod_1 = require("zod");
const inviteKey_1 = require("../../../objects/inviteKey");
exports.GeneratedInviteKeySchema = inviteKey_1.InviteKeySchema.required({
    tier: true
}).extend({
    used: zod_1.z.boolean(),
});
