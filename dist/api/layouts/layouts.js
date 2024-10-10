"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LayoutsPageSchema = void 0;
// ugly extends to make nested object properties required
const client_1 = require("../../objects/client");
exports.LayoutsPageSchema = client_1.ClientSchema.required({
    tier: true,
    background: true,
    style: true,
    interactionKeys: true,
    layouts: true,
});
