import { ButtonDto } from './index';
interface ParameterButtonProps {
    button: ButtonDto;
    active?: boolean;
    disabled?: boolean;
    onClick?: (id: string) => void;
    flexBasis?: string;
}
export default function ParameterButton(props: ParameterButtonProps): any;
export {};
