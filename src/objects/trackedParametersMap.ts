export class TrackedParametersMap extends Map<string, boolean | number | string> {

    public dto() {
        return [...this.entries()];
    }

    public getParameter(key: string) {
        const value = this.get(key);
        if (!value) return undefined;
        return { path: key, value: value };
    }

    public getParameterDto(key: string) {
        const value = this.get(key);
        if (!value) return undefined;
        return [key, value];
    }
}
