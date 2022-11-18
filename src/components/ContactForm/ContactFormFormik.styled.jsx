import styled from '@emotion/styled';
import { Form, Field, ErrorMessage } from 'formik';
import MaskedInput from 'react-text-mask';
export const PbForm = styled(Form)`
  margin-bottom: ${p => p.theme.space[3]}px;
`;

export const Label = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;

  &:not(:last-child) {
    margin-bottom: ${p => p.theme.space[3]}px;
  }
`;

export const LabelName = styled.span`
  font-weight: ${p => p.theme.fontWeights.bold};
  margin-bottom: ${p => p.theme.space[2]}px;
`;
export const InputField = styled(Field)`
  height: 24px;
  min-width: 176px;
  border-radius: ${p => p.theme.radii.normal};
  border: ${p => p.theme.borders.light};
  border-color: ${p => p.theme.colors.mainBorder};
  padding-left: ${p => p.theme.space[2]}px;
`;
export const InputMaskField = styled(MaskedInput)`
  height: 24px;
  min-width: 176px;
  border-radius: ${p => p.theme.radii.normal};
  border: ${p => p.theme.borders.light};
  border-color: ${p => p.theme.colors.mainBorder};
  padding-left: ${p => p.theme.space[2]}px;
`;
export const ErrorMessageField = styled(ErrorMessage)`
  position: absolute;
  top: 64px;

  right: 50%;
  transform: translateX(50%);

  width: 100%;
  z-index: 10;

  font-style: italic;
  border: ${p => p.theme.borders.light};
  border-color: ${p => p.theme.colors.secondaryBorder};
  padding: ${p => p.theme.space[1]}px;
  background-color: ${p => p.theme.colors.notification};
  border-radius: ${p => p.theme.radii.normal};
  font-size: ${p => p.theme.fontSizes.s};
  text-align: center;
`;
export const SubmitBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: inherit;
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
  margin: 0 auto;
  padding: ${p => p.theme.space[3]}px;
  height: 30px;
  border: ${p => p.theme.borders.light};
  border-color: ${p => p.theme.colors.mainBorder};
  box-shadow: ${p => p.theme.shadows.items};
  border-radius: ${p => p.theme.radii.normal};
  background-color: ${p => p.theme.colors.btn};
  fill: currentColor;
  transition: fill 250ms linear, background-color 250ms linear;
  svg {
    width: 24px;
    height: 24px;
    margin-right: ${p => p.theme.space[2]}px;
  }
  &:hover,
  &:focus {
    fill: green;
    background-color: ${p => p.theme.colors.btnAccent};
  }
`;
