"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfilePageSchema = void 0;
const client_1 = require("../../objects/client");
exports.ProfilePageSchema = client_1.ClientSchema.required({
    image: true,
    tier: true,
    background: true,
    theme: true,
    layouts: true,
    interactionKeys: true,
});
