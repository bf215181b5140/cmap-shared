export declare class FormMeta {
    version: string | undefined;
    name: string | undefined;
    label: string | undefined;
    fields: FormField[] | undefined | null;
}
export declare class FormField {
    name: string | undefined | null;
    label: string | undefined | null;
    description: string | undefined | null;
    type: string | undefined | null;
    required: boolean | undefined | null;
    minLength: number | undefined | null;
    maxLength: number | undefined | null;
    pattern: string | undefined | null;
    order: number | undefined | null;
    editable: boolean | undefined | null;
    visible: boolean | undefined | null;
    options: FieldOption[] | undefined | null;
}
export declare class FieldOption {
    key: string;
    value: string;
}
export declare enum FieldType {
    Text = "text",
    Textarea = "textarea",
    File = "file",
    Boolean = "boolean",
    Radio = "radio",
    Checkbox = "checkbox",
    Select = "select"
}
