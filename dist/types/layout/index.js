"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LayoutFormSchema = exports.ContentBoxWidth = void 0;
var zod_1 = require("zod");
var shared_1 = require("../shared");
var ContentBoxWidth;
(function (ContentBoxWidth) {
    ContentBoxWidth["None"] = "none";
    ContentBoxWidth["Third"] = "third";
    ContentBoxWidth["Half"] = "half";
    ContentBoxWidth["Full"] = "full";
})(ContentBoxWidth = exports.ContentBoxWidth || (exports.ContentBoxWidth = {}));
exports.LayoutFormSchema = shared_1.BaseParentIdSchema.extend({
    label: zod_1.z.string().max(32),
    order: zod_1.z.number(),
    width: zod_1.z.nativeEnum(ContentBoxWidth),
});
