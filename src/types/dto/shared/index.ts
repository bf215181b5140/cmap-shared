export interface BaseDTO<T> {
    id?: string;
}

export interface BaseParentDTO<T> extends BaseDTO<BaseParentDTO<T>> {
    parentId?: string;
}

export enum ParameterValueType {
    Int = 'Int',
    Float = 'Float',
    Bool = 'Bool',
}

