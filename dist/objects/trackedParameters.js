"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrackedParametersSchema = exports.TrackedParameterSchema = exports.TrackedParametersMap = void 0;
const zod_1 = require("zod");
const shared_1 = require("../shared");
class TrackedParametersMap extends Map {
    dto() {
        return [...this.entries()];
    }
    getParameter(key) {
        const value = this.get(key);
        if (!value)
            return undefined;
        return { path: key, value: value };
    }
    getParameterDto(key) {
        const value = this.get(key);
        if (!value)
            return undefined;
        return [key, value];
    }
}
exports.TrackedParametersMap = TrackedParametersMap;
exports.TrackedParameterSchema = zod_1.z.tuple([
    shared_1.parameterPathSchema,
    shared_1.parameterValueObjectOrAvatarSchema,
]);
exports.TrackedParametersSchema = zod_1.z.array(exports.TrackedParameterSchema);
