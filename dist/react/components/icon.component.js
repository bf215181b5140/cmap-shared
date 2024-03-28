import { jsx as _jsx } from "react/jsx-runtime";
import styled from 'styled-components';
import { theme } from '../theme';
export default function Icon({ icon, color }) {
    return (_jsx(IconStyled, { className: icon, color: color }));
}
const IconStyled = styled.i `
  vertical-align: text-bottom;
  margin-right: 2px;
  color: ${props => props.color ? props.color : theme.colors.font.icon};
`;
