"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvatarSchema = void 0;
const shared_1 = require("../shared");
exports.AvatarSchema = shared_1.BaseIdSchema.extend({
    vrcAvatarId: shared_1.vrcAvatarIdSchema,
});
