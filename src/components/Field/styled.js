import styled from "styled-components";
import { rem } from "polished";
import Icon from "../Icon";

export const Group = styled.div`
  margin-bottom: ${rem(15)};
`;

export const Label = styled.label`
  margin-bottom: ${rem(10)};

  ${props =>
    props.hidden &&
    `
      display: none;
    `}
`;

export const TextInputGroup = styled.div`
  position: relative;
`;

export const TextInput = styled.input`
  display: block;
  width: 100%;
  min-height: ${rem(48)};
  padding-top: ${rem(10)};
  padding-bottom: ${rem(10)};
  padding-left: ${props => (props.hasIcon ? rem(48) : rem(16))};
  padding-right: ${rem(16)};
  color: ${({ theme }) => theme.colors.primaryDark};
  background-color: ${({ theme }) => theme.colors.light};
  background-clip: padding-box;
  border: ${rem(1)} solid ${({ theme }) => theme.colors.greyMedium};
  border-radius: ${({ theme }) => theme.radius.medium};

  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${({ theme }) => theme.colors.primaryDark};
  }
  :-ms-input-placeholder {
    color: ${({ theme }) => theme.colors.primaryDark};
  }
`;

export const TextInputIcon = styled(Icon)`
  pointer-events: none;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${rem(16)};
  margin: auto;
  height: ${rem(18)};
  width: ${rem(18)};

  path {
    fill: ${({ theme }) => theme.colors.primaryDark};
  }
`;

export const Feedback = styled.span`
  width: 100%;
  margin-top: 0.25rem;
  font-size: ${rem(12)};
  color: ${({ theme }) => theme.colors.danger};
`;
