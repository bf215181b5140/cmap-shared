import { ButtonDto, ButtonStyleDto, ControlParameterDto, UsedButton } from '../../index';
export declare const URL: string;
interface ParameterButtonProps {
    button: ButtonDto;
    buttonStyle: ButtonStyleDto;
    active?: boolean;
    disabled?: boolean;
    value?: string | number | boolean | undefined;
    useCostParameter?: {
        controlParameter: ControlParameterDto;
        value: number;
    };
    onClick?: (usedParameter: UsedButton) => void;
}
export default function ParameterButton(props: ParameterButtonProps): import("react/jsx-runtime").JSX.Element;
export {};
