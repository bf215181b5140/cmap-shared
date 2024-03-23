export class BaseDTO<T> {
    id?: string;

    constructor(props?: Required<T> & Record<string, any>) {
        Object.assign(this, props);
    }
}

export class BaseParentDTO<T> extends BaseDTO<BaseParentDTO<T>> {
    parentId?: string;
}

export enum ParameterValueType {
    Int = 'Int',
    Float = 'Float',
    Bool = 'Bool',
}

