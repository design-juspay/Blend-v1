import { FOUNDATION_THEME } from "../../tokens";
import { CSSObject } from "styled-components";
import { foundationToken } from "../../foundationToken";

type ModalToken = {
  backgroundColor: CSSObject["backgroundColor"];
  backdropColor: CSSObject["backgroundColor"];
  backdropOpacity: string;
  borderRadius: CSSObject["borderRadius"];
  boxShadow: CSSObject["boxShadow"];
  borderColor: CSSObject["borderColor"];
  dividerColor: CSSObject["borderColor"];
  titleColor: CSSObject["color"];
  subtitleColor: CSSObject["color"];
  closeButtonColor: CSSObject["color"];
  closeButtonHoverColor: CSSObject["color"];
  maxWidth: CSSObject["maxWidth"];
  maxHeight: CSSObject["maxHeight"];
  padding: {
    header: CSSObject["padding"];
    body: CSSObject["padding"];
    footer: {
      x: CSSObject["paddingLeft"];
      y: CSSObject["paddingTop"];
    };
  };
  gap: {
    header: CSSObject["gap"];
    footer: CSSObject["gap"];
  };
  zIndex: CSSObject["zIndex"];
  pointerEvents: CSSObject["pointerEvents"];
};

const modalTokens: ModalToken = {
  backgroundColor: foundationToken.colors.gray[0],
  backdropColor: foundationToken.colors.gray[700],
  backdropOpacity: "0.6",
  borderRadius: FOUNDATION_THEME.border.radius[12],
  boxShadow: FOUNDATION_THEME.shadows.xs,
  borderColor: foundationToken.colors.gray[200],
  dividerColor: foundationToken.colors.gray[200],
  titleColor: foundationToken.colors.gray[700],
  subtitleColor: foundationToken.colors.gray[500],
  closeButtonColor: foundationToken.colors.gray[500],
  closeButtonHoverColor: foundationToken.colors.gray[700],
  maxWidth: "calc(100vw - 2rem)",
  maxHeight: "calc(100vh - 2rem)",
  padding: {
    header: FOUNDATION_THEME.unit[16],
    body: FOUNDATION_THEME.unit[16],
    footer: {
      x: FOUNDATION_THEME.unit[24],
      y: FOUNDATION_THEME.unit[16]
    }
  },
  gap: {
    header: FOUNDATION_THEME.unit[16],
    footer: FOUNDATION_THEME.unit[12]
  },
  zIndex: "50",
  pointerEvents: "auto"
};

export default modalTokens;
