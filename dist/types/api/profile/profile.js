"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileSchema = void 0;
const client_1 = require("../../objects/client");
exports.ProfileSchema = client_1.ClientSchema.required({
    image: true,
    tier: true,
    background: true,
    style: true,
    layouts: true,
    interactionKeys: true,
});
