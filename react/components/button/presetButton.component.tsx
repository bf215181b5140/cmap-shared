import styled, { css } from 'styled-components';
import { ImageOrientation, imageOrientationToAspectRatio, imageUrlPathToUrl, PresetButtonDTO, ThemeDTO, UsePresetButtonDTO } from '../../../src';
import React, { MouseEvent, useMemo, useState } from 'react';
import { ExpIcon } from '../expIcon/expIcon.component';
import { ButtonBaseStyle } from './button.style';

interface PresetButtonProps {
  theme: ThemeDTO;
  presetButton: PresetButtonDTO;
  exp?: number;
  onClick?: (event: MouseEvent<HTMLDivElement>, usePreset: UsePresetButtonDTO) => void;
}

export function PresetButtonComponent({ theme, presetButton, exp, onClick }: PresetButtonProps) {

  const enoughExp = useMemo(() => {
    if (!presetButton.useCost) return true;
    if (exp === undefined) return true;
    return exp >= presetButton.useCost;
  }, [presetButton.useCost, exp])

  const disabled = !enoughExp;

  const [presetUsed, setPresetUsed] = useState(false);

  function onClickInternal(event: React.MouseEvent<HTMLDivElement>) {
    if (presetUsed) return;

    if (onClick) onClick(event, { id: presetButton.id });

    setPresetUsed(true);
    setTimeout(() => setPresetUsed(false), 100);
  }

  return (<PresetButtonStyled>
    <ParameterButtonStyled className={'parameterButton'} themeDto={theme} aria-readonly={disabled} onClick={onClickInternal} presetUsed={presetUsed}>
      {presetButton.image && <ParameterButtonPicture src={imageUrlPathToUrl(presetButton.image.urlPath)} imageOrientation={presetButton.imageOrientation} />}
      {presetButton.label && <ParameterButtonLabel>{presetButton.label}</ParameterButtonLabel>}
      {presetButton.useCost && <ExpIcon enoughExp={enoughExp} exp={presetButton.useCost} />}
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
