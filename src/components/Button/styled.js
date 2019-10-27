import styled from "styled-components";
import { rem, rgba } from "polished";
import Icon from "../Icon";

const APPEARANCES = {
  PRIMARY: "primary",
  PRIMARY_DARK: "primaryDark",
  PRIMARY_OUTLINE: "primaryOutline",
  LIGHT: "light",
  LIGHT_OUTLINE: "lightOutline"
};

const SIZES = {
  TINY: "tiny",
  LARGER: "larger"
};

export const ButtonIcon = styled(Icon)`
  height: ${rem("14px")};
  width: ${rem("14px")};
`;

export const ButtonLeftIcon = styled(ButtonIcon)`
  margin-right: ${rem("8px")};
`;

export const ButtonRightIcon = styled(ButtonIcon)`
  margin-left: ${rem("8px")};
`;

export const ButtonText = styled.span`
  display: inline-block;
`;

export const Button = styled.button`
	display: inline-flex;
	justify-content: center;
	align-items: center;
  border: ${rem("1px")} solid transparent;
  overflow: hidden;
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: all 150ms ease-out;
  vertical-align: top;
  white-space: nowrap;
  user-select: none;
  opacity: 1;
  margin: 0;
  background: transparent;
  font-weight: 500;
  line-height: 1;
  cursor: pointer;

  /* Block */
  ${props =>
    props.block &&
    `
      width: 100%;
      display: flex;
    `}

  /* Sizes */
  ${props => {
    const { size, theme } = props;

    if (size === SIZES.TINY) {
      return `
        padding: ${rem("11px")} ${rem("12px")};
        border-radius: ${rem(theme.radius.tiny)};
        font-size: ${rem("16px")};

        ${ButtonIcon} {
          height: ${rem("14px")};
          width: ${rem("14px")};
        }
      `;
    }

    if (size === SIZES.LARGER) {
      return `
        padding: ${rem("14px")} ${rem("18px")};
        border-radius: ${rem(theme.radius.larger)};
        font-size: ${rem("20px")};

        ${ButtonIcon} {
          height: ${rem("18px")};
          width: ${rem("18px")};
        }
      `;
    }

    return `
      padding: ${rem("15px")} ${rem("20px")};
      border-radius: ${rem(theme.radius.medium)};
      font-size: ${rem("16px")};

      ${ButtonIcon} {
        height: ${rem("16px")};
        width: ${rem("16px")};
      }
    `;
  }}

  /* Appearances */
  ${props => {
    const { appearance, theme } = props;

    if (APPEARANCES.PRIMARY === appearance) {
      return `
        background: ${theme.colors.primary};
        border-color: ${theme.colors.primary};
        color: ${theme.colors.light};

        ${ButtonIcon} {
          path {
            fill: ${theme.colors.light};
          }
        }

        &:hover {
          background: ${theme.colors.light};
          border-color: ${theme.colors.light};
          color: ${theme.colors.primary};

          ${ButtonIcon} {
            path {
              fill: ${theme.colors.primary};
            }
          }
        }

        &:focus {
          box-shadow: 0 0 0 ${rem("3px")} ${rgba(theme.colors.primary, 0.3)};
        }
      `;
    }

    if (APPEARANCES.PRIMARY_DARK === appearance) {
      return `
        background: ${theme.colors.primary};
        border-color: ${theme.colors.primary};
        color: ${theme.colors.light};

        ${ButtonIcon} {
          path {
            fill: ${theme.colors.light};
          }
        }

        &:hover {
          background: ${theme.colors.primaryDark};
          border-color: ${theme.colors.primaryDark};
          color: ${theme.colors.light};

          ${ButtonIcon} {
            path {
              fill: ${theme.colors.light};
            }
          }
        }

        &:focus {
          box-shadow: 0 0 0 ${rem("3px")} ${rgba(theme.colors.primary, 0.3)};
        }
      `;
    }

    if (APPEARANCES.PRIMARY_OUTLINE === appearance) {
      return `
        border-color: ${theme.colors.primary};
        color: ${theme.colors.primary};

        ${ButtonIcon} {
          path {
            fill: ${theme.colors.primary};
          }
        }

        &:hover {
          background: ${theme.colors.primary};
          color: ${theme.colors.light};

          ${ButtonIcon} {
            path {
              fill: ${theme.colors.light};
            }
          }
        }

        &:focus {
          box-shadow: 0 0 0 ${rem("3px")} ${rgba(theme.colors.primary, 0.3)};
        }
      `;
    }

    if (APPEARANCES.LIGHT === appearance) {
      return `
        background: ${theme.colors.light};
        border-color: ${theme.colors.light};
        color: ${theme.colors.primary};

        ${ButtonIcon} {
          path {
            fill: ${theme.colors.primary};
          }
        }

        &:hover {
          background: ${theme.colors.primaryLight};
          border-color: ${theme.colors.primaryLight};
          color: ${theme.colors.light};

          ${ButtonIcon} {
            path {
              fill: ${theme.colors.light};
            }
          }
        }

        &:focus {
          box-shadow: 0 0 0 ${rem("3px")} ${rgba(theme.colors.light, 0.3)};
        }
      `;
    }

    if (APPEARANCES.LIGHT_OUTLINE === appearance) {
      return `
        border-color: ${theme.colors.light};
        color: ${theme.colors.light};

        ${ButtonIcon} {
          path {
            fill: ${theme.colors.light};
          }
        }

        &:hover {
          background: ${theme.colors.light};
          color: ${theme.colors.primaryLight};

          ${ButtonIcon} {
            path {
              fill: ${theme.colors.primaryLight};
            }
          }
        }

        &:focus {
          box-shadow: 0 0 0 ${rem("3px")} ${rgba(theme.colors.light, 0.3)};
        }
      `;
    }
  }}
`;

export const ButtonLink = Button.withComponent("a");
