import styled from "styled-components";
import { primaryFont, typeScale } from "./../utils";

export const H1 = styled.h1`
  color: ${({ theme }) => theme.textColor};
  font-family: ${primaryFont};
  font-size: ${typeScale.header1};
  font-style: normal;
  font-weight: 400;
  line-height: 37px;
`;

export const H2 = styled.h2`
  color: ${({ theme }) => theme.textColor};
  font-family: ${primaryFont};
  font-size: ${typeScale.header2};
  font-style: normal;
  font-weight: 400;
  line-height: 29px;
`;

export const H3 = styled.h3`
  color: ${({ theme }) => theme.textColor};
  font-family: ${primaryFont};
  font-size: ${typeScale.header3};
  font-style: normal;
  font-weight: 400;
  line-height: 29px;
`;

export const H4 = styled.h4`
  color: ${({ theme }) => theme.textColor};
  font-family: ${primaryFont};
  font-size: ${typeScale.header4};
  font-style: normal;
  font-weight: 400;
  line-height: 26px;
`;

export const H5 = styled.h5`
  color: ${({ theme }) => theme.textColor};
  font-family: ${primaryFont};
  font-size: ${typeScale.header5};
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`;

export const P = styled.p`
  color: ${({ theme }) => theme.textColor};
  font-family: ${primaryFont};
  font-size: ${typeScale.paragraph};
  font-style: normal;
  font-weight: 400;
  line-height: 21px;
`;
