import styled, { css } from 'styled-components';
import { ImageOrientation, imageOrientationToAspectRatio, imageUrlPathToUrl, PresetDTO, ThemeDTO, UsePresetDTO } from '../../../src';
import React, { MouseEvent, useMemo, useState } from 'react';
import { ExpIcon } from '../expIcon/expIcon.component';
import { ButtonBaseStyle } from './button.style';

interface PresetButtonProps {
  theme: ThemeDTO;
  preset: PresetDTO;
  exp?: number;
  onClick?: (event: MouseEvent<HTMLDivElement>, usePreset: UsePresetDTO) => void;
}

export function PresetButton({ theme, preset, exp, onClick }: PresetButtonProps) {

  const enoughExp = useMemo(() => {
    if (!preset.useCost) return true;
    if (exp === undefined) return true;
    return exp >= preset.useCost;
  }, [preset.useCost, exp])

  const disabled = !enoughExp;

  const [presetUsed, setPresetUsed] = useState(false);

  function onClickInternal(event: React.MouseEvent<HTMLDivElement>) {
    if (presetUsed) return;

    if (onClick) onClick(event, { id: preset.id });

    setPresetUsed(true);
    setTimeout(() => setPresetUsed(false), 100);
  }

  return (<PresetButtonStyled>
    <ParameterButtonStyled className={'parameterButton'} themeDto={theme} aria-readonly={disabled} onClick={onClickInternal} presetUsed={presetUsed}>
      {preset.image && <ParameterButtonPicture src={imageUrlPathToUrl(preset.image.urlPath)} imageOrientation={preset.imageOrientation} />}
      {preset.showLabel && <ParameterButtonLabel>{preset.label}</ParameterButtonLabel>}
      {preset.useCost && <ExpIcon enoughExp={enoughExp} exp={preset.useCost} />}
    </ParameterButtonStyled>
  </PresetButtonStyled>)
}

const PresetButtonStyled = styled.div`
    width: 100%;
    margin-bottom: 20px;
    break-inside: avoid-column;
    position: relative;

`;

const ParameterButtonStyled = styled(ButtonBaseStyle)<{ presetUsed: boolean }>`
  min-height: 72px;
  overflow: hidden;
  position: relative;

  ${props => props.presetUsed && css`transform: scale(1) !important;`}
`;

const ParameterButtonPicture = styled.div<{ src: string, imageOrientation: ImageOrientation }>`
  width: 100%;
  aspect-ratio: ${props => imageOrientationToAspectRatio(props.imageOrientation)};
  background: url(${props => props.src}) no-repeat center;
  background-size: cover;
`;

const ParameterButtonLabel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px;
`;
