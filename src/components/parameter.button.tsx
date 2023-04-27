import styled, { css } from 'styled-components';
import colors from '../colors.json';
import { ButtonDto } from '../index';

interface ParameterButtonProps {
    button: ButtonDto;
    active?: boolean;
    disabled?: boolean;
    onClick?: (id: string) => void;
    flexBasis?: string;
}


export default function ParameterButton(props: ParameterButtonProps) {

    function onClick(id: string) {
        if (!props.active && props.onClick) props.onClick(id);
    }

    return (<ParameterButtonStyled onClick={() => onClick(props.button.id)} flexBasis={props.flexBasis} active={props.active || props.disabled} >
        {props.button.image && <ParameterButtonPicture src={URL + '/' + props.button.image} />}
        {props.button.label && <ParameterButtonLabel>{props.button.label}</ParameterButtonLabel>}
    </ParameterButtonStyled>);
}

const ParameterButtonStyled = styled.div<{ flexBasis?: string, active: boolean }>`
  flex-basis: ${props => props.flexBasis ? props.flexBasis : '100%'};
  background: ${colors['ui-primary-1']};
  border-radius: 8px;
  text-align: center;
  transition: 0.2s linear;
  border: 2px solid ${colors['ui-primary-1']};
  padding: 0;
  align-self: flex-start;
  min-height: 4.5em;
  
  ${props => props.active ? activeParamStyle : regularParamStyle};
`;

const activeParamStyle = css`
  filter: saturate(0.5%);
`;

const regularParamStyle = css`
  cursor: pointer;

  :hover {
    transform: scale(1.02) perspective(1px);
    background: ${colors['ui-primary-3']};
    border: 2px solid ${colors['ui-primary-4']};
  }
`;

const ParameterButtonLabel = styled.div`
  padding: 1.5em;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ParameterButtonPicture = styled.div<{ src: string }>`
  width: 100%;
  aspect-ratio: 16/9;
  margin: 0;
  padding: 0;
  background: url(${props => props.src}) no-repeat center;
  background-size: cover;
  border-radius: 8px;
`;
