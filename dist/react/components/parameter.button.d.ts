import { ButtonDTO, ButtonStyleDTO, ControlParameterDTO, UsedButton } from '../../index';
export declare const URL: string;
interface ParameterButtonProps {
    button: ButtonDTO;
    buttonStyle: ButtonStyleDTO;
    active?: boolean;
    disabled?: boolean;
    value?: string | number | boolean | undefined;
    useCostParameter?: {
        controlParameter: ControlParameterDTO;
        value: number;
    };
    onClick?: (usedParameter: UsedButton) => void;
}
export default function ParameterButton(props: ParameterButtonProps): import("react/jsx-runtime").JSX.Element;
export {};
