import styled from '@emotion/styled';

export const FilterLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 60%;
  margin: 0 auto;
  margin-bottom: ${p => p.theme.space[3]}px;
`;

export const InputFilterField = styled.input`
  height: 24px;
  min-width: 176px;
  border-radius: ${p => p.theme.radii.normal};
  border: ${p => p.theme.borders.light};
  border-color: ${p => p.theme.colors.mainBorder};
`;
