import { ButtonDTO, StyleDTO, UsedButtonDTO } from '../../index';
export declare const URL: string;
interface ParameterButtonProps {
    button: ButtonDTO;
    style: StyleDTO;
    active?: boolean;
    disabled?: boolean;
    value?: string | number | boolean | undefined;
    useCostParameter?: {
        path: string;
        value: number;
    };
    onClick?: (usedParameter: UsedButtonDTO) => void;
}
export default function ParameterButton(props: ParameterButtonProps): import("react/jsx-runtime").JSX.Element;
export {};
