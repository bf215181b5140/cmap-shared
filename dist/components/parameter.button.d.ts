import { ButtonDto, ButtonStyleDto } from '../index';
interface ParameterButtonProps {
    button: ButtonDto;
    buttonStyle: ButtonStyleDto;
    active?: boolean;
    disabled?: boolean;
    onClick?: (id: string) => void;
    flexBasis?: string;
}
export default function ParameterButton(props: ParameterButtonProps): any;
export {};
