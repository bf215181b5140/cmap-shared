"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrackedParametersMap = void 0;
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
