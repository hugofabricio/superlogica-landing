import styled from "styled-components";
import { rem, rgba } from "polished";
import Card from "../Card";
import Icon from "../Icon";

export const PlanCard = styled(Card)`
  padding: 0;
  position: relative;
  width: ${rem(340)};
  text-align: center;
  border: ${rem(2)} solid ${({ theme }) => theme.colors.grey};

  ${props =>
    props.isBestSeller &&
    `
      color: ${({ theme }) => theme.colors.light};
      background-color: ${({ theme }) => theme.colors.primary};
    `}
`;

export const PlanBadge = styled.span`
  background-color: ${({ theme }) => theme.colors.primaryDark};
  position: absolute;
  padding: ${rem(10)};
  width: 100%;
  height: ${rem(40)};
  top: ${rem(-40)};
  display: block;
  left: 0;
  z-index: -1;

  font-size: ${rem(14)};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.light};
  text-transform: uppercase;
`;

export const PlanIcon = styled(Icon)`
  height: ${rem(58)};
  width: ${rem(58)};
  margin-bottom: ${rem(20)};

  path {
    fill: ${({ theme }) => theme.colors.primary};
  }
`;

export const PlanHeader = styled.header`
  padding: ${rem(40)} ${rem(40)} ${rem(30)};
`;

export const PlanTitle = styled.h3`
  font-weight: 500;
  font-size: ${rem(32)};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${rem(20)};
`;

export const PlanPrice = styled.span`
  font-weight: 500;
  font-size: ${rem(44)};
  line-height: ${rem(44)};

  &:before {
    vertical-align: top;
    content: "R$";
    font-size: ${rem(16)};
    margin-right: ${rem(4)};
  }

  &:after {
    content: attr(data-text);
    display: block;
    font-size: ${rem(14)};
  }
`;

export const PlanContent = styled.div``;

export const PlanDetails = styled.ul``;

export const PlanFeature = styled.li`
  border-bottom: ${rem(1)} solid ${({ theme }) => rgba(theme.colors.grey, 0.4)};
  padding: ${rem(10)};

  &:first-of-type {
    border-top: ${rem(1)} solid ${({ theme }) => rgba(theme.colors.grey, 0.4)};
  }
`;

export const PlanFooter = styled.footer`
  padding: ${rem(30)} ${rem(40)} ${rem(40)};
`;
