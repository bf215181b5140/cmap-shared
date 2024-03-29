"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LayoutFormSchema = exports.LayoutWidth = void 0;
const zod_1 = require("zod");
const shared_1 = require("../shared");
var LayoutWidth;
(function (LayoutWidth) {
    LayoutWidth["None"] = "none";
    LayoutWidth["Third"] = "third";
    LayoutWidth["Half"] = "half";
    LayoutWidth["Full"] = "full";
})(LayoutWidth = exports.LayoutWidth || (exports.LayoutWidth = {}));
exports.LayoutFormSchema = shared_1.BaseParentIdSchema.extend({
    label: zod_1.z.string().max(32),
    order: zod_1.z.number(),
    width: zod_1.z.nativeEnum(LayoutWidth),
});
