import styled from 'styled-components';
// @ts-ignore
import emptyHealth from '../../../images/hpBarEmpty.png';
// @ts-ignore
import fullHealth from '../../../images/hpBarFull.png';
// @ts-ignore
import expBarEmpty from '../../../images/expBarEmpty.png';
// @ts-ignore
import expBarFull from '../../../images/expBarFull.png';
import { LayoutDTO } from '../../../src';

interface HealthAndExpProps {
  layout: LayoutDTO;
  health: number | undefined;
  exp: number | undefined;
}

export function HealthAndExp({ layout, health, exp }: HealthAndExpProps) {

  if (!layout?.healthEnabled && !layout?.useCostEnabled) return;

  function healthFullness(current: number | undefined, max: number): string {
    if (!current) return '100%';
    const percentage = (Math.min(current, Number(max)) / Number(max)) * 100;
    return percentage.toString() + '%';
  }

  function expFullness(current: number | undefined, max: number): string {
    if (!current) return '100%';
    const percentage = (current % 20) * 5;
    return percentage.toString() + '%';
  }

  return (<ProfileHealthUseCostStyled>

    {(layout.healthEnabled && layout.healthMax) && <HealthStyled background={emptyHealth}>
      <HealthFull background={fullHealth} width={healthFullness(health, layout.healthMax)} />
    </HealthStyled>}

    {(layout.useCostEnabled && layout.useCostMax) && <UseCostStyled background={expBarEmpty}>
      <UseCostFull background={expBarFull} width={expFullness(exp, layout.useCostMax)} />
      <UseCostLabel>{exp}</UseCostLabel>
    </UseCostStyled>}

  </ProfileHealthUseCostStyled>);
}

const ProfileHealthUseCostStyled = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  min-height: 45px;
`;

const HealthStyled = styled.div<{ background: string }>`
  width: 53%;
  max-width: 241px;
  aspect-ratio: 9/1;
  margin: 2px 0;
  position: relative;
  background: url(${props => props.background}) no-repeat;
  background-size: 100%;
`;

const HealthFull = styled.div<{ background: string, width: string }>`
  position: absolute;
  inset: 0;
  background: url(${props => props.background}) no-repeat;
  background-size: 100%;
  mask-image: linear-gradient(to right, black ${props => props.width}, transparent ${props => props.width});
`;

const UseCostStyled = styled.div<{ background: string }>`
  width: 100%;
  max-width: 450px;
  aspect-ratio: 32/1;
  margin: 2px 0;
  position: relative;
  background: url(${props => props.background}) no-repeat;
  background-size: 100%;
`;

const UseCostFull = styled.div<{ background: string, width: string }>`
  position: absolute;
  inset: 0;
  background: url(${props => props.background}) no-repeat;
  background-size: 100%;
  mask-image: linear-gradient(to right, black ${props => props.width}, transparent ${props => props.width});

`;

const UseCostLabel = styled.div`
  color: #96d066;
  font-weight: normal;
  font-size: 20px;
  text-shadow: 0 0 3px black;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
  position: absolute;
  top: -6px;
  width: 100%;
  text-align: center;
`;
