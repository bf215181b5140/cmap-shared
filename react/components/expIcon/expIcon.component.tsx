import styled from 'styled-components';
// @ts-ignore
import expOrb from '../../../images/expOrb.png';

interface ExpIconProps {
  enoughExp: boolean;
  exp: number;
}

export function ExpIcon({ enoughExp, exp }: ExpIconProps) {

  return (<ExpIconStyled background={expOrb} enoughExp={enoughExp}>
    {exp}
  </ExpIconStyled>);
}

const ExpIconStyled = styled.div<{ background: string, enoughExp: boolean }>`
  position: absolute;
  bottom: 12px;
  right: 14px;
  padding-right: 18px;
  background: url(${props => props.background}) center right no-repeat;
  background-size: 14px;
  color: ${props => props.enoughExp ? '#2ec92e' : '#dd3322'};
  text-shadow: 0 0 3px black;
  pointer-events: none;
`;