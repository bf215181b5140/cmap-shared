interface ParameterSliderProps {
    value: number;
    step: number;
    min: number;
    max: number;
    disabled: boolean;
    className: string;
    onClick: (value: string) => void;
}
export default function ParameterSlider({ value, step, min, max, disabled, className, onClick }: ParameterSliderProps): import("react/jsx-runtime").JSX.Element;
export {};
