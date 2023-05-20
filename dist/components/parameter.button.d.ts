import { ButtonDto, ButtonStyleDto } from '../index';
export declare const URL: string;
interface ParameterButtonProps {
    button: ButtonDto;
    buttonStyle: ButtonStyleDto;
    active?: boolean;
    disabled?: boolean;
    onClick?: (id: string) => void;
    flexBasis?: string;
}
export default function ParameterButton(props: ParameterButtonProps): import("react/jsx-runtime").JSX.Element;
export {};
