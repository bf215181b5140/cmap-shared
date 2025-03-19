import styled from 'styled-components';
import { ParameterBadgeDTO, ParameterBadgeTypeSchema } from '../../../src';
import { useMemo } from 'react';

interface ProfileParameterBadgeProps {
  badge: ParameterBadgeDTO;
  parameters: Map<string, string | number | boolean>;
}

export function ParameterBadge({ badge, parameters }: ProfileParameterBadgeProps) {

  const parameterValue = parameters.get(badge.path);

  const badgeData: { label: string, icon: string } | undefined = useMemo(() => {
    switch (badge.type) {
      case ParameterBadgeTypeSchema.Values.Afk:
        if (parameterValue === true) return { label: 'AFK', icon: 'ri-zzz-line' };
        break;
      case ParameterBadgeTypeSchema.Values.VrMode:
        if (parameterValue === 1) return { label: 'in VR', icon: 'ri-goggles-line' };
        if (parameterValue === 0) return { label: 'Desktop', icon: 'ri-computer-line' };
        break;
      case ParameterBadgeTypeSchema.Values.Mute:
        if (parameterValue === true) return { label: 'Muted', icon: 'ri-mic-off-fill' };
        break;
      case ParameterBadgeTypeSchema.Values.TrackingType:
        if (parameterValue === 6) return { label: 'FBT', icon: 'ri-run-line' };
        if (typeof parameterValue === 'number' && parameterValue > 3) return { label: `${parameterValue}-point tracking`, icon: 'ri-run-line' };
        break;
      case ParameterBadgeTypeSchema.Values.Custom:
        if (badge.label.includes('{v}') && parameterValue !== undefined) {
          return { label: badge.label.replace('{v}', parameterValue.toString()), icon: badge.icon };
        }
        if (parameterValue !== undefined && parameterValue === badge.value && badge.label) {
          return { label: badge.label, icon: badge.icon };
        }
        break;
    }
  }, [badge, parameterValue]);

  if (badgeData === undefined) return null;

  return (<ParameterBadgeStyled>
    {badgeData.icon && <i className={badgeData.icon} />}
    {badgeData.label}
  </ParameterBadgeStyled>);
}

const ParameterBadgeStyled = styled.span<{ color?: string }>`
  display: inline-block;
  padding: 0 5px;
  margin: 0 3px;

  i {
    color: ${props => props.theme.colors.font.icon};
    margin-right: 3px;
  }
`;
