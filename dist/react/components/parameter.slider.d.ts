interface ParameterSliderProps {
    value: number;
    min: number;
    max: number;
    disabled: boolean;
    className: string;
    onClick: (value: string) => void;
}
export default function ParameterSlider({ value, min, max, disabled, className, onClick }: ParameterSliderProps): import("react/jsx-runtime").JSX.Element;
export {};
