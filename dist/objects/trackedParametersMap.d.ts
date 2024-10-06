export declare class TrackedParametersMap extends Map<string, boolean | number | string> {
    dto(): [string, string | number | boolean][];
    getParameter(key: string): {
        path: string;
        value: string | number | true;
    } | undefined;
    getParameterDto(key: string): (string | number | true)[] | undefined;
}
