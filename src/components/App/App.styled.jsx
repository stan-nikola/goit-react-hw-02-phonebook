import styled from '@emotion/styled';

export const Title = styled.h2`
  font-size: ${p => p.theme.fontSizes.xl};
  text-align: center;
  margin-bottom: ${p => p.theme.space[3]}px;
`;

export const Message = styled.h3`
  font-size: ${p => p.theme.fontSizes.m};
  max-width: 312px;
  text-align: center;
`;
